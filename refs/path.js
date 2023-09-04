const path = require('path')
const chalk = require('chalk')

// console.log(chalk.blue(path.dirname(__filename)))
// console.log(chalk.blue(path.basename(__filename)))
// console.log(chalk.blue(path.extname(__filename)))
// console.log(chalk.blue(path.extname(__filename).slice(1)))
// console.log(path.parse(__filename))
console.log(chalk.blue(path.resolve(__dirname, '../', './ES6_imports', './app.js')))
console.log(chalk.blue(path.join(__dirname, '../', './ES6_imports', './app.js')))


