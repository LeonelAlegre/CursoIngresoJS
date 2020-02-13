function mostrar()
{
	var edad;
	var estado;
	//ingreso de datos
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estado = document.getElementById('estadoCivil').value ;

	if(edad<18 && estado!== "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	
	console.log("edad: "+edad);
	console.log("estado: "+estado);

}//FIN DE LA FUNCIÓN