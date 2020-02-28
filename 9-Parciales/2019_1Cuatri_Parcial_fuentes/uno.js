
function mostrar()
{
	var nombre;

	var edad;
	var edadMinima;
	var edadMaxima;
	var edadTotal;
	var edadTotalMujeres;
	var contadorEdad;
	var promedioEdad;
	var promedioMujeres;

	var sexo;
	var cantidadMujeres;

	var temperatura;
	var temperaturaJoven;
	var temperaturaViejo;

	var repeticiones;//contador

	contadorEdad=0;
	cantidadMujeres=0;
	edadTotalMujeres=0;
	contadorEdad=0;
	edadTotal=0;
	do
	{	
		do
		{
			nombre=prompt("igrese su nombre");
		}while(!isNaN(nombre));
		//------EDAD
		do
		{
			edad=prompt("Ingresar edad.");
			edad=parseInt(edad);
		}while(isNaN(edad));

		contadorEdad++;
		edadTotal=edad+edadTotal;
		//-----------------SEXO
		do
		{
			sexo=prompt("ingresar sexo('m' o 'f')");
		}while(sexo!="m" && sexo!="f");
		if(sexo=="f")
		{
			cantidadMujeres++;
			edadTotalMujeres=edadTotalMujeres+edad;
		}

		//-------------TEMPERATURA
		do
		{
			temperatura=prompt("ingresar temperatura corporal");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura) || temperatura<36);
		
		do
		{
			edadMinima=edad;
			temperaturaJoven=temperatura;
		}while(edad<edadMinima);
		do
		{
			edadMaxima=edad;
			temperaturaViejo=temperatura;
		}while(edad>edadMaxima);

		if(temperatura>37 && (edad<14 || edad>59))
		{
			alert("riesgo: "+nombre);
		}

		repeticiones=prompt("desea continuar?");
	}while(repeticiones!="no");

	promedioEdad=edadTotal/contadorEdad;
	promedioMujeres=edadTotalMujeres/cantidadMujeres;

	document.write("temperatura del mas joven: "+temperaturaJoven+"<br>");
	document.write("temperatura del mas viejo: "+temperaturaViejo+"<br>");
	document.write("promedio de edad total: "+promedioEdad+"<br>");
	document.write("promedio de edad de mujeres: "+promedioMujeres+"<br>");

}
