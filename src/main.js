import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n'
import zh from './lang/zh.json'
import en from './lang/en.json'

const app = createApp(App)

// 預設使用的語系
let locale = ''
switch(new URL(window.location.href).searchParams.get('lang')?.toUpperCase()) {
  case 'EN':
    locale = 'en';
    break;
  default:
    locale = 'zh';
    break; 
}
localStorage.setItem('lang', locale);

const i18n = createI18n({
  legacy: false,
  locale: locale,
  messages: {
    'zh': zh,
    'en': en
  }
});

app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
