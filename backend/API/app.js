var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var user = require('./routes/user.controller');
var sample = require('./routes/sample.controller');
var project = require('./routes/project.controller');

var analysis = require('./routes/analysis.controller');

var auth = require('./routes/auth.controller');

var uploadFile = require('./routes/uploadFile.controller');

var info = require('./routes/info.controller')

// UPLOAD FILES
var fs = require('fs');
var busboy = require('connect-busboy');
// END UPLOAD FILES

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:27857');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// TODO: this should load the methods of the API

app.use(busboy());

app.use('/info', info);
app.use('/user', user);
app.use('/sample', sample);
app.use('/project', project);
app.use('/analysis', analysis);
app.use('/auth', auth);
app.use('/uploadFile', uploadFile);

module.exports = app;