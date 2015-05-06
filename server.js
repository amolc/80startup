// Invoke 'strict' JavaScript mode
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(6200);
module.exports = app;

console.log('Server running at http://localhost:6200/');