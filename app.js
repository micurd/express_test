var express  = require('express'); //get express library
var app = express();

app.set('view engine','ejs');

app.get('/', function(req,res){
	res.render('default',{
		title:'Home',
		classname: 'home',
		users:['Mike','Bill','Tom']
	});
});

app.get('/about', function(req,res){
	res.render('default',{
		title:'About Us',
		classname: 'about'
	});});

app.get('/who/:name?', function(req,res){
	var name = req.params.name;
	res.send(name + ' was here');
});

app.get('*', function(req,res){
	res.send('Bad Route');
});

var server = app.listen(3000,function(){
	console.log('listening on port 3000');
});