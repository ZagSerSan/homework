const express = require('express')
const chalk = require('chalk')
const { addNote, getNotes, removeNote } = require('./notes.controller')
const path = require('path')

const port = 3000
const app = express()

// шаблонизатор ejs
app.set('view engine', 'ejs')
// замена стандартной папки на pages
app.set('views', 'pages')
// set static folder: public
app.use(express.static(path.resolve(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))

// Обработка delete запроса
app.delete('/:id', async (req, res) => {
  console.log('id:', req.params.id)
  await removeNote(req.params.id)
  
  res.render('index', {
    title: "Express app",
    notes: await getNotes(),
    created: false
  })
})
// Обработка get запроса
app.get('/', async (req, res) => {
  res.render('index', {
    title: "Express app",
    notes: await getNotes(),
    created: false
  })
})
// Обработка post запроса
app.post('/', async (req, res) => {
  await addNote(req.body.title)
  res.render('index', {
    title: "Express app",
    notes: await getNotes(),
    created: true
  })
})

// server
app.listen(port, () => {
  console.log(chalk.blue(`server has been started on port: ${port}...`))
})
