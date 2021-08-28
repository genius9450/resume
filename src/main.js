import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import VueI18n from 'vue-i18n';  // 引入 Vue I18n
import zh from './lang/zh.json';      // 存放中文語系檔
import en from './lang/en.json';      // 存放英文語系檔

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)

// 預設使用的語系
let locale = '';
let url = new URL(window.location.href);
switch(url.pathname.toUpperCase()) {
  case '/EN':
    locale = 'en';
    break;
  default:
    locale = 'zh';
    break; 
}
localStorage.setItem('lang', locale);

const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh': zh,
    'en': en
  }
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
