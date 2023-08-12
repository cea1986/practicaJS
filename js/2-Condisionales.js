// estructuras condicionales

// if

/* 
 if (condicion logica) {

  codigo a ejecutarse cuando sea true

}

*/

let numero = 8;

let number = '8';

// comparacion estricta => da false en ese ejemplo porque compara valor y tipo de dato
if (numero === number) {
    console.log('son iguales');
}

// comparacion no estricta => da true en ese ejemplo porque compara valor solamente
if (numero == number) {
    console.log('son iguales');
}


let saludo = 'hola'
let despedida = 'chau'

if(saludo !== despedida){
    console.log ('son distintos mensajes');

} else {
    console.log ('son el mismo mensaje');
}


let edadPablo = 45;
let edadMarcos = 20;
let edadMaria = 10;

if (edadPablo > edadMarcos && edadPablo > edadMaria){
    document.write('Pablo es el mayor');
 } else if (edadMarcos > edadPablo > edadMaria) {
    document.write('Marcos es el mayor');
 } else {(edadMaria > edadMarcos > edadPablo)
    document.write ('Maria es la mayor');
 }

 

