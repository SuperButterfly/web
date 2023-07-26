const fs = require('fs').promises
const path = require('path')
const { NodeSSH } = require('node-ssh')

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class SSHUtility {
  constructor() {
    this.ssh = new NodeSSH()
  }

  async connect(config) {
    try {
      console.log(config)
      await this.ssh.connect(config)
      console.log('Connected to the SSH server:', config.host)
    } catch (error) {
      console.error('Error connecting to the SSH server:', error.message)
      throw new Error('SSH connection failed')
    }
  }

  async disconnect() {
    this.ssh.dispose()
    console.log('SSH connection closed')
  }

  async transferFiles(localPath, remoteDirectory) {
    try {

      await this.ssh.mkdir(remoteDirectory)

      const transferFileRecursive = async (localPath, remoteDirectory) => {
        const stats = await fs.stat(localPath)

        if (stats.isDirectory()) {
          const localDirectory = path.basename(localPath)
          const remoteDirPath = path.join(remoteDirectory, localDirectory)
          await this.ssh.mkdir(remoteDirPath)

          // Recursively transfer files in the directory
          const files = await fs.readdir(localPath)
          for (const file of files) {
            const filePath = path.join(localPath, file)
            await transferFileRecursive(filePath, remoteDirPath)
          }
        } else {
          const localFileName = path.basename(localPath)
          const remoteFilePath = path.join(remoteDirectory, localFileName)
          await this.ssh.putFile(localPath, remoteFilePath)
        }
      }

      await transferFileRecursive(localPath, remoteDirectory)
    } catch (error) {
      throw new Error(error)
    }
  }

  async listRemoteMachineFiles() {
    try {
      const resultDirectory = await this.ssh.execCommand(
       'ls -l -a'
      )

      console.log('Files in remote directory:', resultDirectory.stdout)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  async addSSHKeyToAuthorizedKeys(sshPublicKey, remoteUsername) {
    try {
      const command = `echo '${sshPublicKey}' >> ~/.ssh/authorized_keys`
      await this.ssh.execCommand(command, { cwd: `/home/${remoteUsername}` })
      console.log('SSH public key added to authorized_keys')
    } catch (error) {
      console.error('Error adding SSH public key to authorized_keys:', error.message)
      throw new Error('Failed to add SSH public key to authorized_keys')
    }
  }
}

module.exports = { SSHUtility, wait }
