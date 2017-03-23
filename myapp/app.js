var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Good evening Texans!');
});

app.listen(3000, function () {
  console.log('Here is what you will see on your screen');
});
