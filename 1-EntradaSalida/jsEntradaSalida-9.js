/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	var porcentaje;
 	//valor del porcentaje a calcular:
	porcentaje = 10;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	resultado = document.getElementById('resultado').value;
	resultado = parseInt('resultado');

	aumento = sueldo*porcentaje/100;
	resultado = aumento+sueldo;

	//devuelve el resultado y lo muestra en el cuadro de texto "resultado"
	document.getElementById('resultado').value = resultado;
	console.log(resultado);
}
