const startonApi = require("../../services/smartContractAxiosInstance")

// Función para crear un nuevo watcher
async function createWatcher() {
  const url = '/v3/watcher'

  // Datos del nuevo watcher en formato JSON
  const payload = {
    name: 'Nombre del watcher',
    description: 'Descripción del watcher',
    address: 'Dirección del watcher',
    network: 'Red del watcher',
    type: 'MINED_TRANSACTION',
    webhookUrl: 'URL del webhook',
    confirmationsBlocks: 0
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
}

// Función para crear un nuevo watcher en varias redes
async function createWatcherOnManyNetworks() {
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
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
}

// Función para actualizar un watcher existente
async function updateWatcher(id) {
  const url = `/v3/watcher/`

  // Datos actualizados del watcher en formato JSON
  const payload = {
    paused: true, // Cambia esto al valor deseado (true o false) para pausar o reanudar el watcher
    webhookUrl: 'URL actualizada del webhook', // Actualiza la URL del webhook
    confirmationsBlocks: 5, // Actualiza el número de bloques de confirmación
    name: 'Nombre actualizado del watcher', // Actualiza el nombre del watcher
    description: 'Descripción actualizada del watcher' // Actualiza la descripción del watcher
  }

  try {
    const response = await startonApi.patch(url, payload)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
}

// Función para eliminar un watcher específico por su ID
async function deleteWatcherById(id) {
  const url = `/v3/watcher/`

  try {
    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
}

module.exports = {
  createWatcher,
  createWatcherOnManyNetworks,
  updateWatcher,
  deleteWatcherById
}
