import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/pokemon-vue-app/', // ← 必ず追加！
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
})
