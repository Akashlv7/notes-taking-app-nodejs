import fs from 'fs'
import chalk from 'chalk'

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title )

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note Added!"))
    }else{
        console.log(chalk.red.inverse("Note with the title already exists!"))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter( (note) => note.title !== title )

    if (notes.length === filteredNotes.length){
        console.log(chalk.red.inverse("This title doesn't exist -- Please provide a valid title!"))
    }else{
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse("Note Removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.blue.inverse("Your Notes"))

    notes.forEach((note, index) => {
        console.log( (index+1) + '. ' + note.title)
    });
}

const readNotes = (title) => {
    const notes = loadNotes()

    const notesToBeRead = notes.find( (note) => note.title === title)

    if (notesToBeRead){
        console.log(chalk.blue.inverse("Your Note\n"))
        console.log(chalk.green.inverse("Title: " + notesToBeRead.title))
        console.log("Body: " + notesToBeRead.body)
    }else{
        console.log(chalk.red.inverse("No Note Found!"))
    }
}

const saveNotes = (notesData) => {
        fs.writeFileSync('notes.json', JSON.stringify(notesData))
    }

const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }catch (e) {
        return []
    }
}

export {
    addNotes,
    removeNotes,
    listNotes,
    readNotes
}
