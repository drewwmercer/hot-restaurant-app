var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setting up the Express app
var app = express();
// var port = process.env.PORT || 3000;
var port = 3000;

// Setting up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// The data
var diners = [{
    "customerEmail": "fg",
    "customerID": "2",
    "customerName": "fd2",
    "phoneNumber": "4"
    }];

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.post('/api/tables', function(req, res) {
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
