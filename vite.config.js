import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: 'Weather-App-Vue3-Tailwind',
  plugins: [vue()],
})
