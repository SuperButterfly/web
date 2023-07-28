const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const dotenv = require('dotenv'); // Importa el paquete dotenv
const { Configuration, OpenAIApi } = require('openai');

dotenv.config(); // Carga las variables de entorno desde .env
const openaiApiKey = "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";

// Configura la API key de OpenAI
const configuration = new Configuration({
  apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

const getGPT = async (req, res) =>  {
  const data = req.query.message;

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
        { "role": "system", "content": "just show the code" },
        { "role": "user", "content": data }, // Utiliza el mensaje de la consulta del usuario como contenido
    ],
});

const answer = completion.data.choices[0].message.content;


  response(res, 200, answer)
}

module.exports = { getGPT: catchedAsync(getGPT) }