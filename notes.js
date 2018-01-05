const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {  
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title,body) => {
    let notes = fetchNotes();
    var note = {
        title,
        body,
    };
    var duplicateNotes = notes.filter((note) =>  note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let readNote = (title) => {
    let notes = fetchNotes();
    let reading = something;
    
    return reading;
};

let deleteNote = (title) => {
    let notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

let listAll = () => {
    console.log(`You have notes`);
};

module.exports = {
    addNote: addNote,
    readNote: readNote,
    deleteNote: deleteNote,
    listAll: listAll
};