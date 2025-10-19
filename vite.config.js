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
        '404': resolve(__dirname, '404.html'),
        // Arabic blog posts
        blogAr1: resolve(__dirname, 'مدونة/حل-مشكلة-عدم-تصريف-الماء-من-الغسالة.html'),
        blogAr2: resolve(__dirname, 'مدونة/أسباب-توقف-الغسالة-عن-العمل-فجأة.html'),
        blogAr3: resolve(__dirname, 'مدونة/تنظيف-الغسالة-الأوتوماتيك-من-الروائح.html'),
        blogAr4: resolve(__dirname, 'مدونة/مقارنة-غسالات-سامسونج-ال-جي-بوش.html'),
        blogAr5: resolve(__dirname, 'مدونة/أفضل-أوقات-تنظيف-المكيفات-جدة.html'),
        blogAr6: resolve(__dirname, 'مدونة/متى-تحتاج-غسالتك-صيانة-دورية.html'),
        blogAr7: resolve(__dirname, 'مدونة/لماذا-المكيف-يعمل-ولا-يبرد.html'),
        blogAr8: resolve(__dirname, 'مدونة/تكلفة-شحن-غاز-المكيف-جدة.html'),
        blogAr9: resolve(__dirname, 'مدونة/تنظيف-المكيف-بنفسك-خطوة-بخطوة.html'),
        blogAr10: resolve(__dirname, 'مدونة/تخفيض-فاتورة-الكهرباء-من-المكيف.html'),
        // English blog posts
        blogEn1: resolve(__dirname, 'blog/complete-guide-ac-maintenance-jeddah-summer.html'),
        blogEn2: resolve(__dirname, 'blog/extend-washing-machine-life-expert-tips.html'),
        blogEn3: resolve(__dirname, 'blog/importance-ac-gas-refilling-when-to-do-it.html'),
        blogEn4: resolve(__dirname, 'blog/common-washing-machine-problems-saudi-homes.html'),
        blogEn5: resolve(__dirname, 'blog/best-times-clean-ac-jeddah.html')
      }
    }
  }
})
