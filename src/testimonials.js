import i18next from './i18n.js';

const testimonialsData = {
  ar: [
    {
      name: 'أحمد السعدي',
      location: 'الروضة، جدة',
      rating: 5,
      text: 'فني تصليح غسالات محترف جداً! صلح غسالتي السامسونج في نفس اليوم. خدمة ممتازة وسعر مناسب. أنصح الجميع بالتعامل معهم.',
      service: 'صيانة غسالات سامسونج'
    },
    {
      name: 'فاطمة العمري',
      location: 'الحمراء، جدة',
      rating: 5,
      text: 'افضل مهندس مكيفات في جدة! صلح المكيف الاسبلت بسرعة وكفاءة. الخدمة متاحة 24 ساعة وهذا شيء رائع. شكراً جزيلاً.',
      service: 'صيانة مكيفات اسبلت'
    },
    {
      name: 'خالد المطيري',
      location: 'الزهراء، جدة',
      rating: 5,
      text: 'صيانة غسالات ال جي جدة - خدمة احترافية من مهندس متخصص. غسالتي كانت تسرب ماء وتم إصلاحها بشكل ممتاز. سعر معقول جداً.',
      service: 'صيانة غسالات ال جي'
    },
    {
      name: 'سارة الزهراني',
      location: 'السلامة، جدة',
      rating: 5,
      text: 'افضل مركز للتبريد تكيف ثلاجات في جدة! مهندس ثلاجات الكتروني محترف. صلح ثلاجتي LG بسرعة وبكفاءة عالية. أنصح بشدة!',
      service: 'صيانة ثلاجات الكتروني'
    },
    {
      name: 'محمد الغامدي',
      location: 'النعيم، جدة',
      rating: 5,
      text: 'صيانة غسالات توشيبا فوق اتوماتيك جدة - خدمة ممتازة! الفني جاء في نفس اليوم وصلح العطل بسرعة. أسعار منافسة وخدمة راقية.',
      service: 'صيانة غسالات توشيبا'
    },
    {
      name: 'نورة القحطاني',
      location: 'المرجان، جدة',
      rating: 5,
      text: 'مهندس مكيفات مركزي محترف جداً! تركيب وصيانة وأصلاح مكيفات مركزية بكفاءة عالية. الخدمة سريعة والأسعار معقولة. ممتازون!',
      service: 'صيانة مكيفات مركزي'
    }
  ],
  en: [
    {
      name: 'Ahmed Al-Saadi',
      location: 'Al-Rawdah, Jeddah',
      rating: 5,
      text: 'Very professional washing machine technician! Fixed my Samsung washer the same day. Excellent service and reasonable price. Highly recommend!',
      service: 'Samsung Washing Machine Repair'
    },
    {
      name: 'Fatima Al-Omari',
      location: 'Al-Hamra, Jeddah',
      rating: 5,
      text: 'Best AC engineer in Jeddah! Fixed the split AC quickly and efficiently. 24/7 service availability is amazing. Thank you very much!',
      service: 'Split AC Repair'
    },
    {
      name: 'Khaled Al-Mutairi',
      location: 'Al-Zahra, Jeddah',
      rating: 5,
      text: 'LG washing machine maintenance Jeddah - professional service from a specialized engineer. My washer was leaking and it was fixed perfectly. Very reasonable price.',
      service: 'LG Washing Machine Repair'
    },
    {
      name: 'Sarah Al-Zahrani',
      location: 'Al-Salamah, Jeddah',
      rating: 5,
      text: 'Best cooling and refrigeration center in Jeddah! Professional electronic refrigerator engineer. Fixed my LG fridge quickly and with high efficiency. Strongly recommend!',
      service: 'Electronic Refrigerator Repair'
    },
    {
      name: 'Mohammed Al-Ghamdi',
      location: 'Al-Naeem, Jeddah',
      rating: 5,
      text: 'Toshiba automatic washing machine repair Jeddah - excellent service! The technician came the same day and fixed the problem quickly. Competitive prices and premium service.',
      service: 'Toshiba Washing Machine Repair'
    },
    {
      name: 'Noura Al-Qahtani',
      location: 'Al-Marjan, Jeddah',
      rating: 5,
      text: 'Very professional central AC engineer! Installation, maintenance and repair of central AC with high efficiency. Fast service and reasonable prices. Excellent!',
      service: 'Central AC Maintenance'
    }
  ]
};

export const renderTestimonials = () => {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  const updateTestimonials = () => {
    const lang = i18next.language;
    const testimonials = testimonialsData[lang] || testimonialsData.ar;

    container.innerHTML = testimonials.map(testimonial => `
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px; font-size: 1.5rem;">
                ${testimonial.name.charAt(0)}
              </div>
              <div>
                <h5 class="mb-0">${testimonial.name}</h5>
                <small class="text-muted">${testimonial.location}</small>
              </div>
            </div>
            <div class="mb-3">
              ${Array(testimonial.rating).fill('<i class="bi bi-star-fill text-warning"></i>').join('')}
            </div>
            <p class="card-text mb-3">${testimonial.text}</p>
            <span class="badge bg-success">${testimonial.service}</span>
          </div>
        </div>
      </div>
    `).join('');
  };

  updateTestimonials();
  i18next.on('languageChanged', updateTestimonials);
};

export const getReviewSchema = () => {
  const testimonials = testimonialsData.ar;

  return testimonials.map(testimonial => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": "5"
    },
    "reviewBody": testimonial.text,
    "itemReviewed": {
      "@type": "Service",
      "name": testimonial.service
    }
  }));
};
