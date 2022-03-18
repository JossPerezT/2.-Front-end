/*VARIABLES*/
console.log("\n **************VARIABLES**************\n");
var numero1 =4;
var numero2 = 6;
console.log("Número 1: " + numero1+ "\n Número 2: " + numero2);


/*CADENAS*/
console.log ("**************CADENAS**************");
var frase1 ="Ejemplo de comillas dobles";
var frase2 = 'Ejemplo de comillas simples';
var frase3 = `Ejemplo de comillas ${numero1} simples`; 
console.log (frase1 +"\n"+ frase2 + "\n" + frase3);


/*CONDICIONALES */
console.log ("**************CONDICIONALES**************");
console.log (numero1 != numero2);



/*OPERADORES LÓGICOS*/
console.log ("**************Operador AND ************** ");
console.log (true & true);
console.log("**************Operador OR **************");
console.log(false || false);



/*ARREGLOS*/
console.log("**************ARREGLOS**************");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log (listaDeNumeros);
console.log (listaDeNumeros[5]);

listaDeNumeros.push (16);
console.log(listaDeNumeros);
listaDeNumeros.push(939);
console.log(listaDeNumeros);

console.log(listaDeNumeros.length);


let listaDePalabras = ["Explorer", "MissionComander", "LaunchX", "Innovaccion"];
console.log (listaDePalabras);
console.log(listaDePalabras.length);



/*OBJETOS*/
console.log ("**************OBJETOS**************");

let explorer = {
    nombre: "Nombre del explorer",
    email: "email@innovaccion.mx",
    numReg: 12345 ,
    mision: "FrontEnd", 
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunación"],
    proPer: {
        escolar: "Tareas" ,
        profesional: "Trabajo" ,
        personal: "Negocio"
    }
} ;

console.log (explorer);
console.log (explorer.proPer);
console.log (explorer.proPer.escolar);



/*FLUJO CONDICIONAL*/
let number1 = 10;
let number2 = 9;
console.log ("**************IF/ELSE**************");
if (number1 > number2 && number2 > 5) {
    console.log ("El número 1 es mayor que número 2");
}
else if (number1 == number2 || number1 < 3) {
    console.log ("Los números son iguales");
}
else {
    console.log ("El número 2 es mayor que número 1");
}

/*CICLO CONDICIONAL*/
console.log ("**************WHILE**************");
let numberWhile = 5;
while (numberWhile <=12) {
    console.log (numberWhile);
    numberWhile = numberWhile+2;
}
console.log ("Aquí sale el while " + numberWhile);


/*CICLO CONDICIONAL DE UNA ITERACIPON MÍNIMO*/
console.log ("**************DO WHILE**************");

let numberDoWhile = 12;
do {
    numberDoWhile = numberDoWhile+2 ;
    console.log (numberDoWhile);
} 
while (numberDoWhile <= 21);
console.log("Aquí sale del Do While " +numberDoWhile);



/*CICLO FOR CON ITERACIÓN CONTROLADA*/
console.log ("**************FOR**************");

let numeroFor = 10;
for (numeroFor; numeroFor < 12; numeroFor = numeroFor + 1) {
    console.log (numeroFor);
}
console.log ("Aquí salimos del ciclo for " + numeroFor);



/*OPCIONES PARA EVITAR ANIDAR CONDICIONALES */
console.log ("**************SWITCH**************");

let dia;
dia = prompt ("¿Cómo esta el clima?")
switch (dia.toLowerCase()) {
    case "lluvioso":
        console.log ("No te vayas a mojar");
        break;
    case "soleado":
        console.log ("Llévate una sombrilla");
        break;
    case "nublado":
        console.log ("Tapate bien");
        break;
    default: 
        console.log ("No se como está el clima");
        break;
}
console.log ("Aquí salimos del Switch")