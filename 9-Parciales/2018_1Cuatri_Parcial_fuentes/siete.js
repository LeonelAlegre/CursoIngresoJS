function mostrar()
{
	var notas;
	var notasTotales=0;
	var sexo;
	var sexoMenor;
	var promedio;
	var notaMenor;
	var notaMayor;
	var varonesContador=0;
	var alumnos; //contador

	alumnos=1;
	//se guarda la nota del usuario
	notas=prompt("ingresar nota");
	notas=parseInt(notas);
	//sexo=prompt("ingresar sexo (f o m)");
	sexo=prompt("ingresar sexo (f o m)");

	//se asigna el valor de la nota a nota mayor y menor
	notaMayor=notas;
	notaMenor=notas;
	//
	sexoMenor=sexo;
	//notas totales = 0 + nota ingresada
	notasTotales=notasTotales+notas;

	if(notas>5 && sexo=="m")
	{
		varonesContador++; 
	}


	console.log("nota: "+notas);
	console.log("notas totales: "+notasTotales);
	console.log("notaMayor: "+notaMayor);
	console.log("sexo: "+sexo);
	console.log("notaMenor: "+notaMenor);
	console.log("sexo de la menor nota: "+sexoMenor);
	console.log("contador de varones+6: "+varonesContador);

	while(alumnos<5)
	{	
		notas=prompt("ingresar nota");
		notas=parseInt(notas);
		sexo=prompt("ingresar sexo (f o m)");

		notasTotales=notasTotales+notas;
		if(notas>notaMayor)
		{
			notaMayor=notas;
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

		console.log("nota: "+notas);
		console.log("notas totales: "+notasTotales);
		console.log("notaMayor: "+notaMayor);
		console.log("sexo: "+sexo);
		console.log("notaMenor: "+notaMenor);
		console.log("sexo de la menor nota: "+sexoMenor);
		console.log("contador de varones+6: "+varonesContador);
		
		alumnos++;
	}

	promedio=notasTotales/alumnos;
	console.log("promedio: "+promedio);
}
