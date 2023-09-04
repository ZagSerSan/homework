const chalk = require('chalk')
const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')
const getContent = () => `
  \n${process.argv[2] ?? ''}
`

async function start() {
  try {
    // синхронная проверка, существует ли папка 'temp'
    if (!fsSync.existsSync(base)) {
      await fs.mkdir(base)
      console.log(chalk.green('folder created'))
    }
    // создать/пересоздать файл
    // await fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
    // отредактировать/добавить в файл
    await fs.appendFile(path.join(base, 'logs.txt'), getContent())
    console.log(chalk.green('file writed'))
    const data = await fs.readFile(path.join(base, 'logs.txt'), {encoding: 'utf-8'})
    console.log(chalk.blue(data))
  } catch (error) {
    console.log(chalk.red('error'))
    console.log(error)
  }
}

start()





