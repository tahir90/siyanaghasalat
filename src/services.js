import i18next from './i18n.js';

const createServiceCard = (service, lang) => {
  const { title, description, features, icon, image, id } = service;

  const altText = id === 'washing-machine'
    ? (lang === 'ar' ? 'صيانة غسالات جدة - تصليح غسالات اتوماتيك' : 'Washing Machine Repair Jeddah')
    : (lang === 'ar' ? 'صيانة مكيفات جدة' : 'AC Repair Jeddah');

  return `
    <section id="${id}" class="service-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 ${id === 'washing-machine' ? 'order-lg-2' : ''}">
            <img src="${image}" alt="${altText}" title="${title}" class="img-fluid rounded-3 shadow-lg mb-4 mb-lg-0" loading="lazy">
          </div>
          <div class="col-lg-6 ${id === 'washing-machine' ? 'order-lg-1' : ''}">
            <h2 class="h1 mb-4">${title}</h2>
            <p class="lead mb-4">${description}</p>
            <div class="service-features">
              ${features.map(feature => `
                <div class="feature-item mb-3">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>
                  <span>${feature}</span>
                </div>
              `).join('')}
            </div>
            <div class="cta-buttons mt-4">
              <a href="https://wa.me/966567000317" class="btn btn-success btn-lg me-3">
                <i class="bi bi-whatsapp me-2"></i>
                ${lang === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
              </a>
              <a href="tel:+966567000317" class="btn btn-primary btn-lg">
                <i class="bi bi-telephone-fill me-2"></i>
                ${lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

export const renderServices = () => {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  const updateServices = () => {
    const lang = i18next.language;

    const services = {
      ac: {
        id: 'ac-repair',
        title: lang === 'ar' ? 'صيانة وإصلاح المكيفات في جدة' : 'Professional AC Repair Services in Jeddah',
        description: lang === 'ar'
          ? 'خدمات صيانة وإصلاح احترافية لجميع أنواع المكيفات مع ضمان الجودة'
          : 'Expert AC repair and maintenance services for all types of air conditioners with quality guarantee',
        icon: 'bi-snow',
        image: 'https://i.ibb.co/4gD4hNQQ/image.png',
        features: lang === 'ar'
          ? [
              'خدمة طوارئ على مدار 24 ساعة',
              'صيانة وتنظيف المكيفات السبليت',
              'إصلاح تسريبات غاز التبريد',
              'تركيب وفك المكيفات',
              'صيانة دورية شاملة'
            ]
          : [
              '24/7 Emergency AC Repair Service',
              'Split AC Maintenance & Cleaning',
              'Refrigerant Leak Repair',
              'AC Installation & Removal',
              'Comprehensive Maintenance'
            ]
      },
      washingMachine: {
        id: 'washing-machine',
        title: lang === 'ar' ? 'صيانة غسالات جدة - تصليح وإصلاح الغسالات الاتوماتيك' : 'Washing Machine Repair Jeddah - Expert Service',
        description: lang === 'ar'
          ? 'فني غسالات محترف في جدة لصيانة وتصليح جميع أنواع الغسالات الاتوماتيك: سامسونج، ال جي، بوش، ويرلبول. خدمة سريعة في نفس اليوم متاحة 24 ساعة'
          : 'Professional washing machine technician in Jeddah for all brands: Samsung, LG, Bosch, Whirlpool. Same-day service available 24/7',
        icon: 'bi-water',
        image: 'https://i.ibb.co/hxg9YW3N/image.png',
        features: lang === 'ar'
          ? [
              'صيانة غسالات اتوماتيك فورية',
              'إصلاح مشاكل الدوران والتنشيف والعصر',
              'معالجة تسريبات المياه والصرف',
              'تصليح غسالات سامسونج وال جي وبوش',
              'إصلاح مشاكل البرمجة والتشغيل',
              'تغيير القطع التالفة بقطع أصلية',
              'صيانة دورية وتنظيف شامل للغسالات'
            ]
          : [
              'Instant Automatic Washing Machine Repair',
              'Spinning, Drying & Draining Issues',
              'Water Leakage & Drainage Repairs',
              'Samsung, LG & Bosch Washing Machine Repair',
              'Programming & Operation Issues',
              'Original Parts Replacement',
              'Regular Maintenance & Deep Cleaning'
            ]
      }
    };

    container.innerHTML = `
      ${createServiceCard(services.washingMachine, lang)}
      ${createServiceCard(services.ac, lang)}
    `;
  };

  updateServices();
  i18next.on('languageChanged', updateServices);
};
