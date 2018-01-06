//Built in modules
const fs = require('fs');
const os = require('os');
//Own modules
const notes = require('./notes');
//Third party modules
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add') {
    var note = notes.addNote(argv.title,argv.body);
    if(note) {
        console.log(`Note created`);
        notes.logNote(note);
    } else {
        console.log(`Note with that title already exists`);
    }
} else if (command === 'read') {
    let note = notes.readNote(argv.title);
    if(note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'delete') {
    let noteDeleted = notes.deleteNote(argv.title);
    let message = noteDeleted ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if (command === 'list') {
    let allNotes = notes.listAll(argv.title);
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
}
