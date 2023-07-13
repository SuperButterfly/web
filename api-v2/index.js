const app = require('./app')
const port = 4002

db.sync({
  /*
    PARA "DROPEAR" RAPIDO LA DB
    se comenta el force false, se descomenta el force true y se guarda
    NO OLVIDAR deshacer y guardar
  */
  force: false
  // force: true
})
  .then(() => {
    console.log('Connection to postgresql has been established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to postgresql database:', error)
  })

const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
