// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

var rectangleOptimize = require("./rectangleOptimize.js");


app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
<<<<<<< HEAD
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var number = Math.floor(Math.random() * (100 - 1) + 1);
console.log(number);

rectangleOptimize.printThis("hello from another file");
});
=======
});

//added from Cloud 9
>>>>>>> FETCH_HEAD
