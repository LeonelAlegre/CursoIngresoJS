/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//estructura
	//1. declaracion de variables
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;

	//2. asignacion y modificacion de datos
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	//3. operaciones
	resultadoDeLaSuma=primerNumero+segundoNumero;
	console.log(resultadoDeLaSuma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaResta;

	//2. asignacion y modificacion de datos
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	//3. operaciones
	resultadoDeLaResta=primerNumero-segundoNumero;
	console.log(resultadoDeLaResta);
}

function multiplicar()
{ 
	//estructura
	//1. declaracion de variables
	var primerNumero;
	var segundoNumero;
	var resultadoDelProducto;

	//2. asignacion y modificacion de datos
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	//3. operaciones
	resultadoDelProducto=primerNumero*segundoNumero;
	console.log(resultadoDelProducto);
}

function dividir()
{
	//estructura
	//1. declaracion de variables
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaDivision;

	//2. asignacion y modificacion de datos
	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	segundoNumero = parseInt(segundoNumero);

	//3. operaciones
	resultadoDeLaDivision=primerNumero/segundoNumero;
	console.log(resultadoDeLaDivision);
}

