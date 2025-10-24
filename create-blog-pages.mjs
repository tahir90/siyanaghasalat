import fs from 'fs';
import path from 'path';

// Blog post metadata and slugs
const blogMeta = {
  ar: [
    { id: 1, slug: 'حل-مشكلة-عدم-تصريف-الماء-من-الغسالة', title: 'حل مشكلة عدم تصريف الماء من الغسالة', date: '2025-10-18', category: 'صيانة الغسالات' },
    { id: 2, slug: 'أسباب-توقف-الغسالة-عن-العمل-فجأة', title: 'أسباب توقف الغسالة عن العمل فجأة وكيفية إصلاحها', date: '2025-10-16', category: 'صيانة الغسالات' },
    { id: 3, slug: 'تنظيف-الغسالة-الأوتوماتيك-من-الروائح', title: 'كيفية تنظيف الغسالة الأوتوماتيك من الروائح الكريهة', date: '2025-10-14', category: 'صيانة الغسالات' },
    { id: 4, slug: 'مقارنة-غسالات-سامسونج-ال-جي-بوش', title: 'مقارنة غسالات سامسونج وال جي وبوش - أيهما الأفضل؟', date: '2025-10-12', category: 'صيانة الغسالات' },
    { id: 5, slug: 'أفضل-أوقات-تنظيف-المكيفات-جدة', title: 'أفضل أوقات تنظيف المكيفات في جدة', date: '2025-10-08', category: 'صيانة المكيفات' },
    { id: 6, slug: 'متى-تحتاج-غسالتك-صيانة-دورية', title: 'متى تحتاج غسالتك إلى صيانة دورية؟ - جدول الصيانة الشامل', date: '2025-10-06', category: 'صيانة الغسالات' },
    { id: 7, slug: 'لماذا-المكيف-يعمل-ولا-يبرد', title: 'لماذا المكيف يعمل ولا يبرد؟ - أسباب وحلول', date: '2025-10-04', category: 'صيانة المكيفات' },
    { id: 8, slug: 'تكلفة-شحن-غاز-المكيف-جدة', title: 'كم يكلف شحن غاز المكيف في جدة؟ - دليل الأسعار 2025', date: '2025-10-03', category: 'صيانة المكيفات' },
    { id: 9, slug: 'تنظيف-المكيف-بنفسك-خطوة-بخطوة', title: 'تنظيف المكيف بنفسك خطوة بخطوة - دليل DIY', date: '2025-10-02', category: 'صيانة المكيفات' },
    { id: 10, slug: 'تخفيض-فاتورة-الكهرباء-من-المكيف', title: 'كيف تخفض فاتورة الكهرباء من المكيف؟ - 15 نصيحة عملية', date: '2025-09-30', category: 'صيانة المكيفات' }
  ],
  en: [
    { id: 1, slug: 'complete-guide-ac-maintenance-jeddah-summer', title: 'Complete Guide to AC Maintenance in Jeddah During Summer', date: '2025-10-05', category: 'AC Maintenance' },
    { id: 2, slug: 'extend-washing-machine-life-expert-tips', title: 'How to Extend Your Washing Machine Life: Expert Tips', date: '2025-10-03', category: 'Washing Machine Care' },
    { id: 3, slug: 'importance-ac-gas-refilling-when-to-do-it', title: 'Importance of AC Gas Refilling and When to Do It', date: '2025-10-01', category: 'AC Maintenance' },
    { id: 4, slug: 'common-washing-machine-problems-saudi-homes', title: 'Common Washing Machine Problems in Saudi Homes', date: '2025-09-28', category: 'Washing Machine Repair' },
    { id: 5, slug: 'best-times-clean-ac-jeddah', title: 'Best Times to Clean Your AC in Jeddah', date: '2025-09-26', category: 'AC Maintenance' }
  ]
};

function createBlogHTML(lang, postMeta) {
  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';
  const folderName = isArabic ? 'مدونة' : 'blog';
  const canonicalUrl = `https://sianaghasalat.com/${folderName}/${postMeta.slug}.html`;

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${postMeta.title} | صيانة غسالات جدة</title>
    <meta name="description" content="${postMeta.title} - دليل شامل من خبراء الصيانة في جدة">
    <meta name="keywords" content="${postMeta.category}, صيانة غسالات جدة, صيانة مكيفات جدة">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Open Graph -->
    <meta property="og:title" content="${postMeta.title}">
    <meta property="og:description" content="${postMeta.title}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="https://sianaghasalat.com/images/washingmachinerepair.jpg">
    <meta property="og:locale" content="${isArabic ? 'ar_SA' : 'en_US'}">
    <meta property="article:published_time" content="${postMeta.date}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${postMeta.title}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/src/style.css">

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {'send_page_view': false});
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${postMeta.title}",
      "datePublished": "${postMeta.date}",
      "author": {"@type": "Organization", "name": "صيانة غسالات جدة"},
      "publisher": {
        "@type": "Organization",
        "name": "صيانة غسالات جدة",
        "logo": {"@type": "ImageObject", "url": "https://sianaghasalat.com/favicon.svg"}
      }
    }
    </script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/" onclick="trackEvent('Navigation', 'Logo Click', 'Header')">
                <i class="bi bi-tools me-2"></i>صيانة غسالات جدة
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="/" onclick="trackEvent('Navigation', 'Home', 'Header')">الرئيسية</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#services" onclick="trackEvent('Navigation', 'Services', 'Header')">الخدمات</a></li>
                    <li class="nav-item"><a class="nav-link active" href="/blog.html" onclick="trackEvent('Navigation', 'Blog', 'Header')">المدونة</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#contact" onclick="trackEvent('Navigation', 'Contact', 'Header')">اتصل بنا</a></li>
                </ul>
                <!-- CTA Buttons in Header - Always Visible -->
                <div class="d-flex gap-2 ms-3">
                    <a href="tel:+966503753966" class="btn btn-primary" onclick="trackConversion('Phone', 'Header')">
                        <i class="bi bi-telephone-fill me-1"></i>
                        <span class="d-none d-lg-inline">اتصل الآن</span>
                    </a>
                    <a href="https://wa.me/966503753966" class="btn btn-success" onclick="trackConversion('WhatsApp', 'Header')">
                        <i class="bi bi-whatsapp me-1"></i>
                        <span class="d-none d-lg-inline">واتساب</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="container my-5">
        <article id="blogPost${postMeta.id}">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">الرئيسية</a></li>
                            <li class="breadcrumb-item"><a href="/blog.html">المدونة</a></li>
                            <li class="breadcrumb-item active">${postMeta.title}</li>
                        </ol>
                    </nav>

                    <header class="mb-4">
                        <span class="badge bg-primary mb-2">${postMeta.category}</span>
                        <h1 class="display-5 fw-bold mb-3">${postMeta.title}</h1>
                        <div class="text-muted"><i class="bi bi-calendar3 me-2"></i>${postMeta.date}</div>
                    </header>

                    <img src="/images/washingmachinerepair.jpg" alt="${postMeta.title}" class="img-fluid rounded mb-4 w-100" style="max-height: 400px; object-fit: cover;">

                    <div id="blogContent" class="blog-content">
                        <p>جاري تحميل المحتوى...</p>
                    </div>

                    <div class="mt-5 p-4 bg-light rounded">
                        <h3 class="h5 mb-3">هل تحتاج مساعدة فنية؟</h3>
                        <p>فريقنا المتخصص متاح 24/7 لخدمتك في جدة</p>
                        <div class="d-flex gap-2 flex-wrap">
                            <a href="tel:+966503753966" class="btn btn-primary" onclick="trackConversion('Phone', 'Blog Post')">
                                <i class="bi bi-telephone-fill me-2"></i>اتصل الآن: 0503753966
                            </a>
                            <a href="https://wa.me/966503753966" class="btn btn-success" onclick="trackConversion('WhatsApp', 'Blog Post')">
                                <i class="bi bi-whatsapp me-2"></i>واتساب
                            </a>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="/blog.html" class="btn btn-outline-primary" onclick="trackEvent('Navigation', 'Back to Blog', 'Blog Post')">
                            <i class="bi bi-arrow-right me-2"></i>العودة للمدونة
                        </a>
                    </div>
                </div>
            </div>
        </article>
    </main>

    <footer class="footer bg-dark text-light py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-4">معلومات الاتصال</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="bi bi-telephone-fill me-2"></i>
                            <a href="tel:+966503753966" class="text-light text-decoration-none" onclick="trackConversion('Phone', 'Footer')">0503753966</a>
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-whatsapp me-2"></i>
                            <a href="https://wa.me/966503753966" class="text-light text-decoration-none" onclick="trackConversion('WhatsApp', 'Footer')">واتساب</a>
                        </li>
                        <li><i class="bi bi-geo-alt-fill me-2"></i>جدة، المملكة العربية السعودية</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-4">روابط سريعة</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="/" class="text-light text-decoration-none" onclick="trackEvent('Footer', 'Home', 'Links')">الرئيسية</a></li>
                        <li class="mb-2"><a href="/#services" class="text-light text-decoration-none" onclick="trackEvent('Footer', 'Services', 'Links')">خدماتنا</a></li>
                        <li class="mb-2"><a href="/blog.html" class="text-light text-decoration-none" onclick="trackEvent('Footer', 'Blog', 'Links')">المدونة</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-top border-secondary mt-4 pt-4">
                <p class="text-center mb-0">© 2025 صيانة غسالات جدة. جميع الحقوق محفوظة</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script type="module">
      import { initAnalytics, trackScrollDepth, trackTimeOnPage, trackEvent, trackConversion } from '/src/analytics.js';
      import { blogPosts } from '/src/blog.js';

      // Make functions global for onclick handlers
      window.trackEvent = trackEvent;
      window.trackConversion = trackConversion;

      // Load blog content
      const postId = ${postMeta.id};
      const lang = '${lang}';
      const post = blogPosts[lang].find(p => p.id === postId);

      if (post) {
        document.getElementById('blogContent').innerHTML = post.content;
      }

      // Initialize analytics
      initAnalytics();
      trackScrollDepth();
      trackTimeOnPage();
    </script>
</body>
</html>`;
}

// Create directories
const dirs = ['مدونة', 'blog'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate Arabic blog pages
console.log('Creating Arabic blog pages...');
blogMeta.ar.forEach(post => {
  const html = createBlogHTML('ar', post);
  const filePath = path.join('مدونة', `${post.slug}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✓ Created: ${filePath}`);
});

// Generate English blog pages
console.log('\nCreating English blog pages...');
blogMeta.en.forEach(post => {
  const html = createBlogHTML('en', post);
  const filePath = path.join('blog', `${post.slug}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✓ Created: ${filePath}`);
});

console.log(`\n✅ Successfully created ${blogMeta.ar.length + blogMeta.en.length} blog pages!`);
