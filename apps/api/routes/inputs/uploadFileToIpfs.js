// const axios = require('axios')
// const FormData = require('form-data')
// const fs = require('fs')
// // AUTHENTICATING TO THE API USING YOUR API KEY
// const startonApi = axios.create({
//   baseURL: 'https://api.starton.com',
//   headers: {
//     'x-api-key': 'sk_live_4a92ea22-e4a8-43da-bae9-e8ef444165bc'
//   }
// })
// // UPLOAD FILE TO IPFS.
// const uploadFileToIpfs = async (path, name) => {
//   const buffer = fs.readFileSync(path)
//   const data = new FormData()
//   data.append('file', buffer, name)
//   // By setting "isSync" to "true, the request will wait for the pin before completing"
//   data.append('isSync', 'false')
//   // Optional: you can add metadata to your file (object stringified)
//   const metadata = JSON.stringify({ your: 'additionnal', meta: 'data' })
//   data.append('metadata', metadata)
//   try {
//     const ipfsFile = await startonApi.post('/v3/ipfs/file', data, {
//       headers: {
//         'Content-type': `multipart/form-data; boundary=${data.getBoundary()}`
//       }
//     })
//     return ipfsFile.data
//   } catch (error) {
//     console.error(error)
//   }
// }
// // ENTERING YOUR FILE'S INFORMATION
// uploadFileToIpfs('./path/of/your/file.png', 'name of your file')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// module.exports = { uploadFileToIpfs }
