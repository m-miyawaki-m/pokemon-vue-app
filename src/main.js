import '@mdi/font/css/materialdesignicons.css'; // アイコン用フォント
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import App from './App.vue';
import router from './router';

// ✅ Pinia + persist を追加
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate) // ✅ persist機能を組み込み

app.use(pinia)       // ✅ Pinia を使う
app.use(router)      // ルーターを使う
app.use(vuetify)     // Vuetify を使う

app.mount('#app')    // アプリをマウント
