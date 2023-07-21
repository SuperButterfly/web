require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatOpenaiWithContext = async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt)
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "system", "content": "You are a helpful assistant." }, { "role": "user", "content": prompt }],
    });
    console.log(completion.data.choices[0].message);
    res.json(completion.data.choices[0].message);
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' });
  }
};

const chatOpenaiWithoutContext = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "babbage",
      prompt,
      max_tokens: 50,
      temperature: 0,
    });
    res.json(response.data);
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' });
  }
};

module.exports = { chatOpenaiWithContext, chatOpenaiWithoutContext }