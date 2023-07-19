// require('dotenv').config();
const { Instance, Template } = require('../../database.js')
const { SCW_PROJECT_ID } = require('../../utils/consts.js')
const { sendRequest } = require('../../services/scaleway.js')
const { fs } = require('fs')
const { Client } = require('ssh2')

const postInstance = async (req, res) => {
  try {
    // const { instanceInfo, sendFiles } = req.body

    // const instanceData = {
    //   name: `/var/www/${instanceInfo?.name ?? 'new-instance'}`,
    //   project: SCW_PROJECT_ID,
    //   commercial_type: instanceInfo.type,
    //   image: '544f0add-626b-4e4f-8a96-79fa4414d99a',
    //   enable_ipv6: true,
    //   volumes: {
    //     0: {
    //       name: 'my-volume',
    //       size: instanceInfo.volumeSize,
    //       volume_type: 'l_ssd'
    //     }
    //   }
    // }

    // // Create the instance in the SCW cloud
    // const instanceResponse = await sendRequest('POST', '/servers', instanceData)
    // const { id, name, volumes } = instanceResponse.server
    // const volumeId = volumes['0'].id

    // // Create an IP flexible and attach it to the instance

    // const ipResponse = await sendRequest('POST', '/ips', {
    //   project: SCW_PROJECT_ID,
    //   server: id
    // })

    // const { ip } = ipResponse

    // Create the instance in the DB
    // const newInstance = await Instance.create(
    //   { id, name, volumeId, ipID: ip.id, ipAddress: ip.address },
    //   { id, name, volumeId, ipID: ip.id, ipAddress: ip.address }
    // )

    // Set the relation with the project
    // if (instanceInfo.id) {
    //   const template = await Template.findByPk(instanceInfo.projectId)
    //   if (!template) throw new Error('Template not found')
    //   await newInstance.setTemplate(template.id)
    // }

    // newInstance.save()

    // Upload data to the instance
    // Object.keys(projectFiles).forEach((file) => {
    //   formData.append('files', file)
    // })
    // const test = await fs.readFileSync(
    //   '../../componentsJson/Blog Card/Blog1.json'
    // )
    // console.log(test)
    const conn = new Client()
    conn
      .on('ready', () => {
        conn.sftp((err, sftp) => {
          if (err) throw err
          sftp.fastPut(
            '../../componentsJson/Blog Card/Blog1.json',
            '/root/components',
            {},
            (err) => {
              if (err) throw err
              console.log('Archivo transferido exitosamente')
              conn.end()
            }
          )
        })
        conn.exec('ls -l', (err, stream) => {
          if (err) throw err
          stream
            .on('close', (code, signal) => {
              conn.end()
            })
            .on('data', (data) => {
              console.log('STDOUT: ' + data)
            })
            .stderr.on('data', (data) => {
              console.log('STDERR: ' + data)
            })
        })
      })
      .connect({
        host: '51.158.71.236',
        username: 'root',
        privateKey: 'C:\\Users\\YISNEY SOTO.ssh\\id_ed25519'
      })

    res.status(201).json({ message: 'successfully' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'Error creating instance', message: error.message })
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

module.exports = { postInstance, updateInstance }
