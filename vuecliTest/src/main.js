// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(axios)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
