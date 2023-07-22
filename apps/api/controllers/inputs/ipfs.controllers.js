const startonApi = require('../../services/smartContractAxiosInstance');
const FormData = require('form-data');
const { readFileSync } = require('fs');

async function pinFileToIPFS(req, res, next) {
  const { cid, name, origins, metadata } = req.body;
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
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.');
    } else {
      res.status(500).json('Error interno del servidor.');
    }
  }
}

async function updatePinnedFileById(req, res, next) {
  const { id } = req.params;
  const { name, metadata } = req.body;
  const url = `/v3/ipfs/pin/${id}`;

  const payload = {
    name,
    metadata
  };

  try {
    const response = await startonApi.patch(url, payload);
    console.log('Respuesta:', response.status, response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.');
    } else if (error.response.status === 404) {
      res.status(404).json('Archivo no encontrado.');
    } else {
      res.status(500).json('Error interno del servidor.');
    }
  }
}

async function deletePinnedFileById(req, res, next) {
  const { id } = req.params;
  const url = `/v3/ipfs/pin/${id}`;

  try {
    const response = await startonApi.delete(url);
    console.log('Respuesta:', response.status, response.data);
    res.status(200).json({ message: 'Archivo eliminado correctamente.' });
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.');
    } else if (error.response.status === 404) {
      res.status(404).json('Archivo no encontrado.');
    } else {
      res.status(500).json('Error interno del servidor.');
    }
  }
}

function bufferFromLocalPath(path) {
  return readFileSync(path);
}

async function uploadFileOnIPFS(req, res, next) {
  const { path, dashboardName } = req.body;

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
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.');
    } else if (error.response.status === 404) {
      res.status(404).json('Archivo no encontrado.');
    } else if (error.response.status === 413) {
      res.status(413).json('El archivo es demasiado grande.');
    } else {
      res.status(500).json('Error interno del servidor.');
    }
  }
}

async function uploadFolderOnIPFS(req, res, next) {
  const { metadata, folderName } = req.body;

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
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.');
    } else if (error.response.status === 404) {
      res.status(404).json('No encontrado.');
    } else if (error.response.status === 413) {
      res.status(413).json('Capacidad de almacenamiento máxima alcanzada.');
    } else {
      res.status(500).json('Error interno del servidor.');
    }
  }
}

async function uploadJSONOnIPFS(req, res, next) {
  const { name, content, metadata } = req.body;
  const payload = {
    name,
    content,
    metadata
  };

  try {
    const response = await startonApi.post('/v3/ipfs/pin', payload);
    console.log('Respuesta:', response.status, response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.');
    } else if (error.response.status === 404) {
      res.status(404).json('No encontrado.');
    } else if (error.response.status === 413) {
      res.status(413).json('Capacidad de almacenamiento máxima alcanzada.');
    } else {
      res.status(500).json('Error interno del servidor.');
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
