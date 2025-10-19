import i18next from './i18n.js';

const faqData = {
  ar: [
    {
      question: 'كم تكلفة صيانة الغسالات في جدة؟',
      answer: 'تختلف تكلفة صيانة الغسالات حسب نوع العطل والقطع المطلوب تغييرها. نحن نقدم فحص مجاني وتسعير شفاف قبل بدء أي عمل. اتصل بنا على +966567000317 للحصول على عرض سعر فوري.'
    },
    {
      question: 'هل تصلحون جميع أنواع الغسالات الاتوماتيك؟',
      answer: 'نعم، نحن متخصصون في صيانة وتصليح جميع أنواع الغسالات الاتوماتيك والفوق اتوماتيك بما في ذلك: صيانة غسالات سامسونج جدة، صيانة غسالات ال جي جدة، صيانة غسالات توشيبا فوق اتوماتيك جدة، صيانة غسالات هيتاشي جدة، وجميع العلامات التجارية الأخرى.'
    },
    {
      question: 'ما هي مدة الضمان على الإصلاح؟',
      answer: 'نقدم ضمان شامل على جميع أعمال الصيانة والإصلاح. مدة الضمان تختلف حسب نوع الخدمة والقطع المستبدلة. جميع قطع الغيار المستخدمة أصلية ومعتمدة من الشركات المصنعة.'
    },
    {
      question: 'هل الخدمة متاحة في نفس اليوم؟',
      answer: 'نعم، نحن نقدم خدمة طوارئ سريعة على مدار 24 ساعة في جدة. فني تصليح غسالات اتوماتيك جدة ومهندس مكيفات وثلاجات متاح للحالات العاجلة. اتصل بنا الآن للحصول على خدمة في نفس اليوم.'
    },
    {
      question: 'هل تقدمون خدمات صيانة المكيفات؟',
      answer: 'نعم، نحن متخصصون في صيانة جميع أنواع المكيفات: صيانة مكيفات اسبلت جدة، صيانة مكيفات شباك جدة، صيانة مكيفات مركزي جدة، صيانة مكيفات دكت جدة، صيانة مكيفات دلابي جدة، صيانة مكيفات بيكج جدة. لدينا مهندس مكيفات محترف متاح 24/7.'
    },
    {
      question: 'هل تصلحون الثلاجات أيضاً؟',
      answer: 'نعم بالتأكيد! لدينا مهندس وفني ثلاجات الكتروني محترف متخصص في صيانة جميع أنواع الثلاجات. نحن افضل مركز للتبريد تكيف ثلاجات جدة، ونقدم صيانة ثلاجات ال جي الكتروني جدة وجميع العلامات التجارية الأخرى.'
    },
    {
      question: 'كم من الوقت يستغرق الإصلاح؟',
      answer: 'معظم الإصلاحات يتم إنجازها في نفس الزيارة خلال 1-2 ساعة. بعض الحالات المعقدة قد تحتاج إلى زيارة ثانية إذا كانت القطع بحاجة للطلب. نحن نسعى دائماً لإصلاح الجهاز في أسرع وقت ممكن.'
    },
    {
      question: 'هل الفني أو المهندس معتمد؟',
      answer: 'نعم، جميع فنيينا ومهندسينا معتمدون ومدربون على أعلى مستوى. لدينا فني ومهندس غسالات محترف، مهندس مكيفات متخصص، وافضل مهندس ثلاجات الكتروني جدة مع خبرة تزيد عن 15 عاماً.'
    },
    {
      question: 'ما هي مناطق الخدمة في جدة؟',
      answer: 'نغطي جميع أحياء ومناطق جدة بما في ذلك: الروضة، الحمراء، الزهراء، السلامة، النعيم، البلد، المرجان، أبحر، الشاطئ، وجميع الأحياء الأخرى. خدمة سريعة متاحة في جميع أنحاء جدة.'
    },
    {
      question: 'هل تقدمون خدمة تركيب وصيانة الأجهزة؟',
      answer: 'نعم، نقدم خدمة تركيب وأصلاح مكيفات جدة، تركيب وصيانة غسالات اوتوماتيك، صيانة وتركيب مركزي مكيفات، وتركيب جميع أنواع الأجهزة الإلكترونية المنزلية بطريقة احترافية وآمنة.'
    }
  ],
  en: [
    {
      question: 'How much does washing machine repair cost in Jeddah?',
      answer: 'The cost of washing machine repair varies depending on the type of fault and parts needed. We offer free inspection and transparent pricing before starting any work. Call us at +966567000317 for an instant quote.'
    },
    {
      question: 'Do you repair all types of automatic washing machines?',
      answer: 'Yes, we specialize in repairing all types of automatic and semi-automatic washing machines including: Samsung washing machine repair Jeddah, LG washing machine maintenance Jeddah, Toshiba automatic washing machine repair Jeddah, Hitachi washing machine repair Jeddah, and all other brands.'
    },
    {
      question: 'What is the warranty period on repairs?',
      answer: 'We provide comprehensive warranty on all maintenance and repair work. The warranty period varies depending on the type of service and parts replaced. All spare parts used are genuine and certified by manufacturers.'
    },
    {
      question: 'Is same-day service available?',
      answer: 'Yes, we offer fast emergency service 24/7 in Jeddah. Professional automatic washing machine technician and AC/refrigerator engineer available for urgent cases. Call us now for same-day service.'
    },
    {
      question: 'Do you provide AC maintenance services?',
      answer: 'Yes, we specialize in maintaining all types of air conditioners: Split AC repair Jeddah, Window AC maintenance Jeddah, Central AC repair Jeddah, Ducted AC service Jeddah, Cassette AC repair Jeddah, Package AC maintenance Jeddah. We have professional AC engineers available 24/7.'
    },
    {
      question: 'Do you also repair refrigerators?',
      answer: 'Yes absolutely! We have professional electronic refrigerator engineers specialized in all types of refrigerators. We are the best cooling and refrigeration center in Jeddah, providing LG electronic refrigerator maintenance and all other brands.'
    },
    {
      question: 'How long does the repair take?',
      answer: 'Most repairs are completed during the same visit within 1-2 hours. Some complex cases may require a second visit if parts need to be ordered. We always strive to repair the appliance as quickly as possible.'
    },
    {
      question: 'Are the technicians/engineers certified?',
      answer: 'Yes, all our technicians and engineers are certified and trained to the highest standards. We have professional washing machine technicians and engineers, specialized AC engineers, and the best electronic refrigerator engineer in Jeddah with over 15 years of experience.'
    },
    {
      question: 'What are the service areas in Jeddah?',
      answer: 'We cover all neighborhoods and areas of Jeddah including: Al-Rawdah, Al-Hamra, Al-Zahra, Al-Salamah, Al-Naeem, Al-Balad, Al-Marjan, Obhur, Beach areas, and all other neighborhoods. Fast service available throughout Jeddah.'
    },
    {
      question: 'Do you provide installation and maintenance services?',
      answer: 'Yes, we provide AC installation and repair in Jeddah, automatic washing machine installation and maintenance, central AC installation and maintenance, and installation of all types of home electronic appliances in a professional and safe manner.'
    }
  ]
};

export const renderFAQ = () => {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  const updateFAQ = () => {
    const lang = i18next.language;
    const faqs = faqData[lang] || faqData.ar;

    container.innerHTML = faqs.map((faq, index) => `
      <div class="accordion-item border-0 mb-3 shadow-sm">
        <h3 class="accordion-header">
          <button class="accordion-button ${index !== 0 ? 'collapsed' : ''} fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
            ${faq.question}
          </button>
        </h3>
        <div id="faq${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `).join('');
  };

  updateFAQ();
  i18next.on('languageChanged', updateFAQ);
};

export const getFAQSchema = () => {
  const faqs = faqData.ar;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
