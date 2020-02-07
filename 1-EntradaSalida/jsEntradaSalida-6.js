/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero =document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById('numeroDos').value;

	//parseInt() devuelve un valor en formato numerico(numero entero), NO LO MODIFICA
	// parseInte(primerNumero);
	//para modificar el valor se lo asigna a una variable.
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero+segundoNumero

	alert(suma);
}

