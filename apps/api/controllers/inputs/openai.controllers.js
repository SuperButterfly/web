require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const chatOpenaiWithCursorPosition = async (req, res) => {
  const { prompt } = req.body
  console.log(req.body)
  console.log(prompt)
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'From now on you will be a one-page code assistant, you will modify a React component that will pass you a JSON like this:\n\n{code : (component code), position: (character from where you are going to modify the code of the component), command: (what you are asked to do), correct?\n\nAnd you are only going to return a JSON with the following data and you are going to avoid giving me an explanation of the procedure you did: n\n{\n Action: (action you decided to do, either ADD (add code), DELETE (delete code), or REPLACE (replace code)),\n Code: “all the code that you are going to return with the action you decided to do”,\n Modified: “part of the code that was not there before but you decided to add, in an array if they are segregated”\n}'
        },

        { role: 'user', content: JSON.stringify(prompt) }
      ]
    })
    console.log(completion.data.choices[0].message)
    res.json(completion.data.choices[0].message)
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' })
  }
}

const chatOpenaiWithTextSelect = async (req, res) => {
  const { prompt } = req.body
  console.log(prompt)
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'From now on you will be a one-page code assistant, you will modify a React component that will pass you a JSON like this:\n\n{code : (component code), selected: (part of the code to perform an action ), command: (what they ask you to do), correct?\n\nAnd you are only going to return a JSON with the following data and you are going to avoid giving me an explanation of the procedure you did:\n\n {\n Action: (action you decided to do, either ADD (add code), DELETE (delete code), or REPLACE (replace code)),\n Code: “all the code that you are going to return with the action you decided do”,\n Modified: “part of the code that was not there before but you decided to add, in an array if they are segregated”\n}'
        },
        { role: 'user', content: prompt }
      ]
    })
    console.log(completion.data.choices[0].message)
    res.json(completion.data.choices[0].message)
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' })
  }
}

/*
const chatOpenaiWithTextSelect = async (req, res) => {
  const { prompt } = req.body
  try {
    const response = await openai.createCompletion({
      model: 'babbage',
      prompt,
      max_tokens: 50,
      temperature: 0
    })
    res.json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensaje: 'Error' })
  }
}
*/

module.exports = { chatOpenaiWithCursorPosition, chatOpenaiWithTextSelect }
