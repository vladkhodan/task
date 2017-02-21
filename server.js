var express = require('express');
var engine = require('ejs-locals');
var path = require("path");
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/signup', function (req, res) {
    res.send({ title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});