console.log("hola mundo");

// comentario de una linea --> aqui sigue el comentario

/*
comentario de una o
varias 
lineas

aqui continua el comentario
*/

// mostrar mensajes en el documento

document.write("hola mundo");

// definicion de varialble (asignacion, inicializacion)

let numero = 8 // el signo = se llama operador de asignacion

console.log(numero);

let numero2 = 10

console.log(numero2);

numero2 = numero; // re asignado el valor de una variable

console.log(numero2);

//al definir una variable no usen caracteres especiales (@, ñ, -, no use espacio)

let anio = 2023;

// ejemplo de como colocar año pasado

let anioPasado = 2022;

let anio_pasado = 2022;

// ejemplo de como colocar año siguiente    

let anioSiguiente = 2024;

let anio_siguiente = 2024;

// constantes

const palabra = "hola" // las constantes son inmutables es decir no se puede reasignar otro valor

console.log(palabra);

// palabra = "chau"

console.log(palabra);

// scope: el ambito donde vale una variable

// var numero = 25; (no se usa mas var porque interfiere con scope que es el ambito donde vale una variable)

// Tipo de datos

// Tipo string

// Defino un string

let stringVacio = ""

let numberString = "8"

let numeroString = "10"

console.log(numberString);

console.log(numeroString);

document.write (numberString + numeroString) //cuando se trata de strings el signo + se llama concatenacon  // concatenar es unir

document.write('<br>' + numberString + " " + numeroString);

//Tipo number

let num = 10

let number = 20

console.log(number + num); // en el caso de number el signo + es operador de suma

// Tipo booleano

let verdadero = true;

let falso = false;

console.log(!verdadero); //el signo ! operador de negacion

let comision = "66i"

document.write ("<br>Comision" + '' + comision)

// mostrar un cartel al usuario

alert ('Mensaje de alerta');




