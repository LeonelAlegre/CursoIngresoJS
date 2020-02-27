function mostrar()
{
	var notas;
	var notasTotales;
	var sexo;
	var sexoMenor;
	var promedio;
	var notaMenor;
	var varonesContador;
	var alumnos; //contador

	alumnos=0;
	varonesContador=0;
	notasTotales=0;

	while(alumnos<5)
	{	
		notas=prompt("ingresar nota");
		notas=parseInt(notas);
		while(isNaN(notas) || (notas<0 || notas>10))//validacion
		{
		
			notas=prompt("Error. Ingresar nota del 0 la 10.");
			notas=parseInt(notas);
		}

		sexo=prompt("ingresar sexo (f o m)");
		while(sexo!="f" && sexo!="m")//validacion
		{
			sexo=prompt("Error. Ingresar sexo (f o m)");
		}
		if(alumnos==0) //se ejecuta solo la primera vez
		{
			notaMenor=notas;
			sexoMenor=sexo;
		}
		
		if(notas<notaMenor)
		{
			notaMenor=notas;
			sexoMenor=sexo;
		}
		
		if(notas>5 && sexo=="m")
		{
			varonesContador++; 
		}

		notasTotales=notasTotales+notas;
		alumnos++;
		/*
		console.log("notas: "+notas);
		console.log("sexo: "+sexo);
		console.log("notaMenor: "+notaMenor);
		console.log("sexoMenor: "+sexoMenor);
		console.log("varonesContador: "+varonesContador);
		console.log("notasTotales: "+notasTotales);
		*/
	}

	promedio=notasTotales/alumnos;
	//---console.log("promedio: "+promedio);
	
	alert("Promedio de las notas: "+promedio);
	alert("Nota mas baja: "+notaMenor+" sexo: "+sexoMenor);
	alert("Varones con nota mayor a 6: "+varonesContador);
}
