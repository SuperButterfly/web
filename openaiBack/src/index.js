require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3001;

const { Configuration, OpenAIApi } = require("openai");
app.use(morgan('dev'));
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get('/chatWithContext', async (req, res) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "system", "content": "You are a helpful assistant." }, { "role": "user", "content": "Hello world" }],
    });
    console.log(completion.data.choices[0].message);
    res.json(completion.data.choices[0].message);
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' });
  }
})

app.get('/chatWithoutContext', async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "babbage",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    });
    console.log(response);
    res.json(response);
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' });
  }
})

app.get('/models', async (req, res) => {
  try {
    const response = await openai.retrieveModel("gpt-3.5-turbo");
    console.log(response.data)
    res.json(response.data);
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' });
  }
});

app.listen(port, () => {
  console.log(`Server Listening http://localhost:${port}`);
});
