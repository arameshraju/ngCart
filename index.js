
var express = require('express');

var hostname='localhost';
var port =3000;

var app=express();

app.use(express.static(__dirname +'/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(port,hostname,function(){
console.log('Express Webserver is running .. login to http://${hotname}:${post}/');

});