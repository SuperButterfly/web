const { Router } = require('express')
const {
    getGPT
} = require('../../controllers/openai/get-code-gpt')

const routerGPT = Router()

routerGPT.get('/', getGPT)

module.exports = routerGPT
