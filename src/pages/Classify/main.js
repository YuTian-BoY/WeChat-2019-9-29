// 引入vue
import Vue from 'vue'
// 引入index
import Index from './index.vue'
// 实例化Vue对象
const app = new Vue(Index)
// 挂载
app.$mount() // 相当于小程序在的pages({})
