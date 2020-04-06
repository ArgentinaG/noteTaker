// What is express? 
//A library that assist with the creation of a server
//Rrequire the express install 
//stating that you'd like to utilize the function and reit's libraryr
var express = require('express')
//executing the express functions without needing to reinitialize it - making express a callback funtion 
var app = express();

//require your frontend route file  (place it in a variable)
var frontEnd= require("./routes/htmlRoutes");
//require the backend route file (place it in a variable)
var backEnd= require("./routes/apiRoutes");
//Create variables that hold the port number of choice (include process.env)
 var Port = 5000;

//use()
//tell express to use the express json function 
app.use(express.json());
//tell express to use the express urlencoded extended true function
app.use(express.urlencoded({extended: true}));
//tell express to use the express static function to render the public folder 
app.use(express.static("public"));
//tell express to use your backend api routes file (whenever someone his this type of route - theserver will grab the backend file) - sets the prefix for your backend routes
app.use("/api", backEnd);
//tell express to use your frontend routes file () - this sets the prefix for your frontend routes
app.use("/", frontEnd)


//listen() *****
//tell express to listen on a specific port 
app.listen(Port, () => console.log("Connected to your app!")
);