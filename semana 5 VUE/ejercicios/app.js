const app = Vue.createApp ({
    data() {
        return { //regresa un objeto. Estos son estados. Con : porque se regresa un objeto json por las llaves y da las propiedades necesarias 
          nombre: 'Jocelyn' ,
          apellido: 'Perez',
          email: 'jperez@innovaccion.mx',
          genero: 'female',
          foto: 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    },
    methods: {
        async cambiarUsuario () { //Se cambian los : por igual al pasarlos a metodos y porque = es para asignación. Se especifica que será asincrona 
            const res = await  fetch ('https://randomuser.me/api') ; // async indica que hasta ue resulva esta línea y tenga el res va a seguir y así sucesivamente 
            const {results } = await res.json(); // se declara en llaves porque será un objeto 
            console.log (results );

// la API es la forma en que se conecta a una BD
// se usa this para saber que vamos a cambiar esta en los estados 

            this.nombre =results[0].name.first;
            this.apellido = results[0].name.last;
            this.email = results[0].email;
            this.genero = results[0].gender;
            this.foto = results[0].picture.large;
        }
    }
})

app.mount ('#app'); //montamos la app en el div con el Id app