const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

const notesPath = path.join(__dirname, 'db.json')

async function editNote({ id, title }) {
  const notes = await getNotes()
  
  const editingNote = notes.find(note => note.id === id)
  editingNote.title = title

  await fs.writeFile(notesPath, JSON.stringify(notes))
  console.log(chalk.yellowBright('Note was edited!'))
  console.log(chalk.yellowBright(`id: ${editingNote.id}, title: ${editingNote.title}`))
}

async function removeNote(id) {
  const notes = await getNotes()

  const newNotes = notes.filter(note => note.id !== id)
  await fs.writeFile(notesPath, JSON.stringify(newNotes))
  console.log(chalk.red(`task with id: ${id} deleted.`))
}

async function addNote(title) {
  const notes = await getNotes()
  const note = {
    title,
    id: Date.now().toString()
  }
  notes.push(note)
  await fs.writeFile(notesPath, JSON.stringify(notes))
  console.log(chalk.green('Note was added!'))
  console.log(chalk.blue(`id: ${note.id}, title: ${note.title}`))
}

async function getNotes() {
  // // const notes = require('./db.json')
  // // const buffer = await fs.readFile(notesPath)
  // // const notes = Buffer.from(buffer).toString('utf-8')
  // // const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
  const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

const printNotes = async () => {
  const notes = await getNotes()
  notes.forEach(note => {
    console.log(chalk.green('Here is the list of notes:'))
    console.log(chalk.blue('id: ' + note.id))
    console.log(chalk.blue('note: ' + note.title))
    console.log(chalk.grey('------------'))
  })
}

module.exports = {
  addNote, printNotes, removeNote, getNotes, editNote
}

