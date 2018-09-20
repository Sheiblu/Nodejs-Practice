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


var getAll = (title , body) => {
    console.log("Get All node : ");
}

var getNote = (title ) => {
    console.log("Get name : " + title);
}

var removeNote = ( title ) => {
    var notes = fetchNotes();
    var duplicateNode = notes.filter((note) => note.title !== title);
    saveNotes(duplicateNode);

    return notes.length !== duplicateNode.length ;
}


module.exports = {
    addNote ,
    getAll ,
    getNote ,
    removeNote
}