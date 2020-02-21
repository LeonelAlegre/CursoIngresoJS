function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		//numero ingresado por usuario
		numeroIngresado = prompt("ingresar un numero");
		numeroIngresado = parseInt(numeroIngresado);

		//comprobacion para numero positivos +0
		if(numeroIngresado>0)
		{	
			//el valor de la suma se acumula en la var positivo
			positivo = positivo + numeroIngresado;
			console.log("numero ingresado: "+numeroIngresado);
			console.log("suma: "+positivo);
		}
		else
		{
			//comprobacion para numeros negativos -0
			if(numeroIngresado<0)
			{
				//el valor del producto se acumula en var negativo
				negativo = negativo * numeroIngresado;
				console.log("numero ingresado: "+numeroIngresado);
				console.log("producto: "+negativo);
			}
		}
		//en caso de responder diferente a "si" el bucle acaba
		respuesta = prompt("desea agregar numeros?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN