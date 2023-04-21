import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import envCompatible from 'vite-plugin-env-compatible';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.VITE_APP_COMPONENT_TYPE);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), envCompatible()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': process.env,
  },
})
