import Vue from 'vue'
import App from './App.vue'
import router from './router'
import compHeader from './components/header_footer/Header.vue'
import compPost from './components/Post.vue'



Vue.component('compHeader',compHeader)
Vue.component('compPost',compPost)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
