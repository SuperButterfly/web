// require('dotenv').config();
const { Instance, Template } = require('../../database.js')
const { SCW_PROJECT_ID, PASS_PHRASE, PRIVATE_KEY } = require('../../utils/consts.js')
const { sendRequest } = require('../../services/scaleway.js')
const axios = require('axios')
const { HEADERS } = require('../../utils/consts.js')
const { SSHUtility, wait } = require('../../utils/ssh')
const path = require('path')

const postInstance = async (req, res) => {
  try {
    const { instanceInfo, sendFiles } = req.body

    const instanceData = {
      name: `/var/www/${instanceInfo?.name ?? 'new-instance'}`,
      project: SCW_PROJECT_ID,
      commercial_type: instanceInfo.type,
      image: '544f0add-626b-4e4f-8a96-79fa4414d99a',
      enable_ipv6: true,
      volumes: {
        0: {
          name: 'my-volume',
          size: instanceInfo.volumeSize,
          volume_type: 'l_ssd'
        }
      }
    }

    // Create the instance in the SCW cloud
    const instanceResponse = await sendRequest('POST', '/servers', instanceData)
    const { id, name, volumes } = instanceResponse.server
    const volumeId = volumes['0'].id

    // Create an IP flexible and attach it to the instance

    const ipResponse = await sendRequest('POST', '/ips', {
      project: SCW_PROJECT_ID,
      server: id
    })

    const { ip } = ipResponse

    // Power on the instance
    await sendRequest('POST', `/servers/${id}/action`, { action: 'poweron' })

    // Wait for the instance to be fully powered on
    let instanceStatus = ''
    while (instanceStatus !== 'running') {
      const instanceDetails = await axios(`https://api.scaleway.com/servers/${id}`, { headers: HEADERS })
      console.log(instanceDetails)
      instanceStatus = instanceDetails.server.state

      if (instanceStatus !== 'running') {
        await wait(5000) // Wait for 5 seconds before checking again
      }
    }

    // Create the instance in the DB
    const newInstance = await Instance.create(
      { id, name, volumeId, ipID: ip.id, ipAddress: ip.address },
      { id, name, volumeId, ipID: ip.id, ipAddress: ip.address }
    )

    // Set the relation with the project
    if (instanceInfo.id) {
      const template = await Template.findByPk(instanceInfo.projectId)
      if (!template) throw new Error('Template not found')
      await newInstance.setTemplate(template.id)
    }

    newInstance.save()

    if (sendFiles) {
      const sshUtility = new SSHUtility()

      const config = {
        host: ip.address,
        username: 'root',
        privateKeyPath: PRIVATE_KEY,
        passphrase: PASS_PHRASE
      }
      const localFilePath = path.resolve(__dirname, './instance.controllers.js')
      const remoteDirectory = '/root/test'
      sshUtility.connectAndTransferFiles(config, localFilePath, remoteDirectory)

      const remoteDirectoryToList = '/root/test'
      sshUtility.listRemoteMachineFiles(remoteDirectoryToList)
    }

    res
      .status(201)
      .json({ message: 'Instance created successfully', instance: newInstance })
  } catch (error) {
    console.log(error)
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

module.exports = { postInstance, updateInstance }
/** const { readFileSync } = require('fs')
const { Client } = require('ssh2')

const postInstance = async (req, res) => {
  try {
    // ... (your other code)

    const conn = new Client()

    conn.on('ready', () => {
      conn.sftp((err, sftp) => {
        if (err) throw err

        const localPath = path.resolve(__dirname, '../../componentsJson/Banner1.json')
        const remotePath = '/root/Banner1.json'

        const readStream = readFileSync(localPath)
        const writeStream = sftp.createWriteStream(remotePath)

        // Initiate the file transfer
        readStream.pipe(writeStream)

        // Close the connection when the transfer is complete
        writeStream.on('close', () => {
          console.log('File transferred successfully')
          conn.end()
          res.status(201).json({ message: 'successfully' })
        })
      })
    })

    conn.connect({
      host: '51.15.218.113',
      username: 'root',
      privateKey: readFileSync('C:\\Users\\YISNEY SOTO\\keys-ssh'),
      passphrase: 'test-code'
    })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'Error establishing connection', message: error.message })
  }
} */

// conn.exec('cat ~/.ssh/authorized_keys', (err, stream) => {
//   if (err) throw err
//   stream
//     .on('close', (code, signal) => {
//       conn.end()
//     })
//     .on('data', (data) => {
//       console.log('STDOUT: ' + data)
//     })
//     .stderr.on('data', (data) => {
//       console.log('STDERR: ' + data)
//     })
// })

// conn.exec('ls -l -1 -a', (err, stream) => {
//   if (err) throw err
//   stream
//     .on('close', (code, signal) => {
//       conn.end()
//     })
//     .on('data', (data) => {
//       console.log('STDOUT: ' + data)
//     })
//     .stderr.on('data', (data) => {
//       console.log('STDERR: ' + data)
//     })
// })

// NODE - SSH

/**
 await ssh.connect({
      host: '51.15.212.56',
      username: 'root',
      privateKeyPath: 'C:\\Users\\YISNEY SOTO\\keys-ssh',
      passphrase: 'test-code'
    })
    await ssh.mkdir('/root/test')

    await ssh.putFile(
      path.resolve(__dirname, './instance.controllers.js'),
      '/root/test/instance.controllers.js'
    )

  const result = await ssh.execCommand('cat /root/test/instance.controllers.js')

    console.log({ result });

    const remoteDirectory = '/root/test';
    const resultDirectory = await ssh.execCommand(`ls -l ${remoteDirectory}`);

    console.log('Files in remote directory:', resultDirectory.stdout);

    ssh.dispose()
 */
