import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import scroll from 'vue-seamless-scroll'
import {vuePlugin} from 'castle-haozijunqaq-utils'
import VueCodemirror from 'vue-codemirror'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'codemirror/lib/codemirror.css'

//详见官方文档查看更多主题
import 'codemirror/theme/darcula.css'


import './api/axios/index'
import './components/registerComponent'
import directives from './assets/js/directives'
//注册指令
for (let key  in directives) {
      Vue.directive(key,directives[key])
}
Vue.use(vuePlugin)
Vue.use(ElementUI)
Vue.use(scroll)
Vue.use(VueCodemirror,{
    options: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'darcula',
        lineNumbers: true,
        line: true,
        readOnly: true
    }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
