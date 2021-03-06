var express = require('express'), 
    pug = require('pug'),
    path = require('path'),
    config = require('./config'),
    images = require('./images');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    
    res.render('index', { title: "Homepage", images: images, config:config});
});

app.get('/:page', function(req, res){
    res.render(req.params.page, { title: req.params.page, images: images, config: config});
});

app.listen(3000);