import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    sourcemap:true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './AppButton': './src/components/AppButton.vue',
      },
      shared: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
