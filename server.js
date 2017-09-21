var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var diners = [];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/api/tables', function(req, res) {
  for (var i = 0; i < 4; i++) {
    res.json(diners[i]);
  }
});

app.get('/api/waitlist', function(req, res) {
  for (var i = 5; i < diners.length; i++) {
    res.json(diners[i]);
  }
});

app.listen(port, function() {
  console.log("I'm listening on PORT " + port);
});
