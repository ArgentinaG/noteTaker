// require util 
var util = require("util");
// require fs
var fs = require("fs");
//package will allow you to obtain random user id 
const uuidv1 = require('uuid/v1');
//create two variables that that promises to use read and write file in a async manner (we will discuss)
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
//create a class that will hold the following functions {
//read();
//write(notes);
//getNotes();
//addNote(note);
//deletenote(id);
//}
class CRUD {
    //start by creating a fucntion named read()
    read() {
        return readFile("./db/db.json", "utf8")
    }
    write(note) { return writeFile(".db/db.json", json.stringify(note)) }
    //create function 
    getNotes() {
        //above function is returnning the read function
        return this.read().then(notes => {
            //promis function is to generate the parseNotes variable
            let parseNotes;
            //Try statement if parseNotes 
            try {
                //parseNotes are to be placed in a json format and concatenate them  
                parseNotes = [].concat(JSON.parse(notes))
                //considered an error 
            } catch (err) {
                //will generate an empty object    
                parseNotes = [];
            }
            //will return parseNotes
            return parseNotes;
        });

    }
    addNotes(notes) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error(" in order to have a note created you must adda tittle and text ")
        }

        const newEntry = { title, text, id: uuidv1() }
        return this.getNotes()
            .then(notes => [...notes, newEntry])
        //create a promise that will write your new entry to your updateNotes
        //then return your newEntry (using arrow function)

    }
}
//then export the new class;

