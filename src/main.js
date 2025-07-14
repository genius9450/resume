import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css';
import i18n from './lang' // 從新檔案匯入

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.use(i18n)

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;

  // 驗證語言參數
  if (['en', 'zh'].includes(lang)) {
    i18n.global.locale.value = lang;
    return next();
  }

  // 如果語言參數無效或缺失，則重定向到預設的中文頁面
  return next('/zh/index');
});

app.mount('#app')
