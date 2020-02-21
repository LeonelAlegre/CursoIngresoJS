function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='no';

	
	numeroIngresado=prompt("Ingresar un numero");
	numeroIngresado=parseInt(numeroIngresado);

	numeroMaximo=numeroIngresado;
	numeroMinimo=numeroIngresado;
	
	console.log("numeroIngresado: "+numeroIngresado);
	console.log("numeroMaximo: "+numeroMaximo);
	console.log("numeroMinimo: "+numeroMinimo);

	respuesta=prompt("Desea continuar?");
	while(respuesta=="si")
	{	
		
		numeroIngresado=prompt("Ingresar un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		console.log("numeroIngresado: "+numeroIngresado);
		console.log("numeroMaximo: "+numeroMaximo);
		console.log("numeroMinimo: "+numeroMinimo);

		respuesta=prompt("Desea continuar?");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN