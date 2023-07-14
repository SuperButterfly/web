const app = require('./app')
const port = 4002
const { db } = require('./database/connection/database')

const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
