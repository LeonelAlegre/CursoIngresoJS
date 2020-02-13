function mostrar()
{
	//tomo la edad  
	var edad
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	if(edad > 17)
	{
		alert("es mayor de 18");
	}
	else
	{
		alert("es menor de 18")
	}

}//FIN DE LA FUNCIÓN