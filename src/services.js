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
            <img src="${image}" alt="${altText}" title="${title}" class="img-fluid rounded-3 shadow-lg mb-4 mb-lg-0" width="600" height="400" loading="lazy">
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
      washingMachine: {
        id: 'washing-machine',
        title: lang === 'ar' ? 'صيانة وتصليح غسالات اتوماتيك جدة - فني ومهندس غسالات محترف' : 'Washing Machine Repair Jeddah - Expert Technician & Engineer',
        description: lang === 'ar'
          ? 'فني ومهندس غسالات اتوماتيك محترف في جدة متخصص في صيانة وتصليح وإصلاح جميع أنواع الغسالات الاوتوماتيك والفوق اتوماتيك: صيانة غسالات سامسونج جدة، صيانة غسالات ال جي جدة، صيانة غسالات توشيبا فوق اتوماتيك جدة، صيانة غسالات هيتاشي جدة، صيانة غسالات بوش، ويرلبول، جنرال إلكتريك. خدمة سريعة في نفس اليوم، تركيب وصيانة غسالات اوتوماتيك، متاح 24 ساعة'
          : 'Professional washing machine technician and engineer in Jeddah specializing in automatic and semi-automatic washing machine repair: Samsung, LG, Toshiba, Hitachi, Bosch, Whirlpool, GE. Same-day service, installation & maintenance available 24/7',
        icon: 'bi-water',
        image: 'https://i.ibb.co/hxg9YW3N/image.png',
        features: lang === 'ar'
          ? [
              'فني تصليح غسالات اتوماتيك جدة - خدمة طوارئ فورية',
              'صيانة غسالات سامسونج جدة - مهندس وفنان غسالات سامسونج معتمد',
              'صيانة غسالات ال جي جدة - مهندس وفنان غسالات LG متخصص',
              'صيانة غسالات توشيبا فوق اتوماتيك جدة - رقم صيانة معتمد',
              'صيانة غسالات هيتاشي جدة - مهندس وفنان غسالات هيتاشي',
              'تركيب وصيانة غسالات اوتوماتيك - تركيب وأصلاح احترافي',
              'إصلاح مشاكل الدوران والتنشيف والعصر والتجفيف',
              'معالجة تسريبات المياه ومشاكل الصرف والفلاتر',
              'إصلاح مشاكل البرمجة والتشغيل الإلكتروني',
              'تغيير القطع التالفة بقطع غيار أصلية معتمدة',
              'صيانة جميع أنواع الغسالات اوتوماتيك والفوق اتوماتيك',
              'صيانة دورية وتنظيف شامل لجميع أنواع الغسالات'
            ]
          : [
              'Professional Automatic Washing Machine Technician - Emergency Service',
              'Samsung Washing Machine Repair Jeddah - Certified Engineer',
              'LG Washing Machine Maintenance Jeddah - Specialized Technician',
              'Toshiba Automatic Washing Machine Repair - Authorized Service',
              'Hitachi Washing Machine Repair - Expert Engineer & Technician',
              'Automatic Washing Machine Installation & Maintenance',
              'Spinning, Drying & Draining Issues Fixed',
              'Water Leakage & Drainage System Repairs',
              'Electronic Programming & Operation Problems',
              'Original Parts Replacement - Genuine Spare Parts',
              'All Types of Automatic & Semi-Automatic Washing Machines',
              'Regular Maintenance & Deep Cleaning Service'
            ]
      },
      ac: {
        id: 'ac-repair',
        title: lang === 'ar' ? 'صيانة وإصلاح مكيفات جدة - مهندس مكيفات محترف لجميع الأنواع' : 'AC Repair & Maintenance Jeddah - Professional AC Engineer',
        description: lang === 'ar'
          ? 'مهندس وفني مكيفات محترف في جدة متخصص في صيانة وتركيب وأصلاح جميع أنواع المكيفات: صيانة مكيفات اسبلت جدة، صيانة مكيفات شباك جدة، صيانة مكيفات مركزي جدة، صيانة مكيفات دكت جدة، صيانة مكيفات دلابي جدة، صيانة مكيفات بيكج جدة، تركيب وأصلاح مكيفات، صيانة وتركيب مركزي مكيفات جدة. خدمة طوارئ على مدار 24 ساعة'
          : 'Professional AC engineer and technician in Jeddah specializing in all types of air conditioning: Split AC, Window AC, Central AC, Ducted AC, Cassette AC, Package AC repair, installation, and maintenance. 24/7 emergency service available',
        icon: 'bi-snow',
        image: 'https://i.ibb.co/4gD4hNQQ/image.png',
        features: lang === 'ar'
          ? [
              'صيانة مكيفات اسبلت جدة - مهندس مكيفات اسبلت متخصص',
              'صيانة مكيفات شباك جدة - مهندس مكيفات شباك محترف',
              'صيانة مكيفات مركزي جدة - مهندس مكيفات مركزي معتمد',
              'صيانة مكيفات دكت جدة - مهندس وفنان مكيفات دكت',
              'صيانة مكيفات دلابي جدة - مهندس مكيفات دلابي متخصص',
              'صيانة مكيفات بيكج جدة - مهندس مكيفات بيكج محترف',
              'تركيب وأصلاح مكيفات جدة - خدمة تركيب احترافية',
              'صيانة وتركيب مركزي مكيفات - أنظمة مركزية متكاملة',
              'شحن وإعادة تعبئة غاز التبريد الفريون',
              'تنظيف وصيانة دورية شاملة للمكيفات',
              'إصلاح تسريبات غاز التبريد والأعطال الإلكترونية',
              'فحص وإصلاح الضواغط والمحركات والمراوح',
              'خدمة طوارئ مكيفات على مدار الساعة'
            ]
          : [
              'Split AC Repair Jeddah - Specialized Split AC Engineer',
              'Window AC Maintenance Jeddah - Professional Window AC Service',
              'Central AC Repair Jeddah - Certified Central AC Engineer',
              'Ducted AC Service Jeddah - Expert Ducted AC Technician',
              'Cassette AC Repair Jeddah - Specialized Cassette AC Engineer',
              'Package AC Maintenance Jeddah - Professional Package AC Service',
              'AC Installation & Repair - Professional Installation Service',
              'Central AC Installation & Maintenance - Complete Systems',
              'Refrigerant Gas Refilling & Recharging Service',
              'Comprehensive AC Cleaning & Regular Maintenance',
              'Refrigerant Leak Detection & Electronic Repairs',
              'Compressor, Motor & Fan Inspection & Repair',
              '24/7 Emergency AC Repair Service Available'
            ]
      },
      refrigerator: {
        id: 'refrigerator-repair',
        title: lang === 'ar' ? 'صيانة ثلاجات جدة - مهندس وفني ثلاجات الكتروني محترف' : 'Refrigerator Repair Jeddah - Professional Refrigerator Engineer',
        description: lang === 'ar'
          ? 'مهندس وفني ثلاجات الكتروني محترف في جدة متخصص في صيانة وإصلاح جميع أنواع الثلاجات والفريزرات: صيانة ثلاجات ال جي الكتروني جدة، صيانة ثلاجات سامسونج، صيانة ثلاجات توشيبا، صيانة ثلاجات هيتاشي، مركز للتبريد تكيف ثلاجات جدة. افضل مهندس ومركز للتبريد والتكييف والثلاجات في جدة. خدمة سريعة متاحة 24 ساعة'
          : 'Professional refrigerator engineer and electronic technician in Jeddah specializing in all types of refrigerators and freezers: LG, Samsung, Toshiba, Hitachi. Best refrigerator technician and cooling center in Jeddah. Fast service available 24/7',
        icon: 'bi-snow2',
        image: '/images/image copy copy copy copy.png',
        features: lang === 'ar'
          ? [
              'صيانة ثلاجات الكتروني جدة - مهندس ثلاجات الكتروني معتمد',
              'صيانة ثلاجات ال جي الكتروني جدة - فنان ومهندس متخصص',
              'افضل مهندس ثلاجات الكتروني جدة - خبرة أكثر من 15 عام',
              'مركز للتبريد تكيف ثلاجات جدة - افضل مركز معتمد',
              'إصلاح مشاكل التبريد وعدم التبريد الكافي',
              'معالجة تسريبات المياه والغاز من الثلاجات',
              'إصلاح الأعطال الإلكترونية والكهربائية',
              'تغيير الضواغط والثرموستات والمحركات',
              'صيانة جميع أنواع الثلاجات والفريزرات',
              'شحن غاز الفريون وإصلاح دوائر التبريد',
              'تنظيف وصيانة دورية شاملة للثلاجات',
              'خدمة طوارئ على مدار 24 ساعة'
            ]
          : [
              'Electronic Refrigerator Repair Jeddah - Certified Engineer',
              'LG Electronic Refrigerator Maintenance - Specialized Technician',
              'Best Refrigerator Technician Jeddah - 15+ Years Experience',
              'Cooling & Refrigeration Center Jeddah - Authorized Center',
              'Cooling Problems & Insufficient Cooling Repairs',
              'Water & Gas Leakage Fixes for Refrigerators',
              'Electronic & Electrical Fault Repairs',
              'Compressor, Thermostat & Motor Replacement',
              'All Types of Refrigerators & Freezers Service',
              'Refrigerant Gas Refilling & Cooling Circuit Repairs',
              'Comprehensive Cleaning & Regular Maintenance',
              '24/7 Emergency Refrigerator Repair Service'
            ]
      }
    };

    container.innerHTML = `
      ${createServiceCard(services.washingMachine, lang)}
      ${createServiceCard(services.ac, lang)}
      ${createServiceCard(services.refrigerator, lang)}
    `;
  };

  updateServices();
  i18next.on('languageChanged', updateServices);
};
