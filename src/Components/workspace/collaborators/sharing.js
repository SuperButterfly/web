import axios from 'axios'

export const sendSharing = async (body) => {
  // console.log("body", body)
  /*
  body = {
    "from": username,
    "to": invitado@mail.com,
    "workspaceId": workspaceId,
    "as": "viewer" || "editor"
  }
*/
  try {
    const { data } = await axios.post('/mail/sharing-Workspace', body)
    // console.log("data", data)
    return data //  si fue bien retorna "SENT"
  } catch (error) {
    return error.message // si no mensaje de error
  }
}
