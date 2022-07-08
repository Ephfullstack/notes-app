const NotesModel = require("./notesmodel");
const NotesView = require("./notesview");

const model = new NotesModel();

const view = new NotesView(model);

view.displayNotes();

console.log(model.getNotes());
console.log("The notes app is running");
