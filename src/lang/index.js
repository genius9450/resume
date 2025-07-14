import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import en from './en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh', // 固定預設值，實際語言由路由守衛控制
  fallbackLocale: 'zh',
  messages: {
    'zh': zh,
    'en': en
  }
});

export default i18n;
