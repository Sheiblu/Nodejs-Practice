
var addNote = (name , age) => {
    console.log("Adding node ",name , age);
}

var getAll = (title , body) => {
    console.log("Get All node : ");
}

var getNote = (Name ) => {
    console.log("Get name : " + Name);
}

var removeNote = ( Name ) => {
    console.log("Remove name : " + Name);
}


module.exports = {
    addNote ,
    getAll ,
    getNote,
    removeNote
}