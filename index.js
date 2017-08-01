var express = require('express'), 
    pug = require('pug'),
    path = require('path'),
    config = require('./config');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.render('index', { title: "Homepage"});
});

app.get('/directions', function(req, res){
    res.render('directions', { title: "Directions"});
});

app.listen(3000);