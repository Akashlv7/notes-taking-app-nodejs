import yargs from 'yargs'

import {
        addNotes,
        removeNotes,
        listNotes,
        readNotes
                    } from './notes.js'


// create add command
yargs.command({
    command: 'add',
    describe: 'To add a new note! (Commands are case sensitive)',
    builder: {
        title: {
            describe: 'Title of the Note!',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note!',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNotes(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'To remove an existing note! (Commands are case sensitive)',
    builder: {
        title: {
            describe: 'Title of the Note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNotes(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'To list existing notes! (Commands are case sensitive)',
    handler() {
        listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'To read an existing note! (Commands are case sensitive)',
    builder: {
        title: {
            describe: "Title of the Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNotes(argv.title)
    }
})


yargs.parse()