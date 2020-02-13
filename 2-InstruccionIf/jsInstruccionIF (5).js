function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	
	if(edad > 17 || edad < 13)
	{
		alert("No es adolescente");
	}

	/*
		ineficiente
		if(edad > 17)
	{
		alert("No adolescente");
	}
	if (edad < 13)
	{
		alert("No es adolescente");
	}
	*/
}//FIN DE LA FUNCIÓN