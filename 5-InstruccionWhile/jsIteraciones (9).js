function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='no';

	
	numeroIngresado=prompt("Ingresar un numero");
	numeroIngresado=parseInt(numeroIngresado);

	while(isNaN(numeroIngresado))
	{	
		console.log("error");
		numeroIngresado=prompt("error, ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
	}
	//se guarda el unico valor ingresado como numMaximo y Minimo
	numeroMaximo=numeroIngresado;
	numeroMinimo=numeroIngresado;
	
	console.log("numeroIngresado: "+numeroIngresado);
	console.log("numeroMaximo: "+numeroMaximo);
	console.log("numeroMinimo: "+numeroMinimo);
	//se comprueba que el usuario quiera continuar
	respuesta=prompt("Desea continuar?");
	while(respuesta=="si")
	{	
		//se pide un nuevo numero
		numeroIngresado=prompt("Ingresar un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{	
			console.log("error 2");
			numeroIngresado=prompt("error, ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
		//si es mayor al numero Maximo anterior se sobreescribe dicho valor
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		//si es menor se sobreescribe dicho valor
		if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		console.log("numeroIngresado: "+numeroIngresado);
		console.log("numeroMaximo: "+numeroMaximo);
		console.log("numeroMinimo: "+numeroMinimo);
		//se comprueba que el usuario quiera continuar
		respuesta=prompt("Desea continuar?");
	}
	//muestra los resultados en input tipo texto
	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN