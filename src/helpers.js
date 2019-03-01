export function calcularTotal(cantidad,plazo){


   //Cantidades 
   //0 a 100 = 25%
   //1001 a 5000 = 20%
   //5001 a 10000= 15%
   //10000 = 10%

 let totalCantidad; 
  if(cantidad <= 1000){
      totalCantidad = cantidad * .25;
  }else if(cantidad > 1000 && cantidad <= 5000){
      totalCantidad = cantidad * .20;
      
  }else if(cantidad > 5000 && cantidad <= 10000){
    totalCantidad = cantidad * .15;

  }else{
      totalCantidad = cantidad * .10;

  }


   //meses
   //3 meses 5%
   //6=20%
//    12=15%
//    24=20%
let totalPlazo;
   switch(plazo){
       case 3:
       totalPlazo = cantidad * .05;
       break;
       case 6:
       totalPlazo = cantidad * .1;
       break;
       case 12:
       totalPlazo = cantidad * .15;
       break;
       case 24:
       totalPlazo = cantidad * .2;
       break;
       default:
       break;
   }
  return cantidad + totalPlazo + totalCantidad;

}