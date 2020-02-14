/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var alturaRectangulo;
	var baseRectangulo;
	var perimetro;
	var cantidadAlambre;

	alturaRectangulo = document.getElementById('Largo').value;
	alturaRectangulo = parseInt(alturaRectangulo);
	baseRectangulo = document.getElementById('Ancho').value;
	baseRectangulo = parseInt(baseRectangulo);

	perimetro = alturaRectangulo*2 + baseRectangulo*2;
	cantidadAlambre = perimetro*3;

	console.log("perimetro: "+perimetro);
	console.log("cantidad de alambre: "+cantidadAlambre);
}
function Circulo () 
{
	var radio;
	var perimetro;
	var cantidadAlambre;
	var pi;

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);

	perimetro = 2*pi*radio;
}
function Materiales () 
{
	
}