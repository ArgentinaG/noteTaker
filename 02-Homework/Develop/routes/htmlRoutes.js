//Require path and router
var router = require('express').Router(); 
var path = require("path");
//Create  route that renders the notes.html file
router.get("/notes", (req,res)=> {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
//Whenever this route (localhost:5000/notes) -the notes file inside of the pblic folder will render
});

//Create a route that renders the index.html (this should be your root route)
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
//Whenever this route (localhost:5000/) is typed in it will render the root file which is the index.html file
});

// Export your route
module.exports = router;



//Example - create a route that leads to fake.html

// router.get("/fake", (req, res) => {
//     res.sendFile(path.join(__dirname,"../public/fake.html"))
// });