import i18next from 'i18next';

const translations = {
  ar: {
    translation: {
      nav: {
        brand: 'صيانة غسالات جدة',
        services: 'خدماتنا',
        brands: 'العلامات التجارية',
        brandsDropdown: {
          samsung: 'صيانة غسالات سامسونج',
          lg: 'صيانة غسالات ال جي',
          toshiba: 'صيانة غسالات توشيبا',
          hitachi: 'صيانة غسالات هيتاشي'
        },
        whyUs: 'لماذا نحن',
        blog: 'المدونة',
        contact: 'اتصل بنا',
        whatsappBtn: 'واتساب'
      },
      hero: {
        title: 'صيانة غسالات جدة - خدمة سريعة واحترافية',
        subtitle: 'فني غسالات محترف لإصلاح وتصليح جميع أنواع الغسالات الاتوماتيك | متاح 24 ساعة',
        callNow: 'اتصل الآن',
        whatsapp: 'تواصل عبر واتساب'
      },
      whyUs: {
        title: 'لماذا يثق بنا سكان جدة',
        fastResponse: 'استجابة سريعة',
        fastResponseDesc: 'خدمة في نفس اليوم للحالات العاجلة',
        expertTechs: 'فنيون خبراء',
        expertTechsDesc: 'أكثر من 15 عاماً من الخبرة في صيانة الأجهزة المنزلية',
        affordablePricing: 'أسعار معقولة',
        affordablePricingDesc: 'أسعار شفافة بدون رسوم خفية'
      },
      services: {
        title: 'خدماتنا المتخصصة',
        acRepair: {
          title: 'صيانة وإصلاح المكيفات',
          desc: 'خدمات احترافية لجميع أنواع المكيفات',
          features: [
            'تنظيف وصيانة دورية',
            'إصلاح مشاكل التبريد',
            'شحن غاز التبريد',
            'تغيير قطع الغيار',
            'تركيب وفك المكيفات'
          ]
        },
        washingMachine: {
          title: 'إصلاح الغسالات الأوتوماتيكية',
          desc: 'حلول شاملة لجميع مشاكل الغسالات',
          features: [
            'إصلاح مشاكل عدم الدوران والتنشيف',
            'معالجة تسريبات المياه والصرف',
            'إصلاح مشاكل التشغيل والبرمجة',
            'تغيير قطع الغيار التالفة',
            'صيانة دورية وتنظيف شامل'
          ]
        }
      },
      contact: {
        title: 'تواصل معنا',
        locationTitle: 'موقعنا',
        form: {
          name: 'الاسم',
          phone: 'رقم الجوال',
          service: 'الخدمة المطلوبة',
          selectService: 'اختر الخدمة',
          message: 'الرسالة',
          submit: 'إرسال الطلب'
        }
      },
      viewOnMap: 'عرض على الخريطة',
      blog: {
        header: {
          title: 'نصائح خبراء صيانة الأجهزة في جدة',
          subtitle: 'دليلك الشامل لصيانة المكيفات والغسالات - خدمة سريعة متاحة على مدار الساعة'
        },
        title: 'مدونة صيانة الأجهزة المنزلية',
        subtitle: 'نصائح وإرشادات من خبراء الصيانة في جدة',
        backHome: 'العودة للرئيسية',
        cta: {
          title: 'هل تحتاج إلى خدمة صيانة؟',
          subtitle: 'اتصل بنا الآن للحصول على خدمة سريعة واحترافية'
        }
      },
      faq: {
        title: 'الأسئلة الشائعة'
      },
      serviceAreas: {
        title: 'مناطق خدماتنا في جدة'
      },
      testimonials: {
        title: 'آراء عملائنا'
      },
      footer: {
        contact: {
          title: 'معلومات الاتصال',
          phone: '+966567000317',
          whatsapp: '+966567000317',
          address: 'جدة، المملكة العربية السعودية'
        },
        hours: {
          title: 'ساعات العمل',
          schedule: 'نعمل 7 أيام في الأسبوع - 24 ساعة'
        },
        quickLinks: {
          title: 'روابط سريعة',
          services: 'خدماتنا',
          contact: 'اتصل بنا',
          blog: 'المدونة'
        },
        copyright: '© 2025 خدمات صيانة الأجهزة المنزلية. جميع الحقوق محفوظة'
      },
      brandPages: {
        backHome: 'العودة للرئيسية',
        callNow: 'اتصل الآن',
        whatsapp: 'واتساب',
        call: 'اتصل',
        samsung: {
          title: 'صيانة غسالات سامسونج جدة',
          subtitle: 'فني ومهندس وفنان غسالات سامسونج محترف',
          description: 'متخصصون في تصليح وإصلاح وصيانة جميع أنواع وموديلات غسالات سامسونج الاتوماتيك والفوق اتوماتيك في جدة. خدمة سريعة في نفس اليوم متاحة 24 ساعة.',
          servicesTitle: 'خدمات صيانة غسالات سامسونج المتخصصة',
          service1Title: 'فني تصليح غسالات سامسونج اتوماتيك',
          service1Desc: 'فني غسالات سامسونج محترف مدرب على أعلى مستوى لإصلاح جميع أعطال الغسالات السامسونج بسرعة وكفاءة عالية.',
          service2Title: 'مهندس غسالات سامسونج جدة',
          service2Desc: 'مهندس غسالات سامسونج معتمد ومتخصص في صيانة الأنظمة الإلكترونية والبرمجية المتقدمة لغسالات سامسونج الحديثة.',
          service3Title: 'فنان غسالات سامسونج محترف',
          service3Desc: 'فنان غسالات سامسونج جدة خبير في إصلاح جميع المشاكل الميكانيكية والكهربائية لجميع موديلات غسالات سامسونج.',
          service4Title: 'قطع غيار أصلية سامسونج',
          service4Desc: 'نستخدم فقط قطع غيار سامسونج الأصلية المعتمدة لضمان أفضل أداء وأطول عمر للغسالة.',
          problemsTitle: 'الأعطال الشائعة لغسالات سامسونج التي نصلحها',
          problem1: 'مشاكل الدوران والعصر والتنشيف في غسالات سامسونج',
          problem2: 'تسريبات المياه من غسالات سامسونج الاتوماتيك',
          problem3: 'مشاكل البرمجة والشاشة الرقمية',
          problem4: 'أعطال محرك الغسالة السامسونج',
          problem5: 'مشاكل الصرف والتعبئة',
          problem6: 'الضجيج والاهتزاز الزائد',
          problem7: 'مشاكل التسخين والتجفيف',
          problem8: 'أعطال لوحة التحكم الإلكترونية',
          ctaTitle: 'هل تحتاج إلى صيانة غسالة سامسونج الآن؟',
          ctaSubtitle: 'فريقنا المتخصص متاح 24/7 لخدمتك في جميع أنحاء جدة'
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        brand: 'Washing Machine Repair Jeddah',
        services: 'Our Services',
        brands: 'Brands',
        brandsDropdown: {
          samsung: 'Samsung Washing Machine Repair',
          lg: 'LG Washing Machine Repair',
          toshiba: 'Toshiba Washing Machine Repair',
          hitachi: 'Hitachi Washing Machine Repair'
        },
        whyUs: 'Why Us',
        blog: 'Blog',
        contact: 'Contact Us',
        whatsappBtn: 'WhatsApp'
      },
      hero: {
        title: 'Washing Machine Repair Jeddah - Fast & Professional Service',
        subtitle: 'Expert Technician for All Types of Automatic Washing Machines | Available 24/7',
        callNow: 'Call Now',
        whatsapp: 'Contact on WhatsApp'
      },
      whyUs: {
        title: 'Why Jeddah Residents Trust Us',
        fastResponse: 'Fast Response',
        fastResponseDesc: 'Same-day service for urgent repairs',
        expertTechs: 'Expert Technicians',
        expertTechsDesc: 'Over 15 years of experience in appliance maintenance',
        affordablePricing: 'Affordable Pricing',
        affordablePricingDesc: 'Transparent costs with no hidden fees'
      },
      services: {
        title: 'Our Specialized Services',
        acRepair: {
          title: 'AC Repair & Maintenance',
          desc: 'Professional services for all types of air conditioners',
          features: [
            'Regular cleaning and maintenance',
            'Cooling system repairs',
            'Refrigerant recharge',
            'Parts replacement',
            'AC installation and removal'
          ]
        },
        washingMachine: {
          title: 'Washing Machine Repair',
          desc: 'Comprehensive solutions for all washing machine problems',
          features: [
            'Spinning and drying issues',
            'Water leakage and drainage problems',
            'Operation and programming fixes',
            'Damaged parts replacement',
            'Regular maintenance and cleaning'
          ]
        }
      },
      contact: {
        title: 'Contact Us',
        locationTitle: 'Our Location',
        form: {
          name: 'Name',
          phone: 'Phone Number',
          service: 'Required Service',
          selectService: 'Select Service',
          message: 'Message',
          submit: 'Submit Request'
        }
      },
      viewOnMap: 'View on Map',
      blog: {
        header: {
          title: 'Expert Appliance Repair Tips in Jeddah',
          subtitle: 'Your Complete Guide to AC & Washing Machine Maintenance - Fast Service Available 24/7'
        },
        title: 'Home Appliance Repair Blog',
        subtitle: 'Tips and guides from maintenance experts in Jeddah',
        backHome: 'Back to Home',
        cta: {
          title: 'Need Maintenance Service?',
          subtitle: 'Call us now for fast and professional service'
        }
      },
      faq: {
        title: 'Frequently Asked Questions'
      },
      serviceAreas: {
        title: 'Our Service Areas in Jeddah'
      },
      testimonials: {
        title: 'Customer Reviews'
      },
      footer: {
        contact: {
          title: 'Contact Information',
          phone: '+966567000317',
          whatsapp: '+966567000317',
          address: 'Jeddah, Saudi Arabia'
        },
        hours: {
          title: 'Working Hours',
          schedule: 'Open 7 Days a Week - 24 Hours'
        },
        quickLinks: {
          title: 'Quick Links',
          services: 'Our Services',
          contact: 'Contact Us',
          blog: 'Blog'
        },
        copyright: '© 2025 Home Appliance Repair Services. All rights reserved'
      },
      brandPages: {
        backHome: 'Back to Home',
        callNow: 'Call Now',
        whatsapp: 'WhatsApp',
        call: 'Call',
        samsung: {
          title: 'Samsung Washing Machine Repair Jeddah',
          subtitle: 'Professional Samsung Washing Machine Technician & Engineer',
          description: 'Specialized in repairing and maintaining all types and models of Samsung automatic and semi-automatic washing machines in Jeddah. Fast same-day service available 24/7.',
          servicesTitle: 'Specialized Samsung Washing Machine Repair Services',
          service1Title: 'Samsung Automatic Washing Machine Technician',
          service1Desc: 'Professional Samsung washing machine technician trained to the highest standards to repair all Samsung washing machine problems quickly and efficiently.',
          service2Title: 'Samsung Washing Machine Engineer Jeddah',
          service2Desc: 'Certified Samsung washing machine engineer specialized in maintaining advanced electronic and software systems of modern Samsung washers.',
          service3Title: 'Professional Samsung Washing Machine Specialist',
          service3Desc: 'Samsung washing machine specialist in Jeddah, expert in repairing all mechanical and electrical problems for all Samsung washer models.',
          service4Title: 'Original Samsung Spare Parts',
          service4Desc: 'We only use original certified Samsung spare parts to ensure the best performance and longest lifespan for your washing machine.',
          problemsTitle: 'Common Samsung Washing Machine Problems We Fix',
          problem1: 'Spinning, squeezing, and drying issues in Samsung washers',
          problem2: 'Water leaks from Samsung automatic washing machines',
          problem3: 'Programming and digital display problems',
          problem4: 'Samsung washing machine motor failures',
          problem5: 'Drainage and filling issues',
          problem6: 'Excessive noise and vibration',
          problem7: 'Heating and drying problems',
          problem8: 'Electronic control panel failures',
          ctaTitle: 'Need Samsung Washing Machine Repair Now?',
          ctaSubtitle: 'Our specialized team is available 24/7 to serve you throughout Jeddah'
        }
      }
    }
  }
};

export const initI18n = () => {
  i18next.init({
    lng: 'ar',
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
};

export default i18next;
