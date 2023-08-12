// Switch: se usan por ejemplo para reemplazar if else anidados
// varias opciones o casos para elegir

// estructura switch

/* 
 switch(opcion){
    case 1:
           // todo lo que quiero que se ajecute para ese caso
     break;
    case 2:
           // todo lo que quiero que se ejecute para ese caso
     break;
     ...
     ...
     ...
     
     default:
            // codigo que se ejecuta por defecto    
     
 }
*/
// Permitir que el usuario elija su estacion del año favorita
// por ejemplo: 1-verano, 2-otoño, 3-invierno, 4-primavera

let estacion = prompt(
  "Ingrese su estacion del año favorita, por ejemplo 1-verano, 2-otoño, 3-invierno, 4-primavera"
);


// toLowerCase() toma mayusculas y minusculas en forma indistinta para que ingrese el usuario la opcion al escribir


switch (estacion.toLowerCase()) {
  case "1":
  case "verano":
    document.write("Su estacion favorita es verano");
    break;
  case "2":
  case "otoño":
    document.write("Su estacion favorita es otoño");
    break;
  case "3":
  case "invierno":
    document.write("Su estacion favorita es invierno");
    break;
  case "4":
  case "primavera":
    document.write("Su estacion favorita es primevera");
    break;
  
   default:
          alert('Ingrese una opcion correcta') 
}
