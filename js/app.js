console.log("Componente vue");
console.log(Vue);

//Todo ese lemento pasa al control de Vue
//Option API
const app = Vue.createApp({
    
    //template: `
    //<h1>HOLA MUNDO</h1>
    //<p>Desde Vue.JS</p>`

    //Opcion del Optio                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  n API quye me permite declarar propiedades
    //reactiva vinculando informacion de la vista con mi programacion js
    data(){
        return {
            nombre:'Juan',
            apellido:'Jumbo',
            mensaje:'Hola mundo 2 desde Vue.JS'
        }
    },

    //Opcion de metodos: permite declarar metodos js
    methods:{
        cambiarNombre(){
            console.log('boton cambiar nombre')
            //siempre this para utilizar la propiedad reactiva en js
            this.nombre = 'David'
        },
        cambiarApellido(){
            console.log('boton cambiar apellido')
            this.apellido = 'Telo'
        }
    }

})


app.mount('#myApp1')