// web.js

//External imports
var express = require("express");
var logfmt = require("logfmt");
var app = express();

//Local imports
var rectangleOptimize = require("./rectangleOptimize.js");
var codeGenerator = require("./codegenerator.js");


app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});


var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
    var sessionID = codeGenerator.getCode();
    console.log(sessionID);
});
