/* 
document.write('Elemento 1 <br>')
document.write('Elemento 2 <br>')
document.write('Elemento 3 <br>')
document.write('Elemento 4 <br>')
document.write('Elemento 5 <br>')
document.write('Elemento 6 <br>')
*/

//Bucles

// while

/* 
while (condicion logica) {
  codigo a ejecutar mientras se cumpla la condicion
  variable p/ cambiar la condicion logica
}
 */

let contador = 1;

while (contador <= 20){
    document.write('Elemento' + contador + '<br>')
    //contador = contador+1
    contador++

    // (contador = contador+1)  es igual a colocar (contador++)
}

/* 
     do{
        codigo a ejecutar al menos una vez y mientras la condicion variable p/ cambiar la condicion logica
     } while (condicion logica)
*/

let cont = 50;
// let cont = 19;

do {
    // codigo a ejecutar
    document.write('Elemento' + cont + '<br>')
    // contador = contador -1
    cont--
} while (cont >= 20);

// for

/* 
  for (definir una variable; condicion logica; incremental o decremental){
    codigo a ejecutar tantas veces como se cumpla la condicion
    se usa el siguiente simbolo ( ; ) para separar variable y la condicion logica 
}
*/

for(let i = 1; i <= 20; i++){
    document.write('Estructura for vuelta' + i + '<br>')
}

// strings son iterables, es decir que pueden recorrer caracter a caracter

// recorrer el string usando un bucle 

let verduras = 'lechugas y tomates';

// para saber la cantidad de caracteres de un string
console.log(verduras.length);

for(let c = 0; c < verduras.length; c++){
    document.write(verduras.charAt (c) + ' <br>')
}

