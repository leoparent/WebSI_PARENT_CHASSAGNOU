const express = require('express')
let articles = require('./database')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('bonjour zeubi!')
  })

  app.get('/api/articles/:id', (req, res) => {
    const id= parseInt(req.params.id)
    const mala = articles.find(mala => mala.id === id)
    res.send(`id : ${mala.id}`)

  })

  app.listen(port, () => console.log('Notre application node est démarrée sur http://localhost 8080'))
