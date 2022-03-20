// como buscar el valor

const fetchPokemon = () => {
    const pokeName = document.getElementById ("pokeName"); //va a leer el html y buscara el ID que decimos
    let pokeInput = pokeName.value.toLowerCase(); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then ((res) => {
        if (res.status !=  "200") { // se usa la condicional para manejrar errores: status 200 quiere decir que esta bien la petición
            console.log (res);
            pokeImage("./img/pikachuTriste.png")
        }
        else { 
            return res.json ();
        }
    }).then((data) => {
        console.log (data)
        let pokeImg = data.sprites.front_default;
        console.log (pokeImg)
        pokeImage (pokeImg);
    })
} 

//fetchPokemon();

// como hacer que el boton interactúe (mandar a llamar la funcion en el buttom)

// como agarrar el valor del input
/*const imprimir = ()=> {
    const pokeName = document.getElementById ("pokeName"); //va a leer el html y buscara el ID que decimos
    let pokeInput = pokeName.value; 
    console.log ("Hola " +pokeInput)
} 
ESTA YA NO NOS SIRVE PORQUE LA PASAMOS ARRIBA */


//funcion que cambie la imagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById ("pokeImg");
    pokeImg.src = url; 

}









