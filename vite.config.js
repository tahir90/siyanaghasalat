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
        samsungAr: resolve(__dirname, 'صيانة-غسالات-سامسونج-جدة.html'),
        lgAr: resolve(__dirname, 'صيانة-غسالات-ال-جي-جدة.html'),
        toshibaAr: resolve(__dirname, 'صيانة-غسالات-توشيبا-جدة.html'),
        hitachiAr: resolve(__dirname, 'صيانة-غسالات-هيتاشي-جدة.html'),
        '404': resolve(__dirname, '404.html')
      }
    }
  }
})
