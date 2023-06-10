

const personas = [
    { nombre: "Juan", apellido: "Jumbo" },
    { nombre: "Xavier", apellido: "Jumbo" },
    { nombre: "Pepe", apellido: "Jumbo" },
    { nombre: "Carlos", apellido: "Jumbo" },
    { nombre: "David", apellido: "Jumbo" },
    { nombre: "Edison", apellido: "Jumbo" },
    { nombre: "Luis", apellido: "Jumbo" },
    { nombre: "Dennis", apellido: "Jumbo" },
    { nombre: "Paul", apellido: "Jumbo" },
    { nombre: "Erick", apellido: "Jumbo" }
]

console.log(personas)

const app = Vue.createApp({
    data() {
        return {
            miarreglo: personas,
            nombre: 'Juan'
        }
    },
    methods: {
        agregarEstudiante(event) {
            console.log('Vamos agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if (event.charCode == '13') {
                console.log('presione enter')
                const nuevoEstudiante = {
                    nombre: this.nombre,
                    apellido: 'Nuevo Apellido'
                }

                // unshit para el inicio
                // push para el inicial
                this.miarreglo.unshift(nuevoEstudiante)
            } else {
                console.log('No es enter')
            }
        },

        agregarEstudiante2(event) {
            console.log('Vamos agregar')
            const nuevoEstudiante = {
                nombre: this.nombre,
                apellido: 'Nuevo Apellido'
            }
            this.miarreglo.unshift(nuevoEstudiante)
        },


    }

})


app.mount('#myApp2')

//function insertarEstudiante({nombre, apellido}){
//}