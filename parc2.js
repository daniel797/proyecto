const request = require('request');

var geocodeAddress = () => {
	return new Promise((resolve,reject) => {
		request({
			url: `https://mighty-harbor-50073.herokuapp.com/api`,
			json: true
		},(error,response,body) => {
			//console.log(JSON.stringify(body, undefined,2));
			if(error){
				reject('Unable to connect to google servers');
			}else if(body.status === 'ZERO_RESULTS'){
				reject('Unable to find that address');
			}else if(body.status === 'OK'){
				resolve(
					{
						address: body.facultades[0].profesores[0],

					}
				);
			}
		});
	});
};

geocodeAddress().then((address) => {
	console.log(JSON.stringify(address,undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});


var list1 = {
	for (j=0; j < datos[0].facultades[0].FC.alumnos.length; j++){
		if(datos.facultades[0].alumnos.ciclo==4){
			for (k=0; k < datos.facultades.alumnos.cursos.length; k++){
				if(datos.facultades[0].alumnos.cursos[k]=="Algebra Lineal"){
					console.log(datos.facultades[0].alumnos.nombre);
				}
			}
		}
	}
};

var list2 = {
	for (j=0; j < datos[0].facultades[0].FC.alumnos.length; j++){
		if(datos.facultades.alumnos.ciclo==7){
			for (k=0; k < datos.facultades.alumnos.cursos.length; k++){
				console.log(datos.facultades[0].alumnos.nombre);
			}
		}
	}
};

var list3 = {
	for (j=0; j < datos[0].facultades[0].FC.profesores.length; j++){
		if(datos[0].facultades[0].FC.profesores.nombre=="Juana" ){
			for (k=0; k < datos.facultades.alumnos.cursos.length; k++){
				console.log(datos.facultades[0].alumnos.nombre);
			}
		}
	}
};
