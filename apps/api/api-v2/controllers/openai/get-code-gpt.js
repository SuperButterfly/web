const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getGPT = async (req, res) =>  {
  const { message  } = req.body

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { "role": "system", "content": "just show the code" },
      { "role": "user", "content": message }, // Utiliza el mensaje de la consulta del usuario como contenido
    ],
  });

  const answer = completion.data.choices[0].message.content;


  response(res, 200, answer)
}

module.exports = { getGPT: catchedAsync(getGPT) }