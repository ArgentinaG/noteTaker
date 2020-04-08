// require util 
var util = require("util");
// require fs
var fs = require("fs");
//package will allow you to obtain random user id 

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

function Person(age, passport) {
    this.age = age;
    this.passport = passport;
  }
//then export the new class;

