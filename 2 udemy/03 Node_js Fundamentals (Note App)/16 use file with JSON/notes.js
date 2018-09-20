const fs = require('fs');

var addNote = (title , body) => {
   var notes = [] ;
   var note = {
        title,
        body 
   }


   try {
       var notes = JSON.parse(fs.readFileSync('note.json'));
   } catch (error) {
    console.log("Error Found "+ error);
   }

   var duplicateNode = notes.filter(function (note){
            return note.title === title ;
   });

/*   ------------  15 - 17 line altanative code ------

     var duplicateNode = notes.filter((note) => note.title === title );
 or 
    var duplicateNode = notes.filter((note) =>  {
      return note.title === title });

*/
  

   if (duplicateNode.length === 0){
    notes.push(note);
    fs.writeFileSync('note.json', JSON.stringify(notes));
    console.log("Added Successful");
   } else {
       console.log("This Title Already added "+ duplicateNode.length);
   }

}


var getAll = (title , body) => {
    console.log("Get All node : ");
}

var getNote = (title ) => {
    console.log("Get name : " + title);
}

var removeNote = ( title ) => {
    console.log("Remove name : " + title);
}


module.exports = {
    addNote ,
    getAll ,
    getNote ,
    removeNote
}