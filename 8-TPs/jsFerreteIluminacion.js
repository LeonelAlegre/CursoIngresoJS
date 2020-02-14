/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lampara;
 	var cantidadLamparas;
 	var subTotal;
 	var total;
 	var descuento;
 	var marca;
 	var recargo;
 	var totalConImpuestos;

 	lampara = 35;
 	cantidadLamparas = document.getElementById('Cantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	marca = document.getElementById('Marca').value;
 	subTotal = lampara * cantidadLamparas;
 	recargo = 0;
 	descuento = 0;

 	//Ejercicio A
 	if(cantidadLamparas > 5)
 	{
 		descuento = subTotal*50/100;
 	}
 	//Ejercicio B
 	if(cantidadLamparas==5)
 	{
 		if(marca == "ArgentinaLuz")
 		{
 			descuento = subTotal*40/100;
 		}
 		else
 		{
	 		descuento = subTotal*30/100;
 		}
 	}
 	//Ejercicio C
 	if(cantidadLamparas == 4)
 	{
 		if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 		{
 			descuento = subTotal*25/100;
		}
 		else
 		{
 			descuento = subTotal*20/100;
 		}
 	}
 	//Ejercicio D
 	if(cantidadLamparas == 3)
 	{
 		if(marca == "ArgentinaLuz")
 		{
 			descuento = subTotal*15/100;
 		}
 		else if(marca == "FelipeLamparas")
 		{
 			descuento = subTotal*10/100;
 		}
 		else
 		{
 			descuento = subTotal*5/100;
 		}
 	}

 	total = subTotal-descuento;

 	//Ejercicio E
 	if(total>120)
 	{
 		recargo = total*10/100;
 	}

	totalConImpuestos = total+recargo;

 		// document.getElementById('precioDescuento').value = total;
 		document.getElementById('precioDescuento').value = totalConImpuestos;
	 	console.log("subTotal: "+subTotal);
	 	console.log("descuento: "+descuento);
	 	console.log("total: "+total);
	 	console.log("total con imputos "+totalConImpuestos)
	 	console.log("IIBB Usted pago "+recargo)
}//fin funcion
