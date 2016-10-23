'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const recast = require('recastai');

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Start page for EvoMe');
});

app.get('/webhook/', function (req,res){
	if(req.query['hub.verify_token'] === 'evome'){
		res.send(req.query['hub.challenge']);
	}
	res.send('Error');
});

app.post('/webhook/', function(req, res){
	console.log("Got to post");
	console.log(req.body);
});

app.listen(app.get('port'), function(){
	console.log('running on port', app.get('port'));
});

module.exports = app;
