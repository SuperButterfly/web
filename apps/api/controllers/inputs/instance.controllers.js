// require('dotenv').config();
const { Instance, Template } = require('../../database.js')
const {
  SCW_PROJECT_ID,
  PASS_PHRASE,
  PRIVATE_KEY,
  SCW_URL
} = require('../../utils/consts.js')
const { sendRequest } = require('../../services/scaleway.js')

const { SSHUtility, wait } = require('../../utils/ssh')
const path = require('path')

const postInstance = async (req, res) => {
  try {
    const { instanceInfo } = req.body

    const instanceData = {
      name: `/var/www/${instanceInfo?.name ?? 'new-instance'}`,
      project: SCW_PROJECT_ID,
      commercial_type: instanceInfo.type,
      image: instanceInfo.image || '',
      enable_ipv6: true
    }

    // Create the instance in the SCW cloud
    const instanceResponse = await sendRequest(
      'POST',
      `/instance/v1/zones/${instanceInfo.zone}/servers`,
      instanceData
    )
    const { id } = instanceResponse.server

    const { server } = await sendRequest('GET', `/instance/v1/zones/${instanceInfo.zone}/servers/${id}`)
    console.log(server)

    // Create the instance in the DB
    const newInstance = await Instance.create(
      {
        id: server.id,
        name: server.name,
        volumeId: server.volumes['0'].id
      },
      {
        id: server.id,
        name: server.name,
        volumeId: server.volumes['0'].id
      }
    )

    // Set the relation with the project
    if (instanceInfo.projectId) {
      console.log(newInstance)
      console.log(instanceInfo.projectId)
      const template = await Template.findByPk(instanceInfo.projectId)
      if (!template) throw new Error('Template not found')
      await newInstance.setTemplate(template.id)
    }

    newInstance.save()

    res
      .status(201)
      .json({
        message: 'Instance created successfully',
        instance: newInstance
      })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error creating instance', message: error.message })
  }
}

const powerOnInstance = async (req, res) => {
  try {
    const { id, zone } = req.body
    await sendRequest(
      'POST',
      `/instance/v1/zones/${zone}/servers/${id}/action`,
      {
        action: 'poweron'
      }
    )

    let instanceStatus = ''
    while (instanceStatus !== 'running') {
      const instanceDetails = await sendRequest(
        'GET',
        `/instance/v1/zones/${zone}/servers/${id}`
      )
      instanceStatus = instanceDetails.server.state
      console.log(instanceStatus)

      if (instanceStatus !== 'running') {
        await wait(3000) // Wait for 3 seconds before checking again
      }
    }

    const { server } = await sendRequest(
      'GET',
      `/instance/v1/zones/${zone}/servers/${id}`
    )
    
    const instanceToUpdate = await Instance.findByPk(id)
    
    if(!instanceToUpdate) throw new Error('Instance not found')
    
    instanceToUpdate.update({
      ipID: server.public_ip.id,
      ipAddress: server.public_ip.address,
    })

    instanceToUpdate.save()

    res
      .status(200)
      .json({ message: 'Instance powered on', success: true, instance: instanceToUpdate }) 
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error powering on the instance', message: error.message })
  }
}

const addFilesToInstanceSSH = async (req, res) => {
  try {
    const { instanceID } = req.body

    const { server } = await sendRequest('GET', `/servers/${instanceID}`)
    // or bring it from the DB

    if (server.state === 'running') {
      const config = {
        host: server.public_ip.address,
        username: 'root',
        privateKeyPath: PRIVATE_KEY,
        passphrase: PASS_PHRASE
      }

      const ssh = new SSHUtility()

      await ssh.connect(config)
      // await ssh.addSSHKeyToAuthorizedKeys(PUBLIC_KEY, config.username)

      const localFilePath = path.resolve(__dirname, '../../app.js')
      const remoteDirectory = '/root/test'
      await ssh.transferFiles(localFilePath, remoteDirectory)

      await ssh.listRemoteMachineFiles()

      await ssh.disconnect()
    }
    res.status(200).json({ message: 'Files sent successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error establishing connection', message: error.message })
  }
}

const updateInstance = async (req, res) => {
  try {
    const { instanceInfo } = req.body
    const { id } = req.params

    console.log(instanceInfo)
    console.log(id)

    const instanceToUpd = await Instance.findByPk(id)
    if (!instanceToUpd) throw new Error('Instance not found')

    const response = await sendRequest('PATCH', `/servers/${id}`, instanceInfo)

    await instanceToUpd.update(response)

    res.status(200).json({
      message: 'Instance updated successfully',
      instance: instanceToUpd
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteInstance = async (req, res) => {
  try {
    const { idInstance } = req.params

    const instanceToDelete = await Instance.findByPk(idInstance)
    if (!instanceToDelete) throw new Error('Instance not found.')

    const instanceResponse = await sendRequest(
      'DELETE',
      `${SCW_URL}/${idInstance}`
    )
    const volumeResponse = await sendRequest(
      'DELETE',
      `/volumes/${instanceToDelete.volumeId}`
    )
    console.log(volumeResponse.data)
    console.log(instanceResponse.data)

    await instanceToDelete.destroy()

    res
      .status(200)
      .json({ message: 'Instance and volume deleted', success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const createFlexibleIP = async (req, res) => {
  try {
    const { id } = req.params
    const ipResponse = await sendRequest('POST', '/ips', {
      project: SCW_PROJECT_ID,
      server: id
    })
    res.status(200).json({
      message: 'Flexible IP created.',
      ipInfo: ipResponse
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  postInstance,
  updateInstance,
  createFlexibleIP,
  deleteInstance,
  addFilesToInstanceSSH,
  powerOnInstance
}
