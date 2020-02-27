function mostrar()
{
	var notas;
	var notasTotales=0;
	var sexo;
	var sexoMenor;
	var promedio;
	var notaMenor;
	var varonesContador;
	var alumnos; //contador

	alumnos=1;
	varonesContador=0;
	//se guarda la nota del usuario:
	notas=prompt("ingresar nota");
	notas=parseInt(notas);
	//validacion de notas:
	while(isNaN(notas) || (notas<0 || notas>10))
	{
		notas=prompt("Error. Ingresar nota del 0 la 10.");
		notas=parseInt(notas);
	}

	sexo=prompt("ingresar sexo (f o m)");
	//validacion de sexo:
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Error. Ingresar sexo (f o m)");
	}
	//se asigna el valor de la nota a nota mayor y menor
	notaMenor=notas;
	//
	sexoMenor=sexo;
	//notas totales = 0 + nota ingresada
	notasTotales=notasTotales+notas;

	if(notas>5 && sexo=="m")
	{
		varonesContador++; 
	}

	while(alumnos<5)
	{	
		notas=prompt("ingresar nota");
		notas=parseInt(notas);
		//validacion de notas.
		while(isNaN(notas) || (notas<0 || notas>10))
		{
		
			notas=prompt("Error. Ingresar nota del 0 la 10.");
			notas=parseInt(notas);
		}
		sexo=prompt("ingresar sexo (f o m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error. Ingresar sexo (f o m)");
		}
		notasTotales=notasTotales+notas;
		if(notas<notaMenor)
		{
			notaMenor=notas;
			sexoMenor=sexo;
		}
		
		if(notas>5 && sexo=="m")
		{
			varonesContador++; 
		}
		alumnos++;
	}

	promedio=notasTotales/alumnos;




}
