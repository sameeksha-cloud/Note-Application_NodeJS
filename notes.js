const chalk = require('chalk')
const fs = require('fs')

const addNotes = (title,body) => {
    const notes = loadNotes() // []
    const duplicatetitle = notes.find((note => note.title === title))

    if(!duplicatetitle){
    notes.push({
        title:title,
        body:body
    })
        saveNotes(notes)
        console.log(chalk.inverse.green('New Note has been added'))
    }

    else{
        console.log(chalk.inverse.red('Note is having duplicate title'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const checktitle = notes.filter((note) => note.title !== title) 
    
    if(notes.length > checktitle.length){
        console.log(chalk.inverse.green('Note Removed'))
    }
    else{
        console.log(chalk.inverse.red('No note found'))
    }

    saveNotes(checktitle)
}

const listNote = () => {
    console.log(chalk.inverse.yellow('Your Notes'))
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}


const readNote = (title) =>{
    const notes = loadNotes()
    const searchnode = notes.find((note) => note.title === title)
    if(searchnode){
        console.log(searchnode.title)
        console.log(searchnode.body)
    }
    else{
        console.log(chalk.inverse.red('No note found?'))
    }
}

const saveNotes = (notes) => {
    const savenote = JSON.stringify(notes)
    fs.writeFileSync('notes.json',savenote)
}

const loadNotes = () => {
    try{
    const readjson = fs.readFileSync('notes.json')
    const databuffer = readjson.toString()
    return JSON.parse(databuffer)
    }
    catch(e){
        return []
    }
}


module.exports = {
    addNotes:addNotes,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}