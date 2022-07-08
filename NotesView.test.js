/**
 * @jest-environment jsdom
 */

const fs = require("fs");

NotesModel = require("./notesmodel");
NotesView = require("./notesview.js");

describe("Notes view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    model = new NotesModel();
    view = new NotesView(model);
  });

  it("displays two notes", () => {
    // 1. Sets up the model and the view

    model.addNote("A first note");
    model.addNote("Another one");

    // 2. Displays the notes on the page
    view.displayNotes();

    // 3. Represents that there should now  be 2 div.notes on the apge
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("displays a note when User inputs string and clicks Post note", () => {
    //within this test we need to 1) set up the model and view instances
    // 2) set the value of the text input to 'this is a test note
    // 3) clicks the submit button
    // 4) which in turn asserts a new note element on the page wich contains "this is a new test note"

    // 1) fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "This is a test note";

    // 2) Click the button
    const button = document.querySelector("#add-note-btn");
    button.click();

    // 3. Represents that there should now  be 2 div.notes on the apge
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "This is a test note"
    );
  });
});
