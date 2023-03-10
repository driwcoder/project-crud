const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))

//rotas
//Home
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Titulo Teste'
  })
})

//404 error
app.use((req,res) => {
  res.send('Página não encontrada!')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log (`Server is listening on port ${port}`))
