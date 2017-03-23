const express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, function() {
  console.log("This app will listen on Port 3000");
});

// app.get("/", function(request, response) {
//   response.send("Hello Austin, Texas");
// })
//
// app.get("/about", function(request, response) {
//   response.send("Hello San Francisco, California");
// })
//
// app.get("/:name", function(request, response) {
//   response.send("Hello " + request.params.name);
// })

app.get("/", function(request, response) {
  response.redirect('/99');
})

  app.get("/:number_of_beers", function(request, response) {
    var numberOfBottles = request.params.number_of_beers;
    var next = numberOfBottles - 1;
  //   if (bottles > 0) {
  //   response.send(bottles + " bottles of beer <a href='/" + bottles + "'>take one down and drink it all down</a>");
  // } else {
  //   response.send("No bottles left <a href='/'> Start Over</a>")
  // }
  response.render('index', {bottles: numberOfBottles, next: next });
})
