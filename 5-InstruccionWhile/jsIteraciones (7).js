function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si")
	{
		contador = contador + 1 //tambien +1 o ++
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		//NaN devuelve verdadero mientras no sea un numero
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("error, ingresar numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//el valor del contador se asigna al acumulador
		acumulador = acumulador+numeroIngresado;

		respuesta = prompt("ingrese si para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN