import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        samsung: resolve(__dirname, 'samsung-washing-machine-repair.html'),
        lg: resolve(__dirname, 'lg-washing-machine-repair.html'),
        toshiba: resolve(__dirname, 'toshiba-washing-machine-repair.html'),
        hitachi: resolve(__dirname, 'hitachi-washing-machine-repair.html'),
        '404': resolve(__dirname, '404.html')
      }
    }
  }
})
