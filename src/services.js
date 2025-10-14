import i18next from './i18n.js';

const createServiceCard = (service, lang) => {
  const { title, description, features, icon, image, id } = service;

  return `
    <section id="${id}" class="service-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 ${id === 'washing-machine' ? 'order-lg-2' : ''}">
            <img src="${image}" alt="${title}" class="img-fluid rounded-3 shadow-lg mb-4 mb-lg-0">
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
        image: 'https://images.pexels.com/photos/7641881/pexels-photo-7641881.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        title: lang === 'ar' ? 'إصلاح الغسالات الأوتوماتيكية في جدة' : 'Expert Washing Machine Repair in Jeddah',
        description: lang === 'ar'
          ? 'خدمات صيانة وإصلاح احترافية لجميع أنواع الغسالات الأوتوماتيك'
          : 'Professional repair services for all types of automatic washing machines',
        icon: 'bi-water',
        image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: lang === 'ar'
          ? [
              'إصلاح مشاكل الدوران والتنشيف',
              'معالجة تسريبات المياه',
              'إصلاح مشاكل البرمجة',
              'تغيير القطع التالفة',
              'صيانة دورية شاملة'
            ]
          : [
              'Spinning and Drying Issues',
              'Water Leakage Repairs',
              'Programming Issues',
              'Parts Replacement',
              'Regular Maintenance'
            ]
      }
    };

    container.innerHTML = `
      ${createServiceCard(services.ac, lang)}
      ${createServiceCard(services.washingMachine, lang)}
    `;
  };

  updateServices();
  i18next.on('languageChanged', updateServices);
};
