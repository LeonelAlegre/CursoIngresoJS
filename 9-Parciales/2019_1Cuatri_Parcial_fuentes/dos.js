function mostrar()
{//B)
	var nombre;

	var cantidadPersonas;
	var mayorCantPersonas;
	var huespedMasPersonas;

	var cantidadDias;
	var personasMasDias;
	var mayorCantDias;
	var promedioDias;
	var totalDias=0;
	var cantReservas=0;

	var formaPago;
	var pagoMasUtilizado;
	var contadorEfectivo=0;
	var contadorTarjeta=0;
	var contadorQr=0;
	
	var continuar;


	do
	{	
		do
		{
			nombre=prompt("igrese su nombre");
		}while(!isNaN(nombre));
		do //------------personas
		{
			cantidadPersonas=prompt("Cantidad de personas");
			cantidadPersonas=parseInt(cantidadPersonas);
		}while(isNaN(cantidadPersonas)||cantidadPersonas<0);
		do
		{
			mayorCantPersonas=cantidadPersonas;
			huespedMasPersonas=nombre;
		}while(cantidadPersonas>mayorCantPersonas);

		do //---------------dias
		{
			cantidadDias=prompt("Cantidad de dias");
			cantidadDias=parseInt(cantidadDias);
		}while(isNaN(cantidadDias)||cantidadDias<0);
		do
		{
			mayorCantDias=cantidadDias;
			personasMasDias=cantidadPersonas;
		}while(cantidadDias>mayorCantDias);

		totalDias=totalDias+cantidadDias;

		do //--------------pago
		{
			formaPago=prompt("forma de pago: 'efectivo', 'tarjeta' o 'QR' ");
		}while(formaPago!="efectivo"&&formaPago!="tarjeta"&&formaPago!="QR");
		
		switch(formaPago)
		{
			case "efectivo":
				contadorEfectivo++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			case "QR":
				contadorQr++;
				break;
		}
		cantReservas++;
		continuar=prompt("Desea continuar?");
	}while(continuar!="no");

	if (contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQr) 
	{
		pagoMasUtilizado="efectivo";
	}
	else
	{
		if(contadorTarjeta>contadorEfectivo && contadorTarjeta>contadorQr)
		{
			pagoMasUtilizado="tarjeta";
		}
		else
		{
			pagoMasUtilizado="QR";
		}
	}
	
	promedioDias=totalDias/cantReservas;

	document.write("Huespede que trajo mas personas:"+huespedMasPersonas+"<br>");
	document.write("Cantidad de personas que se quedaron mas dias: "+personasMasDias+"<br>");
	document.write("Forma de pago mas utilizada: "+pagoMasUtilizado+"<br>");
	document.write("Promedio de dias por reserva: "+promedioDias+"<br>");
}
