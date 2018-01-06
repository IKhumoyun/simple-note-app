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
    const note = {
        title,
        body,
    };
    let duplicateNotes = notes.filter((note) =>  note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let readNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) =>  note.title === title);
    return filteredNotes[0];
};

let deleteNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    let notes = fetchNotes();
    console.log('--');
    console.log(`Body: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

let listAll = () => {
    return fetchNotes();
};

module.exports = {
    addNote: addNote,
    readNote: readNote,
    deleteNote: deleteNote,
    logNote: logNote,
    listAll: listAll,
};