var seneca = require('seneca');
var web = require('seneca-web');
var express = require('express');

var seneca = seneca();
var express = express();


var config = {
	routes:{
		prefix: '/my-api',
		pin: "role:'api',cmd:*",
		map:{
			bazinga: {GET: true}
		}
	}
};

var cad = "nombre";

seneca.use(web, {adapter: require('seneca-web-adapter-express'),context: express })
seneca.act("role:web", config);
seneca.add('role:api,cmd:bazinga', bazing);


express.listen(3000);

function bazing(args,done){
	done(null,{bar:mayuscula(cad)});
};


function invertir(str) { 
  var reverse = '';
 
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
 
  return reverse;         
};


function mayuscula(str){
	return str.toUpperCase()
};
	
