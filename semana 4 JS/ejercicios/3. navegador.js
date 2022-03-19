// Encontrar elementos de HTML
const titulo = document.getElementById ("titulo");
const parrafo = document.getElementsByTagName ("p");
const links = document.getElementsByClassName("links");



//Cambiar valores de HTML
titulo.innerHTML = "Titulo cambiado";

document.getElementById("demo").innerHTML = 'The text in fisrt patagraph (inedex 0) is: ' +parrafo[0].innerHTML;
links [0].href = "google.com"; 


// Cambiar estilos 
titulo.style.color = "red"



//Eventos 

function cambiarTexto (obj) {
    IDBObjectStore.innerHTML = "Texto clickeado"
}

function mOver(obj){
    obj.innerHTML = "Mouse over now"
}

function mOut(obj) {
    obj.innerHTML= "Mouse Out"
}

function mDown (obj){
    obj.style.bacgroundcolor = "#1ec5e5"; 
    obj.innerHTML = "sueltame";
}

function mUp(obj) {
    obj.style.bacgroundcolor="#D94A38";
    obj.innerHTML="gracias";
}

//addEventListener
const boton = document.getElementById ("boton");
boton.addEventListener("click", alerta)

function alerta () {
    alert("alerta")
}