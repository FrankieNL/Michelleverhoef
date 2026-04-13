import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: '/',
  publicDir: 'Public',
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main:        resolve(__dirname, 'index.html'),
        enquete:     resolve(__dirname, 'enquete.html'),
        privacy:     resolve(__dirname, 'privacy.html'),
        voorwaarden: resolve(__dirname, 'algemene-voorwaarden.html'),
      },
    },
  },
})
