const fs = require('fs');


var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('note.json'));
    } catch (error) {
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('note.json', JSON.stringify(notes));
};


var addNote = (title , body) => {
    var notes = fetchNotes() ;
    var note = {
            title,
            body 
   };


    var duplicateNode = notes.filter((note) => note.title === title );

    if (duplicateNode.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
       // return ("This Title Already added "+ duplicateNode.length +" Time");
    }

}


var getAll = () => fetchNotes() ;

var getNote = ( title ) => {
    var notes = fetchNotes();
    var fetchNote = notes.filter((note) => note.title === title);

    return fetchNote[0];
};

var removeNote = ( title ) => {
    var notes = fetchNotes();
    var duplicateNode = notes.filter((note) => note.title !== title);
    saveNotes(duplicateNode);

    return notes.length !== duplicateNode.length ;
};

var displayResult = (note) => {
    debugger;
        console.log("\n  ----  \n");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
};


module.exports = {
    addNote ,
    getAll ,
    getNote ,
    removeNote,
    printResult : displayResult
}