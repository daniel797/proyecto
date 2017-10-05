const express = require('express');
const pug = require('pug');

var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home2.pug', {
    pageTitle: "FABULA “EL CABALLO VIEJO”, DE ESOPO",
    Message1: "Un caballo viejo fue vendido para darle vueltas a la piedra de un molino.",
    Message2: "Al verse atado a la piedra, exclamó sollozando:",
    Message3: "¡Después de las vueltas de las carreras, he aquí a que vueltas me he reducido!",
    Message4: "Moraleja: No presumáis de la fortaleza de la juventud.",
    Message5: "Para muchos, la vejez es un trabajo muy penoso.",
  });
});

app.get('/encriptado', (req, res) => {
  res.render('home2.pug', {
    pageTitle: convertir("FABULA “EL CABALLO VIEJO”, DE ESOPO"),
    Message1: convertir("Un caballo viejo fue vendido para darle vueltas a la piedra de un molino."),
    Message2: convertir("Al verse atado a la piedra, exclamó sollozando:"),
    Message3: convertir("¡Después de las vueltas de las carreras, he aquí a que vueltas me he reducido!"),
    Message4: convertir("Moraleja: No presumáis de la fortaleza de la juventud."),
    Message5: convertir("Para muchos, la vejez es un trabajo muy penoso."),
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
  
});

function convertir(str) { 
  var conv = '';
  for (var i=0; i<=str.length-1; i++) {
  	if (str[i]=='A'){
  	    conv += '4';
  	    continue;
  	}
  	if (str[i]=='E'){
  	    conv += '3';
  	    continue;
  	}  	  
  	if (str[i]=='I'){
  	    conv += '1';
  	    continue;
  	}  	    
  	if (str[i]=='O'){
  	    conv += '0';
  	    continue;
  	}  	    
  	if (str[i]=='U'){
  	    conv += '5';
  	    continue;
  	}  	    
  	else
	    conv += str[i];  
  }
  return conv;
};


