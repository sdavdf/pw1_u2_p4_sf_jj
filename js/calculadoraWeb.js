const app = Vue.createApp({
  data() {
      return {
  
      }
  },

  methods: {
    entrada(valor){
      var result = document.getElementById('resultado');
      result.value += valor;
    },

    limpiarEntrada(){
      var result = document.getElementById('resultado')
      result.value = ''
    },

    calculoResultado() {
      var result = document.getElementById('resultado');
      var expTemp = result.value
      
      var resultFinal = eval(expTemp);
      result.value = resultFinal;
   
  }

  }
})


app.mount('#myAppCalculadora')
 