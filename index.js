console.log("starting the application");
// create the express server
var express = require("express");
var app = express();
// create the port
var port = process.env.PORT || 3000;
// create the router
var router = express.Router();
//  use the public folder for static files
app.use(express.static("public"));




// listen on the port
app.listen(port, function () {
    console.log("listening on port " + port);
});





