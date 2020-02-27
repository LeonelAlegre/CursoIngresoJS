function mostrar()
{
	/*
	var contador=0;    //1
	while(contador<10) //2
	{
		contador++;    //3
	}
	*/

	var contador;
	
	//El for(1;2;3) ejectuta el paso 1, luego el paso 2 y despues
	//ejecuta el codigo dentro de llaves, cuando termina ejecuta 
	//el paso 3
	//-----1------------2-----------3-------
	for(contador= 0;contador<10;contador++)
	{
		console.log(contador);
	}

	//se SUELE usar para iteraciones en las que se 
	//conocen la cantadidad de iteraciones
}