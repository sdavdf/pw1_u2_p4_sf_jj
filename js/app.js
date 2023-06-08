console.log("Componente vue");
console.log(Vue);



const app = Vue.createApp({
    //opcion1,
    //opcion2,
    //opcion3,

    template: `
    <h1>HOLA MUNDO</h1>
    <p>Desde Vue.JS</p>

    `
})


app.mount('#myApp1')