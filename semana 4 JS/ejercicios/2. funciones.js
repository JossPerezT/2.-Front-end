/* FUNCIONES 
Las funciones nos permiten sacar un bloque de código y llamarla en otros lados. 
No va a aimportar en que parte del código se encuentre. 
 */

// COMO DECLARAR/ LLAMAR

//***********Estas funciones primero se definen y luego se mandan a llamar */

/* Requiere un  parámetro en la X */
const cuadrado = function (x) {
    return x * x;
}

console.log (cuadrado (12));


/**
 No tiene para meter el parámetro 
 */
const ruido = function () {
    console.log ("kataplum!");
}

ruido (); //Así se mandan a llamar. Al no tener nada más que hacer, se sae y sigue leyendo el código.


/*  FUNCIONEN DONDE SE LE MANDAN MÁS DE 1 PARÁMETRO*/
const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i= 0; i < exponente; i++){ //Esto es para hacer funcional el exponecnial, que siga multiplicando hasta que llegue a exponencial correspondiente. 
        resultado *= base;
    }
    return resultado;
}

console.log (exponencial (4,2))


//***********Se pueden poner abajo las funciones. NO importa donde esten en el código*/


/* FUNCIÓN DE SUMAR */
console.log (sumar (5, 65));
function sumar (x, y) { //otra forma de declarar funciones 
    return x + y;
}


/*  */
const restar = (a,b) => { //arrow function =>
    return a-b;
}

console.log (restar (40, 8));


/**/

function saludar (quien) {
    console.log ("Hola " + quien);
    return; //es para que salgas de la función 
}
saludar ("Explorer");
console.log ("Bye");





/* EXCEPCIONES 
Cuando un programa funciona continuamente, puede pasar algo que no estemos preparados.
Para tener y usar los errores del programa y que el programa siga funcionando.*/


function preguntaDireccion (pregunta) {
    let result = prompt (pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase () == "derecha") return "D";
    throw new Error ("Dirección inválida: " + result); //para regresar un error *throw* 
}

function mirar () {
    if (preguntaDireccion ("A que lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos";
        }
    }



/*Esto funciona como un IF/ELSE, el try es para cuando todo se ejecuta bien, el catch es cuando hay un errror*/
// Es para entrar a la excepciones. Es como una cajita de protección del programa, va a intentar encontrar el throw al no funcionar.
try {  
    console.log ("Mira a ", mirar());
} catch (error) { 
    console.log ("Hubo un error: " + error); 
/*EL try manda a llamar a la funcion mirar "A que lado":
si se cumplen con lo acordado (izq, der) seguirá en try e imprimirá el resultado,
si no cumplen con los resultados pactados, el catch lo va a reconocer, leera e imprimirá este error 
se puede volver a meter el "console.log ("Mira a ", mirar());" en el cath para que vuelvas a intentarlo pero no es lo mas común*/






}
// Asicrono 
setTimeout(() => console.log ("Tick"), 500);
let fiften = Promise.resolve (15);
fiften.then (value => console.log(`Got ${value}`));

const promesa = () => 
    new Promise ((resolve,reject) =>
        setTimeout (
            () => (resolve(console.log ('Todo cool')), reject (new Error ('oops'))), 
            2000
        )
    )

/*

async function main () {
    promesa ()
        .then (() => {
            promesa ()
                .then (() => console.log ('hola')) 
                .catch ((err)=> console.error (err))
        })
        .catch ((err) => console.error (err))
await promesa ();
console.log ("Aquí termina la primera promesa");
await promesa ();
console.log ("Aquí termina la segunda promesa");
}

main (); */