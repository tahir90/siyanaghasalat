import { blogPosts } from './src/blog.js';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// SEO-friendly URL slugs for each blog post
const blogSlugs = {
  ar: {
    1: 'حل-مشكلة-عدم-تصريف-الماء-من-الغسالة',
    2: 'أسباب-توقف-الغسالة-عن-العمل-فجأة',
    3: 'تنظيف-الغسالة-الأوتوماتيك-من-الروائح',
    4: 'مقارنة-غسالات-سامسونج-ال-جي-بوش',
    5: 'أفضل-أوقات-تنظيف-المكيفات-جدة',
    6: 'متى-تحتاج-غسالتك-صيانة-دورية',
    7: 'لماذا-المكيف-يعمل-ولا-يبرد',
    8: 'تكلفة-شحن-غاز-المكيف-جدة',
    9: 'تنظيف-المكيف-بنفسك-خطوة-بخطوة',
    10: 'تخفيض-فاتورة-الكهرباء-من-المكيف'
  },
  en: {
    1: 'complete-guide-ac-maintenance-jeddah',
    2: 'extend-washing-machine-life-tips',
    3: 'ac-gas-refilling-guide',
    4: 'common-washing-machine-problems-saudi',
    5: 'best-times-clean-ac-jeddah'
  }
};

// Helper function to create blog page HTML
function createBlogPageHTML(post, slug, lang) {
  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';
  const alternateUrl = isArabic ? '/blog/' : '/مدونة/';
  const canonicalUrl = `https://sianaghasalat.com/${isArabic ? 'مدونة' : 'blog'}/${slug}.html`;

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | صيانة غسالات جدة</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="keywords" content="${post.category}, صيانة غسالات جدة, صيانة مكيفات جدة">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="https://sianaghasalat.com${post.image}">
    <meta property="og:locale" content="${isArabic ? 'ar_SA' : 'en_US'}">
    <meta property="article:published_time" content="${post.date}">
    <meta property="article:section" content="${post.category}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="https://sianaghasalat.com${post.image}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/src/style.css">

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        'page_title': '${post.title}',
        'page_location': window.location.href,
        'page_referrer': document.referrer
      });
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "description": "${post.excerpt}",
      "image": "https://sianaghasalat.com${post.image}",
      "datePublished": "${post.date}",
      "author": {
        "@type": "Organization",
        "name": "صيانة غسالات جدة"
      },
      "publisher": {
        "@type": "Organization",
        "name": "صيانة غسالات جدة",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sianaghasalat.com/favicon.svg"
        }
      }
    }
    </script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/" onclick="trackEvent('Navigation', 'Logo Click', 'Header')">
                <i class="bi bi-tools me-2"></i>
                صيانة غسالات جدة
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/" onclick="trackEvent('Navigation', 'Home Click', 'Header')">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#services" onclick="trackEvent('Navigation', 'Services Click', 'Header')">الخدمات</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/blog.html" onclick="trackEvent('Navigation', 'Blog Click', 'Header')">المدونة</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#contact" onclick="trackEvent('Navigation', 'Contact Click', 'Header')">اتصل بنا</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container my-5">
        <article>
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/" onclick="trackEvent('Breadcrumb', 'Home Click', 'Blog Post')">الرئيسية</a></li>
                            <li class="breadcrumb-item"><a href="/blog.html" onclick="trackEvent('Breadcrumb', 'Blog Click', 'Blog Post')">المدونة</a></li>
                            <li class="breadcrumb-item active">${post.title}</li>
                        </ol>
                    </nav>

                    <header class="mb-4">
                        <span class="badge bg-primary mb-2">${post.category}</span>
                        <h1 class="display-5 fw-bold mb-3">${post.title}</h1>
                        <div class="text-muted">
                            <i class="bi bi-calendar3 me-2"></i>${post.date}
                        </div>
                    </header>

                    ${post.image ? `<img src="${post.image}" alt="${post.title}" class="img-fluid rounded mb-4 w-100" style="max-height: 400px; object-fit: cover;">` : ''}

                    <div class="blog-content">
                        ${post.content}
                    </div>

                    <div class="mt-5 p-4 bg-light rounded">
                        <h3 class="h5 mb-3">هل تحتاج مساعدة فنية؟</h3>
                        <p>فريقنا المتخصص متاح 24/7 لخدمتك في جدة</p>
                        <div class="d-flex gap-2 flex-wrap">
                            <a href="tel:+966567000317" class="btn btn-primary" onclick="trackConversion('Phone', 'Blog Post')">
                                <i class="bi bi-telephone-fill me-2"></i>اتصل الآن: 0567000317
                            </a>
                            <a href="https://wa.me/966567000317" class="btn btn-success" onclick="trackConversion('WhatsApp', 'Blog Post')">
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
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">معلومات الاتصال</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="bi bi-telephone-fill me-2"></i>
                            <a href="tel:+966567000317" class="text-light text-decoration-none" onclick="trackConversion('Phone', 'Footer')">
                                +966567000317
                            </a>
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-whatsapp me-2"></i>
                            <a href="https://wa.me/966567000317" class="text-light text-decoration-none" onclick="trackConversion('WhatsApp', 'Footer')">
                                +966567000317
                            </a>
                        </li>
                        <li>
                            <i class="bi bi-geo-alt-fill me-2"></i>
                            جدة، المملكة العربية السعودية
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">روابط سريعة</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="/" class="text-light text-decoration-none" onclick="trackEvent('Footer', 'Home Click', 'Footer Links')">الرئيسية</a>
                        </li>
                        <li class="mb-2">
                            <a href="/#services" class="text-light text-decoration-none" onclick="trackEvent('Footer', 'Services Click', 'Footer Links')">خدماتنا</a>
                        </li>
                        <li class="mb-2">
                            <a href="/blog.html" class="text-light text-decoration-none" onclick="trackEvent('Footer', 'Blog Click', 'Footer Links')">المدونة</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-top border-secondary mt-4 pt-4">
                <p class="text-center mb-0">© 2025 صيانة غسالات جدة. جميع الحقوق محفوظة</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
      // Google Analytics Event Tracking
      function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
          gtag('event', action, {
            'event_category': category,
            'event_label': label
          });
        }
      }

      // Track Conversion Events (Phone & WhatsApp)
      function trackConversion(type, location) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion', {
            'event_category': 'Lead',
            'event_label': type + ' - ' + location,
            'value': 1
          });
          gtag('event', 'generate_lead', {
            'currency': 'SAR',
            'value': 100
          });
        }
      }

      // Track Traffic Source on Page Load
      (function() {
        const params = new URLSearchParams(window.location.search);
        const referrer = document.referrer;
        const utmSource = params.get('utm_source');
        const utmMedium = params.get('utm_medium');
        const utmCampaign = params.get('utm_campaign');

        if (typeof gtag !== 'undefined') {
          // Track UTM parameters if present
          if (utmSource || utmMedium || utmCampaign) {
            gtag('event', 'utm_tracking', {
              'utm_source': utmSource || 'none',
              'utm_medium': utmMedium || 'none',
              'utm_campaign': utmCampaign || 'none'
            });
          }

          // Track referrer
          if (referrer) {
            gtag('event', 'page_referrer', {
              'referrer': referrer
            });
          }

          // Track landing page
          gtag('event', 'landing_page', {
            'page_location': window.location.href,
            'page_path': window.location.pathname
          });
        }
      })();
    </script>
</body>
</html>`;
}

console.log('Generating blog pages...');

// Generate Arabic blog pages
blogPosts.ar.forEach(post => {
  const slug = blogSlugs.ar[post.id];
  if (slug) {
    const html = createBlogPageHTML(post, slug, 'ar');
    mkdirSync('مدونة', { recursive: true });
    writeFileSync(join('مدونة', `${slug}.html`), html);
    console.log(`Created: مدونة/${slug}.html`);
  }
});

// Generate English blog pages
if (blogPosts.en) {
  blogPosts.en.forEach(post => {
    const slug = blogSlugs.en[post.id];
    if (slug) {
      const html = createBlogPageHTML(post, slug, 'en');
      mkdirSync('blog', { recursive: true });
      writeFileSync(join('blog', `${slug}.html`), html);
      console.log(`Created: blog/${slug}.html`);
    }
  });
}

console.log('Blog pages generated successfully!');
