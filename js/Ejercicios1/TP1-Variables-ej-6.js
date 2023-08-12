/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande */

let number = prompt ('Ingrese un numero')

let otherNumber = prompt ('Ingrese otro numero')

if (number > otherNumber) {
    document.write(number + " " + 'es el mayor');
} else {
    document.write(otherNumber + " " + 'es el mayor');
}