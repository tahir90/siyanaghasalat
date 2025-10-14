import i18next from 'i18next';

const translations = {
  ar: {
    translation: {
      hero: {
        title: 'إصلاح سريع وموثوق للأجهزة المنزلية في جدة!',
        subtitle: 'فنيون متخصصون في إصلاح الغسالات الأوتوماتيكية والمكيفات',
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
        copyright: '© 2023 خدمات صيانة الأجهزة المنزلية. جميع الحقوق محفوظة'
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: 'Fast & Reliable Home Appliance Repairs in Jeddah!',
        subtitle: 'Expert Technicians for Washing Machines and Air Conditioners',
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
        copyright: '© 2023 Home Appliance Repair Services. All rights reserved'
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
