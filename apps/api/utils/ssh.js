const fs = require('fs').promises
const path = require('path')
const { NodeSSH } = require('node-ssh')

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class SSHUtility {
  constructor() {
    this.ssh = new NodeSSH()
  }


async connectAndTransferFiles(config, localPath, remoteDirectory) {
  try {
    await this.ssh.connect(config)

    await this.ssh.mkdir(remoteDirectory)

    async function transferFileRecursive(localPath, remoteDirectory) {
      const stats = await fs.stat(localPath)

      if (stats.isDirectory()) {
        const localDirectory = path.basename(localPath)
        const remoteDirPath = path.join(remoteDirectory, localDirectory)
        await this.ssh.mkdir(remoteDirPath)

        // Recursively transfer files in the directory
        const files = await fs.readdir(localPath)
        for (const file of files) {
          const filePath = path.join(localPath, file)
          await this.transferFileRecursive(filePath, remoteDirPath)
        }
      } else {
        const localFileName = path.basename(localPath)
        const remoteFilePath = path.join(remoteDirectory, localFileName)
        await this.ssh.putFile(localPath, remoteFilePath)
      }
    }

    await transferFileRecursive(localPath, remoteDirectory)

    this.ssh.dispose()
  } catch (error) {
    console.error('Error:', error.message)
  }
}


  async listRemoteMachineFiles() {
    try {
      const remoteDirectory = '/root/test'
      const resultDirectory = await this.ssh.execCommand(
        `ls -l ${remoteDirectory}`
      )

      console.log('Files in remote directory:', resultDirectory.stdout)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
}

module.exports = { SSHUtility, wait }
