function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingresar un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			positivo = positivo + numeroIngresado;
			console.log("numero ingresado: "+numeroIngresado);
			console.log("suma: "+positivo);
		}
		else
		{
			if(numeroIngresado<0)
			{
				negativo = negativo * numeroIngresado;
				console.log("numero ingresado: "+numeroIngresado);
				console.log("producto: "+negativo);
			}
		}

		respuesta = prompt("desea agregar numeros?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN