const express = require('express')
const chalk = require('chalk')
const { addNote, getNotes } = require('./notes.controller')

const port = 3000

const app = express()

// шаблонизатор ejs
app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.urlencoded({
  extended: true
}))

app.get('/', async (req, res) => {
  res.render('index', {
    title: "Express app",
    notes: await getNotes()
  })
})
app.post('/', async (req, res) => {
  await addNote(req.body.title)
  res.render('index', {
    title: "Express app",
    notes: await getNotes()
  })
})

app.listen(port, () => {
  console.log(chalk.blue(`server has been started on port: ${port}...`))
})
