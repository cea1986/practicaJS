// Arrays o arreglos

// definimos o creamos un arreglo de forma literal

let arreglo = [];

// crear o definir un array con datos de forma literal

let series = ['Naruto' , 'Juegos de tronos' , 4 , 5 , true]

console.log(series); 

// crar o definir un array vacio usando el constructor de arrays

let array = new Array();

console.log(array);

// crear o definir un array con datos usando el construtor de arrays

let array2 = new Array(1,5,4,3);

console.log(array2);

// cantidad de elementos del arreglo

let array3 = [1,2,3]

console.log(array3.length);

// obtener o mostrar un elemento del array

console.log(array3[0]);

// obtener el ultimo elemento del array

console.log(array3[array3.length - 1]);

//reasignar el valor a un determinado elemento del array

array3[0] = 4;

console.log(array3);

array3[5] = 'hola';

console.log(array3);

console.log(array3.length);

// agregar uno o varios elementos al final o en la ultima posicion del array

array3.push('chau');

console.log(array3);

//eliminar o sacar del arreglo el ultimo elemento

array3.pop();

console.log(array3);

//agregar elementos en la primera posicion

array3.unshift('martes')

console.log(array3);

//eliminar o sacar el elmento de la primera posicion

array3.shift();

console.log(array3);

//agregar elementos en una determinada posicion

array3.splice(3,0,5)

console.log(array3);

//eliminar elementos en una deterinada posicion

array3.splice(4,2)

console.log(array3);

//eliminar todos los elementos desde una determinada posicion

array3.splice(1);

console.log(array3);

//agregar elementos en una determinada posicion

array3.splice(1, 0, 3,2,1)

console.log(array3);

//agragar elementos en una determinada posicion sin modificar el array original

let newArray3 = array3.toSpliced(4, 0, 6, 7)

console.log(newArray3);

//seleccionar elementos de un array

console.log(array3.slice(1,4));

//recorrer y/o mostrar los elementos del array

for(let i = 0; i < array3.length; i++){
    console.log(array3[i]);
}

//recorrer y/o mostrar los elementos del array usando for..of

for(let elemento of array3){
    console.log(elemento);
}

// recorrer y/o mostrar los caracteres de un string usando for..of

let word = 'palabra'

for(let letter of word){
    console.log(letter);
}

// operador spread o spread operator

console.log(...array3);

console.log(...word);

//dado un arreglo de edades encontrar el mayor

let edades = ['45','12', '25', '83']

console.log(Math.max(...edades));

//encontrar el minimo

console.log(Math.min(...edades));

//clonar un array

console.log([...array3]);

//concatenar o unir 2 o mas arrays usando spread operator

let vocales = ['a', 'e' , 'i' , 'o' , 'u'];

console.log(...edades , ...vocales);

//concatenar o unir arrays

console.log(array3.concat(vocales));

// convertir array a string

// convertir string a array

//indexOf

//includes

/* console.log(word); */




