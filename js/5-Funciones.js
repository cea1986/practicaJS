// declarar una funcion
/* 

function nombreDeFuncion(){
    codigo a ejecutar
}

*/

function holaMundo() {
    console.log('Hola mundo, como estas?'); 
}
// invocar, ejecutar, llamar a una funcion

holaMundo()

//funciones con parametros

/* 
function nombreDeFuncion(parametro1, parametro2) {
    codigo a ejecutar usando los parametros
}

*/

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}, como estas?`);
}
saludar('Eduardo' , 'Arias')

//funciones para que nos returnen un valor valor

function convertirDolaresPesos(dolares) {
    let pesos = dolares * 600;
    return pesos
}

let precioCelular = convertirDolaresPesos(100)
console.log(precioCelular);

console.log(`el precio de la pay 5 es ${convertirDolaresPesos(800)}`)

// ejemplo de funcion con parametros y return   

function sumarValores(valor1, valor2) {
    if (typeof valor1 !== 'number') {
        
    } else {
        
    }
    return `${valor1} + ${valor2} = ${valor1 + valor2}`
};
console.log(sumarValores(8,2));

console.log(sumarValores(4, 'chau'));

//funciones flechas o Arrows Function: son funciones anonimas
// se las puede definir asignandolas a varibles de tipo let o const
// pero lo mas comun sera definirlas con const
// let se usaria si quiero reasignarle su valor por gral se usa const

/* 

const nombreFuncion = () => {
    codigo a ejecutar
}

*/

//Permiten obviar en algunos casos las {} y el return

/* const sumar = (num1, num2) => {
    return num1 + num2
} */

const sumar = (num1, num2) => num1 + num2

console.log(sumar(8,5));

// Una diferencia con las tradicionales es que no se pueden invocar  antes de su inicializacion

//Scope (alcance):
// Las variables dentro de un bloque de codigo {} nacen y mueren ahi

let heroe = 'Batman'

function mostrarHeroe(){
    let heroe = 'Superman'
    console.log(heroe);

    return `Bienvenido ${heroe}`
}

