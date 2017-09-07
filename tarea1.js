let alumnos = [
	{nom:"juan",
	 ape:"perez",
	 cod:"2015354",
	 cic:'3'
	},
	{nom:"jose",
	 ape:"diaz",
	 cod:"2013592",
	 cic:'5'
	},
	{nom:"pedro",
	 ape:"soto",
	 cod:"2009231",
	 cic:'7'
	},
	{nom:"luis",
	 ape:"torres",
	 cod:"2010752",
	 cic:'8'
	},
	{nom:"sara",
	 ape:"jimenez",
	 cod:"2012987",
	 cic:'7'
	},
	{nom:"rosa",
	 ape:"flores",
	 cod:"2016392",
	 cic:'2'
	},
	{nom:"carlos",
	 ape:"cordova",
	 cod:"2017389",
	 cic:'1'
	},
	{nom:"hugo",
	 ape:"tapia",
	 cod:"2008327",
	 cic:'9'
	},
	{nom:"laura",
	 ape:"caceres",
	 cod:"2015647",
	 cic:'3'
	},
	{nom:"sara",
 	 ape:"jimenez",
	 cod:"2012987",
	 cic:'7'
	},
	{nom:"javier",
	 ape:"galvez",
	 cod:"2011156",
	 cic:'6'
	}
]

let ciclo = ['1','2','3','4','5','6','7','8','9','10'];
let cont = [];


console.log("nombre\t"+"\tapellido"+"\tcodigo\t"+"\tciclo");
for(i=0;i<=alumnos.length-1;i++){

	
	console.log(alumnos[i].nom+"\t\t"+alumnos[i].ape+"\t\t"+alumnos[i].cod+ "\t\t"+alumnos[i].cic);
}

for(k=0; k<=ciclo.length-1;k++){
	j=0;
	for (i=0; i <= alumnos.length-1;i++){
		if(alumnos[i].cic==ciclo[k]){
			j = j+1;
		}
		cont[k]=j;
	}
}


for(k=0; k <= cont.length-1; k++){
	console.log("En el ciclo "+(k+1)+" se matricularon "+cont[k]+" alumnos");
}


