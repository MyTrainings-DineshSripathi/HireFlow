import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  optimizeDeps: {
    exclude: [
      '@radix-ui/react-alert-dialog',
      'react-remove-scroll',
      'react-remove-scroll-bar',
      'react-style-singleton',
      'use-sidecar'
    ]
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      tslib: fileURLToPath(
        new URL('./node_modules/tslib/tslib.es6.js', import.meta.url)
      )
    }
  }
})
