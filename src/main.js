import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('real', function(valor)  {
  return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
})

new Vue({
  render: h => h(App),
}).$mount('#app')
