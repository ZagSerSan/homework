const http = require('http')
const express = require('express')
const chalk = require('chalk')
const fs = require('fs/promises')
const path = require('path')
const { addNote } = require('./notes.controller')
const { log } = require('console')

const port = 3000
const basePath = path.join(__dirname, 'pages')

// const server = http.createServer( async (req, res) => {
//   if (req.method === 'GET') {
//     const content = await fs.readFile(path.join(basePath, 'index.html'))
//     // res.setHeader('Content-Type', 'text/html')
//     // res.setHeader('Content-Type', 'text/plain')
//     // res.writeHead(404)
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     })
//     res.end(content)
//   } else if (req.method === 'POST') {
//     const body = []
//     res.writeHead(200, {
//       'Content-Type': 'text/plain: charset=utf-8'
//     })

//     req.on('data', data => {
//       body.push(Buffer.from(data))
//     })
//     req.on('end', () => {
//       const title = body.toString().split('=')[1].replaceAll('+', ' ')
//       addNote(title)
//       res.end(`Post success, title = ${title}`)
//     })

//   }
// })

// server.listen(port, () => {
//   console.log(chalk.blue(`server has been started on port: ${port}...`))
// })

const app = express()
app.use(express.urlencoded({
  extended: true
}))

// get запрос
app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'))
})
app.post('/', async (req, res) => {
  await addNote(req.body.title)
  res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(port, () => {
  console.log(chalk.blue(`server has been started on port: ${port}...`))
})
