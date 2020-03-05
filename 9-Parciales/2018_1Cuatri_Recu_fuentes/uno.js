
function mostrar()
{
	var anchoRectangulo;
	var largoRectangulo;
	var perimetro;

	do
	{
		anchoRectangulo=prompt("ingrese el ancho del rectangulo");
		anchoRectangulo=parseInt(anchoRectangulo);
	}while(isNaN(anchoRectangulo)||anchoRectangulo<1);

	do
	{
		largoRectangulo=prompt("ingrese el largo del rectangulo");
		largoRectangulo=parseInt(largoRectangulo);
	}while(isNaN(largoRectangulo)||largoRectangulo<1);



	perimetro=anchoRectangulo*2+largoRectangulo*2;

	console.log("largo: "+largoRectangulo);
	console.log("ancho: "+anchoRectangulo);
	alert("El perimetro del rectangulo es: "+perimetro);
}
