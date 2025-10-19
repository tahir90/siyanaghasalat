import i18next from 'i18next';

const translations = {
  ar: {
    translation: {
      nav: {
        brand: 'صيانة غسالات جدة',
        services: 'خدماتنا',
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
      }
    }
  },
  en: {
    translation: {
      nav: {
        brand: 'Washing Machine Repair Jeddah',
        services: 'Our Services',
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
