/* 
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */

let num = prompt('Ingrese un numero');


if (num % 2 == 0) {
    document.write (num + " " + 'es divisible en 2');
} else { (num % 2 !== 0)
    document.write(num + " " + 'no es divisible en 2');
}