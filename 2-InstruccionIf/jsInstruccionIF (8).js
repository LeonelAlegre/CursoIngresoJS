function mostrar()
{
	var edad;
	var estado;

	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estado = document.getElementById('estadoCivil').value;

	if(edad<18 && estado!=="Soltero")
	{
		console.log("nada");
	}
	else if (estado=="Soltero" && edad>17)
	{
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN