const axios = require("axios");

const enviarCandidatoICE = async (idProject, candidate) => {
  try {
    await axios.post(`/api/projects/${idProject}/ice-candidates`, {
      candidate,
    });
    console.log("Candidato ICE enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el candidato ICE:", error);
  }
};

const enviarOfertaYUsuarios = async (idProject, offer, userIds) => {
  try {
    await axios.post(`/api/projects/${idProject}/offer-and-users`, {
      offer,
      userIds,
    });
    console.log("Oferta y usuarios enviados:", offer, userIds);
  } catch (error) {
    console.error("Error al enviar la oferta y los usuarios:", error);
  }
};

const shareProjectRtc = async (req, res, next) => {
  try {
    const { idProject } = req.params;
    if (!idProject) throw new Error("idProject is required");

    const { userIds } = req.body;
    if (!userIds || !Array.isArray(userIds)) throw new Error("Invalid userIds");

    const peerConnection = new RTCPeerConnection();
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        enviarCandidatoICE(idProject, event.candidate);
      }
    };

    const dataChannel = peerConnection.createDataChannel("editorDataChannel");
    dataChannel.onopen = () => {
      console.log("Conexión de datos establecida");
    };
    dataChannel.onmessage = (event) => {
      console.log("Datos recibidos:", event.data);
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    enviarOfertaYUsuarios(idProject, offer, userIds);

    res.send("ok");
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  shareProjectRtc,
};
