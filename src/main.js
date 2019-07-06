// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 // 引用axios，并设置基础URL为后端服务api地址
// const axios = require('axios');
// axios.defaults.baseURL = 'http://music.taihe.com/data/music/fmlink?songIds=16002642&type=flac'
// 将API方法绑定到全局
// Vue.prototype.$axios = axios;
import axios from 'axios';
Vue.prototype.$axios=axios;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import '@/assets/iconfont.css'
import '@/assets/iconfont.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
