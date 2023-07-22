const startonApi = require("../../services/smartContractAxiosInstance")
const FormData = require('form-data')
const fs = require('fs')
// AUTHENTICATING TO THE API USING YOUR API KEY

// esta es la funcion para cargar el archivo de contrato (suele ser una imagen) y manipularlo, mas abajo esta la promesa para resolver que hacer con el archivo
const uploadFileToIpfs = async (path, name) => {
  const buffer = fs.readFileSync(path)
  const data = new FormData()
  data.append('file', buffer, name)
  // By setting "isSync" to "true, the request will wait for the pin before completing"
  data.append('isSync', 'false')
  // Optional: you can add metadata to your file (object stringified)
  const metadata = JSON.stringify({ your: 'additionnal', meta: 'data' })
  data.append('metadata', metadata)
  try {
    const ipfsFile = await startonApi.post('/v3/ipfs/file', data, {
      headers: {
        'Content-type': `multipart/form-data; boundary=${data.getBoundary()}`
      }
    })
    return ipfsFile.data
  } catch (error) {
    console.error(error)
  }
}
// aca ingresamos la informacion del carchivo de contrato, y decidimos como resolver la promesa,
// en este caso solo consologea para ver que funcione correctamente en el nodemon al ejecutar "node uploadFileToIpfs.js"
// en la carpeta "E:\code\web\apps\api\routes\inputs>" el proximo paso es guardar el archivo en la database
// para luego ser solicitado por redux y renderizar el contrato
// uploadFileToIpfs('../../../client/src/assets/webxr.png', 'primer ipfs file')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

module.exports = uploadFileToIpfs
