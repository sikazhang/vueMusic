// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
Vue.config.productionTip = false
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
fastclick.attach(document.body)//手机端下面的点击都没有300hs延迟
/* eslint-disable no-new */


Vue.use(VueLazyLoad,{
	loading:require('common/image/default.png')
})
new Vue({
  el: '#app',
  render:h=>h(App),
  store,
  router

})
