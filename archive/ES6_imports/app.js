import chalk from "chalk"
import path from "path"
// import { playground } from "./playground.js"

// console.log(path)
// console.log(playground())

/* этой конструкции нет при импорте ES6

(function (module, require, __dirname, __filename) {
})

поэтому __dirname, __filename нужно получать другим способом */

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


console.log(chalk.blue(__filename))
console.log(chalk.blue(__dirname))
