/* 
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
 */

let num1 = prompt("Ingrese el primer numero");

let num2 = prompt("Ingrese el segundo numero");

let num3 = prompt("Ingrese el tercer numero");

if (num1 > num2 && num1 > num3) {
  document.write(num1 + " " + "es el mayor");
} else if (num2 > num1 && num2 > num3) {
  document.write(num2 + " " + "es el mayor");
} else { (num3 > num2 > num1)
  document.write(num3 + " " + "es el mayor");
}
