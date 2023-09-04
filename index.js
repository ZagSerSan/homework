const http = require('http')
const chalk = require('chalk')

const port = 3000
const server = http.createServer((req, res) => {
  console.log('req.method', req.method)
  console.log('req.url', req.url)

  console.log(chalk.green('server!'))
  res.end('Hello, the is server!!!')
})

server.listen(port, () => {
  console.log(chalk.blue(`server has been started on port: ${port}...`))
})
