function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var nota;
	var notasMenores=0;
	var varonesAprobados=0;
	var promedioMenores;
	var promedioAdolescentes;//13-18
	var promedioMayores;
	var promedioHombres;
	var promedioMujeres;
	var ingresoDatos;

	var contador=0;
	var contadorMenores=0;

	do
	{
		nombre=prompt("ingresar nombre");
		edad=prompt("ingresar edad");edad=parseInt(edad);
		sexo=prompt("ingresar sexo ('f' o 'm')");
		nota=prompt("ingresar nota"); nota=parseInt(nota);
		ingresoDatos=prompt("desea continuar?");

		if(sexo=="m" && nota>5)
		{
			varonesAprobados++;
		}
		if(edad<18)
		{
			notasMenores=nota+notasMenores;
			contadorMenores++;
		}

		console.log(varonesAprobados);
	}while(ingresoDatos!="no");

	promedioMenores=notasMenores/contadorMenores;
	console.log("promedio de menores: "+promedioMenores);
}
//punto a y b resueltos
