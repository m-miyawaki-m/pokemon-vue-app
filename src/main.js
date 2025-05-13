// main.js または main.ts
import '@mdi/font/css/materialdesignicons.css'; // ← アイコン用フォント
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'; // ✅ これを追加

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .use(router) // ✅ ルーターを登録
  .mount('#app')
