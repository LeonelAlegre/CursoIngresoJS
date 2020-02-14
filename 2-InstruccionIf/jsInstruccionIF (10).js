function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if(numeroRandom == 9 || numeroRandom == 10)
	{
		console.log("nota: "+numeroRandom);
		console.log("EXCELENTE");
	} 
	else
	{
		if(numeroRandom > 4)
		{
			console.log("nota: "+numeroRandom);
			console.log("APROBÓ");
		}
		else
		{
			console.log("nota: "+numeroRandom);
			console.log("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN