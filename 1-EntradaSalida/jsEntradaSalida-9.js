/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
 
	aumento = 10;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	resultado = document.getElementById('resultado');
	resultado = parseInt('resultado');

	aumento = sueldo*aumento/100;
	resultado = aumento+sueldo;
	console.log(resultado);
}
