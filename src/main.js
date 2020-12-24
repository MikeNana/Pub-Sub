import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
// load element module library
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// register element module library
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
