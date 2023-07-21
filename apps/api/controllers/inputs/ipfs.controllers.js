const startonApi = require('../../services/smartContractAxiosInstance');
const FormData = require('form-data');
const { readFileSync } = require('fs');

async function pinFileToIPFS(cid, name, origins, metadata) {
  const url = '/v3/ipfs/pin';

  const payload = {
    cid,
    name,
    origins,
    metadata
  };

  try {
    const response = await startonApi.post(url, payload);
    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else {
      throw error;
    }
  }
}

async function updatePinnedFileById(id, name, metadata) {
  const url = `/v3/ipfs/pin/${id}`;

  const payload = {
    name,
    metadata
  };

  try {
    const response = await startonApi.patch(url, payload);
    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else if (error.response.status === 404) {
      throw new Error('Archivo no encontrado.');
    } else {
      throw error;
    }
  }
}

async function deletePinnedFileById(id) {
  const url = `/v3/ipfs/pin/${id}`;

  try {
    const response = await startonApi.delete(url);
    console.log('Respuesta:', response.status, response.data);
    return true; // Retorna true para indicar que el archivo se eliminó correctamente
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else if (error.response.status === 404) {
      throw new Error('Archivo no encontrado.');
    } else {
      throw error;
    }
  }
}

function bufferFromLocalPath(path) {
  return readFileSync(path);
}

async function uploadFileOnIPFS(path, dashboardName) {
  const bufferFile = bufferFromLocalPath(path);

  const data = new FormData();

  const storageName = dashboardName;
  data.append('file', bufferFile, storageName);
  data.append('isSync', 'true');

  try {
    const response = await startonApi.post('/v3/ipfs/pin', data, {
      maxBodyLength: Infinity,
      headers: {
        ...startonApi.defaults.headers,
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`
      }
    });

    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else if (error.response.status === 404) {
      throw new Error('Archivo no encontrado.');
    } else if (error.response.status === 413) {
      throw new Error('El archivo es demasiado grande.');
    } else {
      throw error;
    }
  }
}

async function uploadFolderOnIPFS(metadata, folderName) {
  const data = new FormData();

  data.append('metadata', JSON.stringify(metadata));
  data.append('folderName', folderName);

  try {
    const response = await startonApi.post('/v3/ipfs/pin', data, {
      maxBodyLength: Infinity,
      headers: {
        ...startonApi.defaults.headers,
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`
      }
    });

    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.');
    } else if (error.response.status === 413) {
      throw new Error('Capacidad de almacenamiento máxima alcanzada.');
    } else {
      throw error;
    }
  }
}

async function uploadJSONOnIPFS(name, content, metadata) {
  const payload = {
    name,
    content,
    metadata
  };

  try {
    const response = await startonApi.post('/v3/ipfs/pin', payload);
    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.');
    } else if (error.response.status === 413) {
      throw new Error('Capacidad de almacenamiento máxima alcanzada.');
    } else {
      throw error;
    }
  }
}

module.exports = {
  pinFileToIPFS,
  updatePinnedFileById,
  deletePinnedFileById,
  uploadFileOnIPFS,
  uploadFolderOnIPFS,
  uploadJSONOnIPFS
};
