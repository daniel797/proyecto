var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
 res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('Trabajaremos con el puerto 3000');

 
var Router = express.Router();
 
Router.get('/', function(req, res) {
 res.send('¡Soy el panel de administración!');
});

Router.param('name', function(req, res, next, name){
 

if(name==='daniel'){
 console.log('usuario correcto ' + name);
 
}
else {
 name='este no es el usuario correcto'
 console.log('este no es el usuario correcto');
}

 req.name = name;

 next();
});
 
Router.get('/hola/:name', function(req, res){
 res.send('hola ' + req.name);
});

Router.get('/posts', function(req, res) { 
 res.send('¡Muestro todos los posts!');
});
 
app.use('/admin', Router);

Router.use(function(req, res, next){

 console.log(req.method, req.url);

 next();
});


