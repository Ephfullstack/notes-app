const NotesModel = require("./notesmodel");

describe("NotesModel", () => {
  it("should construct an empty array", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it("should add notes to a list", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });
  it("should remove all notes in a list when it is reset", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});

// describe("NotesModel", () => {
//   it("returns an empty list if no notes are added", () => {
//     const model = new NotesModel();
//     expect(model.getNotes()).toEqual([]);
//   });

//   fit("returns a list of added items", () => {
//     const model = new NotesModel();
//     model.addNotes("Buy milk");
//     model.addNotes("Go to the gym");
//     expect(model.addNotes()).toEqual(["Buy Milk", "Go to the gym"]);
//   });

// //   it("should remove all the notes in a list when it is rest", () => {
// //     const model = new NotesModel();
// //     model.addNotes("Buy milk");
// //     model.addNotes("Go to the gym");
// //     model.reset();
// //     expect(model.getNotes()).toEqual([]);
// //   });
// });

// //   it("Adds the previous candy option to the basket and stockplies", () => {
// //     const basket = new ShoppingBasket("Mars", 4.99);
// //     expect(basket.addItem(candy)).toEqual();
// //   });
