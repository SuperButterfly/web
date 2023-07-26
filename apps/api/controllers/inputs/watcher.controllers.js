const startonApi = require('../../services/smartContractAxiosInstance')

async function createWatcher(req, res, next) {
  const url = '/v3/watcher'

  // Datos del nuevo watcher en formato JSON
  const payload = {
    name: 'Nombre del watcher',
    description: 'Descripción del watcher',
    address: '0x000000000000', // direccion de la billetera o el  smart contact
    network: 'Red del watcher', // aqui va la network, podemos encontrar una lista de networks disponibles en la documentacion
    type: 'MINED_TRANSACTION', // este es un tipo de operacion desde el ABI de mi contrato
    webhookUrl: 'URL del webhook', // aca va la direccion del webhook
    confirmationsBlocks: 50 // aca va la cantidad de bloques dependiendo de nuetras necesidades
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

async function createWatcherOnManyNetworks(req, res, next) {
  const url = '/v3/watcher/'

  // Datos del nuevo watcher en formato JSON
  const payload = {
    networks: ['network1', 'network2', 'network3'], // Aquí debes reemplazar con las redes deseadas
    name: 'Nombre del watchers',
    description: 'Descripción de los watchers',
    address: 'Dirección de los watchers',
    type: 'MINED_TRANSACTION',
    webhookUrl: 'URL del webhook',
    confirmationsBlocks: 0
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

async function updateWatcher(req, res, next) {
  const { id } = req.params
  const url = '/v3/watcher/'

  // Datos actualizados del watcher en formato JSON
  const payload = {
    paused: true, // Cambia esto al valor deseado (true o false) para pausar o reanudar el watcher
    webhookUrl: 'URL actualizada del webhook', // Actualiza la URL del webhook
    confirmationsBlocks: 5, // Actualiza el número de bloques de confirmación
    name: 'Nombre actualizado del watcher', // Actualiza el nombre del watcher
    description: 'Descripción actualizada del watcher' // Actualiza la descripción del watcher
  }

  try {
    const response = await startonApi.patch(`${url}${id}`, payload)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

async function deleteWatcherById(req, res, next) {
  const { id } = req.params
  const url = '/v3/watcher/'

  try {
    const response = await startonApi.delete(`${url}${id}`)
    console.log('Respuesta:', response.status, response.data)
    res.sendStatus(200) // Enviar un estado de éxito
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

module.exports = {
  createWatcher,
  createWatcherOnManyNetworks,
  updateWatcher,
  deleteWatcherById
}
