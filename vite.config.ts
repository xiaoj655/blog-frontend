import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
const commonConfig = {
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
}

export default defineConfig(({command, mode})=>{
  const env = loadEnv(mode, process.cwd())
  if(mode === 'development'){
    return {
      ...commonConfig,
      server: {
        port: 5173,
        proxy: {
          '/api': {
            target: env.VITE_API_HOST,
            changeOrigin: true
          }
        }
      }
    }
  }else {
    return {
      ...commonConfig
    }
  }
})
