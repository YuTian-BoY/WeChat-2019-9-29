// 引入vue
import Vue from 'vue'
// 引入App
import App from './app.vue'
// 浏览器在的控制台中的提示相关信息
// Vue.config.productionTip = false
// 设置当前的程序类型App
App.mpType = 'app'
// 实例化当前的Vue对象
const app = new Vue(App)
// 挂载整个程序
app.$mount()
