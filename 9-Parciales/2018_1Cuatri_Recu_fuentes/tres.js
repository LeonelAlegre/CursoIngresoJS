function mostrar()
{
	var precio;
	var porcentaje;
	var total;

	do
	{
		precio=prompt("ingresar el precio");
	}while(isNaN(precio));

	do
	{
		porcentaje=prompt("ingresar el porcentaje de descuento");
	}while(isNaN(porcentaje));

	total=precio-precio*porcentaje/100;

	document.getElementById('elPrecioFinal').value=total;
}
