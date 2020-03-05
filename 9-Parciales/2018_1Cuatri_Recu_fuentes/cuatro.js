function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	do
	{
		numeroUno=prompt("ingresar el primer numero");
		numeroUno=parseInt(numeroUno);
	}while(isNaN(numeroUno));

	do
	{
		numeroDos=prompt("ingresar el segundo numero");
		numeroDos=parseInt(numeroDos);
	}while(isNaN(numeroDos));

	suma= numeroUno+numeroDos;

	if(numeroUno==numeroDos)
	{
		numeroUno=numeroUno.toString();
		numeroDos=numeroDos.toString();

		alert(numeroUno+numeroDos);
	}
	else 
	{
		if(numeroUno>numeroDos)
		{
			alert(numeroUno/numeroDos);
		}
		else
		{
			alert(suma);
		}
	}

	if(suma<50)
	{
		alert("la suma es "+suma+" y es menor a 50");
	}
}
