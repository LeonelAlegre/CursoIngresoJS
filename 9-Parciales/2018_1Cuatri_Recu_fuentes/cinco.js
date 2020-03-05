function mostrar()
{
	var dia;

	dia=prompt("ingresar dia de la semana");

	switch(dia)
	{
		case "sabado":
			alert("buen finde");
			break;
		case "domingo":
			alert("buen finde");
			break;	
		case "lunes":
			alert("a trabajar");
			break;
		case "martes":
			alert("a trabajar");
			break;
		case "miercoles":
			alert("a trabajar");
			break;
		case "jueves":
			alert("a trabajar");
			break;
		case "viernes":
			alert("a trabajar");
			break;			
		default:
			alert("dia no valido");
	}
}
