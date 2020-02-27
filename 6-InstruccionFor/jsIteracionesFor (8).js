function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var bandera;

	bandera=0;
	numeroIngresado=prompt("ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			bandera = 1;
			break;
		}
	}

	if(bandera==1)
	{
		console.log("no es primo");
	}
	else
	{
		console.log("el numero: "+numeroIngresado+" es primo");
	}
}//FIN DE LA FUNCIÓN


	/*
	var edad;
	do
	{
		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
	}while(edad<0 || edad>110);
	*/