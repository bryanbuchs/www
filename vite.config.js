import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import browserslist from 'browserslist-to-esbuild'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    target: browserslist(),
    // Make sure Vite knows where to find your entry points
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js')
      }
    }
  }
})
