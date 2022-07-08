class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEL = document.querySelector("#main-container");

    // implement note button within the constructor
    document.querySelector('#add-note-btn').addEventListener('click', () => {
    const newNote = document.querySelector("#add-note-input").value;
    this.addNewNote(newNote);
  });

  //can remove this for now
    // console.log(this.mainContainerEl);
  }

  addNewNote(newNote) {
      this.model.addNote(newNote);
      this.displayNotes();
  }

  displayNotes() {
    const notes = this.model.getNotes();

    //for each note, make and append a new element on the main container 
    notes.forEach((note) => {
        //so we can view it within the HTML from the model
      const noteE1 = document.createElement("div");

      // Give the inner text name as note and give it the class name notes
      noteE1.innerText = note;
      noteE1.className = "note";

      //append to the main container within the HTML 
      this.mainContainerEL.append(noteE1);
    });
  }
}

module.exports = NotesView;
