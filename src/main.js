import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入axios模块
import axios from 'axios'
import myRouter from './router'

Vue.config.productionTip = false

// 使用vueRouter
Vue.use(VueRouter);

// 实例VueRouter(路由)
const router = new VueRouter({
  // 去除URL中的#
  mode: "history",
  routes:
    myRouter
})

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

// 配置vue原型  (在任何组件中都可以使用全局的axios请求)
Vue.prototype.$axios = axios;

// 封装自定义全局指令(无参数)
// 创建指令Vue.directive(名称，对象(具体的执行内容))
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})

// 封装自定义全局指令(有参数)
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "500px"
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = '20px'
    }
  }
})

// 自定义全局过滤器
// Vue.filter("to-uppercase", value => {
//   return value.toUpperCase();
// })

// 自定义全局过滤器（博客内容: 只显示100个字符剩下的显示...）
Vue.filter("snipppet", value => {
  return value.slice(1, 100) + "..."
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
