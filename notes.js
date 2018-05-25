console.log('Starting notes...');
var fs = require('fs');

 var addNote = (title,body) => 
 {
 var notes=[];
 var note=
 {
     title,
     body
 }

 try
 {
    var noteStringValue = fs.readFileSync('notes-json.js');
    notes = JSON.parse(noteStringValue);    
 }
 catch(e)
 {

 }
var duplicateNotes = notes.filter((note) => note.title === title);
 // if this function return true then duplicateNotes.length > 0, has duplicate notes
 //Else duplicateNotes.length == 0, no duplicate notes.
 if(duplicateNotes.length === 0)
 {
    notes.push(note);
    fs.writeFileSync('notes-json.js',JSON.stringify(notes));
 }
 
 };

var getAll = () =>{ console.log('Get all notes')};

var readNote = (title) =>{console.log('Getting title',title)};

var removeNote =(title) => {console.log('Remove note',title)};

module.exports={
    addNote,
    getAll,
    readNote,
    removeNote
    
};