const yargs = require('yargs')
const note = require('./notes.js')

yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
       title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        note.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:"Remove note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        note.listNote()
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Read the note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        note.readNote(argv.title)
    }
})

yargs.parse()















// const yargs = require('yargs')
// const chalk = require('chalk')
// const getNotes = require('./notes.js')
// const { demandOption } = require('yargs')

// yargs.command({
//     command:'add',
//     describe:'Add a note',
//     builder:{
//        title:{
//             describe:'Note Title',
//             demandOption:true,
//             type: 'string'
//         },
//         body:{
//             describe:'Note Body',
//             demandOption:true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log("Title: "+argv.title)
//         console.log("Body: "+argv.body)
//     }
// })

// yargs.command({
//     command:'remove',
//     describe:'Remove a note',
//     handler: function(){
//         console.log("Removing a note")
//     }
// })

// yargs.command({
//     command:'list',
//     describe:'list a note',
//     handler: function(){
//         console.log("Listing the note")
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'read a note',
//     handler: function(){
//         console.log("Reading the note")
//     }
// })

// yargs.parse()







// //const validator = require('validator')
// //console.log(validator.isURL('https://sameeksha@gmail.com'))






// // const add = require('./utilis.js')

// // const sum = add(4,2)
// // console.log(sum)




// //fs.writeFileSync("notes.txt","My name is Sameeksha!!")

// //Challenge to append text in notes.txt

// //fs.appendFileSync("notes.txt","\nI have started learning node and I can do it.")
