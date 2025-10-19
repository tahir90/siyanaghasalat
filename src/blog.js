import i18next, { initI18n } from './i18n.js';
import { initAnalytics, trackScrollDepth, trackTimeOnPage } from './analytics.js';
import './style.css';

export const blogPosts = {
  ar: [
    {
      id: 1,
      title: 'حل مشكلة عدم تصريف الماء من الغسالة',
      excerpt: 'دليل شامل لحل مشكلة عدم تصريف المياه من الغسالة الأوتوماتيكية خطوة بخطوة',
      content: `
        <h3>لماذا لا تصرف الغسالة المياه؟</h3>
        <p>مشكلة عدم تصريف المياه من أكثر المشاكل شيوعاً في الغسالات الأوتوماتيكية. هناك عدة أسباب محتملة يمكن حلها بسهولة.</p>

        <h4>الأسباب الشائعة:</h4>
        <ul>
          <li><strong>انسداد فلتر المصفاة:</strong> تراكم الوبر والخيوط وبقايا الملابس</li>
          <li><strong>انسداد خرطوم الصرف:</strong> انحناء الخرطوم أو دخول أجسام غريبة</li>
          <li><strong>عطل في مضخة الصرف:</strong> توقف المضخة عن العمل أو ضعفها</li>
          <li><strong>مشكلة في مفتاح الباب:</strong> إذا كان الباب لا يُغلق بإحكام</li>
          <li><strong>انسداد الأنبوب الواصل للصرف:</strong> تراكم بقايا المنظفات</li>
        </ul>

        <h4>خطوات الحل بنفسك:</h4>
        <ol>
          <li><strong>افصل الكهرباء أولاً:</strong> للأمان قبل البدء</li>
          <li><strong>نظف فلتر المصفاة:</strong> عادة يكون في الجزء السفلي الأمامي، افتحه وأزل الأوساخ</li>
          <li><strong>افحص خرطوم الصرف:</strong> تأكد من عدم وجود انحناءات أو انسدادات</li>
          <li><strong>جرب دورة عصر فقط:</strong> لاختبار المضخة بدون دورة كاملة</li>
          <li><strong>نظف فتحة الصرف:</strong> استخدم سلك رفيع لإزالة أي انسدادات</li>
        </ol>

        <h4>متى تحتاج فني متخصص؟</h4>
        <ul>
          <li>إذا استمرت المشكلة بعد تنظيف الفلتر والخرطوم</li>
          <li>سماع أصوات غريبة من المضخة</li>
          <li>تسرب مياه من أسفل الغسالة</li>
          <li>رسالة خطأ على شاشة الغسالة</li>
          <li>عدم عمل دورة العصر نهائياً</li>
        </ul>

        <h4>نصائح الوقاية:</h4>
        <ul>
          <li>نظف الفلتر مرة شهرياً على الأقل</li>
          <li>افحص جيوب الملابس قبل الغسيل</li>
          <li>استخدم كمية مناسبة من المنظف</li>
          <li>لا تفرط في تحميل الغسالة</li>
          <li>شغل دورة تنظيف شهرياً</li>
        </ul>

        <div class="alert alert-info mt-4">
          <p class="mb-2"><strong>هل تحتاج مساعدة فورية؟</strong></p>
          <p class="mb-0">فريقنا متاح 24/7 لحل جميع مشاكل الغسالات في جدة</p>
        </div>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>اتصل الآن: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-18',
      category: 'صيانة الغسالات',
      image: '/images/washingmachinerepair.jpg'
    },
    {
      id: 2,
      title: 'أسباب توقف الغسالة عن العمل فجأة وكيفية إصلاحها',
      excerpt: 'تعرف على الأسباب الشائعة لتوقف الغسالة المفاجئ وكيفية إصلاحها بسرعة',
      content: `
        <h3>لماذا توقفت غسالتك فجأة؟</h3>
        <p>توقف الغسالة المفاجئ يمكن أن يكون محبطاً، لكن معظم الأسباب قابلة للحل بسهولة. دعونا نتعرف على الأسباب الأكثر شيوعاً.</p>

        <h4>الأسباب الكهربائية:</h4>
        <ul>
          <li><strong>انقطاع التيار الكهربائي:</strong> تحقق من القاطع الكهربائي والفيوزات</li>
          <li><strong>مشكلة في كابل الكهرباء:</strong> تحقق من سلامة السلك والقابس</li>
          <li><strong>فصل مؤقت للحماية:</strong> الغسالات الحديثة تتوقف تلقائياً عند استشعار خطر</li>
          <li><strong>عطل في لوحة التحكم:</strong> مشكلة في الدائرة الإلكترونية</li>
        </ul>

        <h4>المشاكل الميكانيكية:</h4>
        <ul>
          <li><strong>الحمولة غير متوازنة:</strong> الغسالة توقفت لحماية نفسها من الاهتزاز</li>
          <li><strong>مشكلة في قفل الباب:</strong> الباب غير مغلق بإحكام</li>
          <li><strong>انسداد مضخة الصرف:</strong> توقف بسبب عدم القدرة على تصريف المياه</li>
          <li><strong>عطل في الموتور:</strong> مشكلة في محرك الغسالة</li>
          <li><strong>مشكلة في السير:</strong> انزلاق أو قطع السير الناقل للحركة</li>
        </ul>

        <h4>خطوات الحل السريع:</h4>
        <ol>
          <li><strong>افصل الكهرباء لمدة دقيقتين:</strong> إعادة تشغيل النظام الإلكتروني</li>
          <li><strong>افحص القاطع الكهربائي:</strong> تأكد من عدم فصل الكهرباء</li>
          <li><strong>أعد توزيع الملابس:</strong> تأكد من توازن الحمولة داخل الحوض</li>
          <li><strong>تأكد من إغلاق الباب:</strong> اضغط بقوة حتى تسمع صوت القفل</li>
          <li><strong>افحص خرطوم الصرف:</strong> تأكد من عدم وجود انسداد</li>
          <li><strong>جرب دورة بسيطة:</strong> شغل دورة قصيرة لاختبار الأداء</li>
        </ol>

        <h4>رسائل الخطأ الشائعة:</h4>
        <ul>
          <li><strong>E1 أو F1:</strong> مشكلة في دخول المياه - افحص الصنابير والخراطيم</li>
          <li><strong>E2 أو F2:</strong> مشكلة في الصرف - نظف الفلتر</li>
          <li><strong>E3 أو F3:</strong> حمولة زائدة أو غير متوازنة</li>
          <li><strong>E4 أو F4:</strong> مشكلة في التسخين (للغسالات بسخان)</li>
          <li><strong>E5 أو F5:</strong> مشكلة في الموتور أو السير</li>
        </ul>

        <h4>متى تحتاج للاتصال بفني؟</h4>
        <ul>
          <li>استمرار المشكلة بعد الخطوات السابقة</li>
          <li>ظهور رسالة خطأ لا تعرف معناها</li>
          <li>رائحة احتراق من الغسالة</li>
          <li>أصوات غريبة قبل التوقف</li>
          <li>تكرار المشكلة بشكل متكرر</li>
        </ul>

        <h4>نصائح الوقاية:</h4>
        <ul>
          <li>لا تحمل الغسالة فوق طاقتها</li>
          <li>وزع الملابس بالتساوي</li>
          <li>نظف الفلتر بانتظام</li>
          <li>استخدم واقي كهربائي</li>
          <li>صيانة دورية كل 6 أشهر</li>
        </ul>

        <div class="alert alert-warning mt-4">
          <p class="mb-2"><strong>تنبيه هام:</strong></p>
          <p class="mb-0">لا تحاول فتح الغسالة أو إصلاحها داخلياً إذا لم تكن لديك خبرة. بعض الأجزاء تحمل شحنة كهربائية حتى بعد فصل الكهرباء.</p>
        </div>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>اتصل بالفني: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-16',
      category: 'صيانة الغسالات',
      image: '/images/washingmachinerepair.jpg'
    },
    {
      id: 3,
      title: 'كيفية تنظيف الغسالة الأوتوماتيك من الروائح الكريهة',
      excerpt: 'طرق فعالة لإزالة الروائح من الغسالة والحفاظ عليها منتعشة ونظيفة',
      content: `
        <h3>لماذا تصدر الغسالة روائح كريهة؟</h3>
        <p>الروائح الكريهة من الغسالة مشكلة شائعة تنتج عن تراكم البكتيريا والعفن والرطوبة. لكن الحل بسيط وفعال.</p>

        <h4>الأسباب الرئيسية للروائح:</h4>
        <ul>
          <li><strong>إغلاق الباب بعد الاستخدام:</strong> يحبس الرطوبة ويشجع نمو البكتيريا</li>
          <li><strong>استخدام منظف زائد:</strong> تراكم بقايا المنظفات في الحوض</li>
          <li><strong>الغسيل بماء بارد فقط:</strong> لا يقتل البكتيريا بفعالية</li>
          <li><strong>ترك الملابس المبللة:</strong> بعد انتهاء الدورة لفترة طويلة</li>
          <li><strong>فلتر متسخ:</strong> تراكم الوبر والأوساخ</li>
          <li><strong>جوان الباب المتسخ:</strong> تجمع البكتيريا في طيات الجوان</li>
        </ul>

        <h4>طريقة التنظيف بالخل الأبيض:</h4>
        <ol>
          <li>أضف كوبين من الخل الأبيض في حوض الغسالة</li>
          <li>شغل دورة ساخنة كاملة بدون ملابس</li>
          <li>توقف في منتصف الدورة واترك الخل لمدة ساعة</li>
          <li>أكمل الدورة حتى النهاية</li>
          <li>امسح الحوض والباب بقطعة قماش نظيفة</li>
        </ol>

        <h4>طريقة التنظيف بكربونات الصوديوم (البيكنج صودا):</h4>
        <ol>
          <li>اخلط 4 ملاعق كبيرة من البيكنج صودا مع ربع كوب ماء</li>
          <li>نظف درج المنظفات والحوض بالخليط</li>
          <li>أضف كوب بيكنج صودا في الحوض</li>
          <li>شغل دورة ساخنة</li>
          <li>بعد الانتهاء، اترك الباب مفتوحاً للتهوية</li>
        </ol>

        <h4>تنظيف جوان (ختم) الباب:</h4>
        <ul>
          <li>امسح الجوان بقطعة قماش مبللة بالخل</li>
          <li>استخدم فرشاة أسنان قديمة للطيات</li>
          <li>جفف الجوان جيداً بعد كل غسلة</li>
          <li>تفقد الجوان شهرياً وأزل أي بقايا عالقة</li>
        </ul>

        <h4>تنظيف درج المنظفات:</h4>
        <ul>
          <li>أخرج الدرج بالكامل</li>
          <li>انقعه في ماء ساخن مع الخل لمدة 30 دقيقة</li>
          <li>افرك بفرشاة لإزالة البقايا</li>
          <li>اشطفه جيداً واتركه يجف تماماً</li>
          <li>نظف الفتحة الخاصة بالدرج أيضاً</li>
        </ul>

        <h4>تنظيف الفلتر:</h4>
        <ol>
          <li>افتح غطاء الفلتر في الجزء السفلي</li>
          <li>ضع وعاء لتجميع الماء المتبقي</li>
          <li>افتح الفلتر وأزل الأوساخ والشعر</li>
          <li>اغسله بماء جاري ساخن</li>
          <li>أعد تركيبه وأحكم إغلاقه</li>
        </ol>

        <h4>نصائح للوقاية من الروائح:</h4>
        <ul>
          <li><strong>اترك الباب مفتوحاً:</strong> بعد كل غسلة لتجفيف الداخل</li>
          <li><strong>أخرج الملابس فوراً:</strong> بعد انتهاء الدورة</li>
          <li><strong>استخدم الكمية الصحيحة من المنظف:</strong> لا تفرط</li>
          <li><strong>شغل دورة ساخنة شهرياً:</strong> لتعقيم الغسالة</li>
          <li><strong>امسح الجوان بعد الاستخدام:</strong> لإزالة الرطوبة</li>
          <li><strong>نظف الفلتر كل شهرين:</strong> لمنع الانسداد</li>
          <li><strong>استخدم منظف مخصص للغسالات:</strong> مرة شهرياً</li>
        </ul>

        <h4>دورة التنظيف الشهرية:</h4>
        <p>معظم الغسالات الحديثة بها برنامج "تنظيف الحوض" أو "Tub Clean":</p>
        <ul>
          <li>استخدم هذا البرنامج مرة شهرياً</li>
          <li>يمكن استخدام منظف مخصص أو الخل</li>
          <li>شغل الدورة بدون ملابس</li>
          <li>اترك الباب مفتوحاً بعد الانتهاء</li>
        </ul>

        <div class="alert alert-success mt-4">
          <p class="mb-2"><strong>نتيجة التنظيف الدوري:</strong></p>
          <ul class="mb-0">
            <li>غسالة خالية من الروائح</li>
            <li>ملابس أنظف ومنتعشة</li>
            <li>عمر أطول للغسالة</li>
            <li>تقليل مشاكل الحساسية</li>
          </ul>
        </div>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>اتصل للمساعدة: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-14',
      category: 'صيانة الغسالات',
      image: '/images/washingmachinerepair.jpg'
    },
    {
      id: 4,
      title: 'مقارنة غسالات سامسونج وال جي وبوش - أيهما الأفضل؟',
      excerpt: 'دليل شامل لمقارنة أشهر ماركات الغسالات من حيث الأداء والصيانة والأسعار في جدة',
      content: `
        <h3>مقارنة شاملة بين أشهر ماركات الغسالات</h3>
        <p>عند شراء غسالة جديدة، تبرز ثلاث علامات تجارية رائدة: سامسونج، ال جي، وبوش. نقارن بينها من حيث الأداء والصيانة في جدة.</p>

        <h4>غسالات سامسونج Samsung:</h4>
        <ul>
          <li><strong>المميزات:</strong> تقنية Ecobubble، محرك قوي، ضمان 10 سنوات على الموتور، قطع غيار متوفرة</li>
          <li><strong>السعر:</strong> 1,500 - 4,000 ريال</li>
          <li><strong>العيوب:</strong> مشاكل في حساس الباب أحياناً، بعض الموديلات صاخبة</li>
          <li><strong>الصيانة:</strong> سهلة وقطع الغيار متوفرة في جدة</li>
        </ul>

        <h4>غسالات ال جي LG:</h4>
        <ul>
          <li><strong>المميزات:</strong> تقنية AI DD، هدوء فائق، محرك مباشر بدون سير، تنظيف ممتاز</li>
          <li><strong>السعر:</strong> 1,400 - 3,800 ريال</li>
          <li><strong>العيوب:</strong> مشاكل في البورد الإلكتروني أحياناً، قطع غيار أغلى قليلاً</li>
          <li><strong>الصيانة:</strong> جيدة لكن القطع أغلى من سامسونج</li>
        </ul>

        <h4>غسالات بوش Bosch:</h4>
        <ul>
          <li><strong>المميزات:</strong> جودة ألمانية، توفير ممتاز للماء، هدوء تام، عمر طويل</li>
          <li><strong>السعر:</strong> 2,000 - 5,000 ريال</li>
          <li><strong>العيوب:</strong> قطع غيار أغلى وأقل توفراً، وقت دورة أطول</li>
          <li><strong>الصيانة:</strong> تحتاج فني متخصص، قطع غيار محدودة في جدة</li>
        </ul>

        <h4>أيهما الأفضل لمنزلك؟</h4>
        <ul>
          <li><strong>سامسونج:</strong> توازن جيد بين السعر والأداء، سهولة الصيانة</li>
          <li><strong>ال جي:</strong> الأهدأ والأكثر تقنية، موتور بدون سير</li>
          <li><strong>بوش:</strong> أعلى جودة وأطول عمراً، الأفضل للاستثمار طويل الأمد</li>
        </ul>

        <h4>تكاليف الصيانة في جدة:</h4>
        <ul>
          <li>موتور سامسونج: 400-600 ريال | ال جي: 500-700 ريال | بوش: 700-900 ريال</li>
          <li>لوحة تحكم سامسونج: 300-500 ريال | ال جي: 400-600 ريال | بوش: 600-800 ريال</li>
          <li>مضخة صرف سامسونج: 150-250 ريال | ال جي: 200-300 ريال | بوش: 300-400 ريال</li>
        </ul>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>استشارة مجانية: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-08',
      category: 'صيانة الغسالات',
      image: '/images/washingmachinerepair.jpg'
    },
    {
      id: 5,
      title: 'أفضل أوقات تنظيف المكيفات في جدة',
      excerpt: 'متى يجب عليك تنظيف مكيفك للحصول على أفضل أداء وتوفير في الكهرباء؟',
      content: `
        <h3>التوقيت المثالي لتنظيف المكيفات</h3>

        <h4>قبل بداية الصيف (مارس - أبريل)</h4>
        <p>هذا هو أفضل وقت لتنظيف المكيف الشامل قبل الاستخدام المكثف:</p>
        <ul>
          <li>تنظيف الوحدة الداخلية والخارجية</li>
          <li>فحص مستوى غاز التبريد</li>
          <li>تنظيف أو تبديل الفلاتر</li>
          <li>فحص التوصيلات الكهربائية</li>
          <li>اختبار الأداء والكفاءة</li>
        </ul>

        <h4>خلال فصل الصيف (شهرياً)</h4>
        <p>تنظيف روتيني يمكنك القيام به بنفسك:</p>
        <ul>
          <li>تنظيف الفلاتر كل 2-4 أسابيع</li>
          <li>مسح الوحدة الخارجية من الأتربة</li>
          <li>فحص تصريف المياه</li>
          <li>مراقبة أي أصوات غريبة</li>
        </ul>

        <h4>نهاية الصيف (سبتمبر - أكتوبر)</h4>
        <p>تنظيف شامل قبل موسم عدم الاستخدام:</p>
        <ul>
          <li>تنظيف عميق للوحدات</li>
          <li>تجفيف المكيف تماماً</li>
          <li>تغطية الوحدة الخارجية (اختياري)</li>
          <li>فحص عام وإصلاح أي مشاكل</li>
        </ul>

        <h4>علامات تحتاج معها تنظيف فوري:</h4>
        <ul>
          <li>رائحة كريهة عند التشغيل</li>
          <li>ضعف في تدفق الهواء</li>
          <li>صوت غير طبيعي</li>
          <li>تقطير مياه من الداخل</li>
          <li>ارتفاع ملحوظ في فاتورة الكهرباء</li>
        </ul>

        <h4>فوائد التنظيف الدوري:</h4>
        <ul>
          <li><strong>توفير 15-30% من استهلاك الكهرباء</strong></li>
          <li>تحسين جودة الهواء في المنزل</li>
          <li>إطالة عمر المكيف</li>
          <li>تجنب الأعطال المفاجئة</li>
          <li>تبريد أسرع وأكثر كفاءة</li>
        </ul>

        <h4>خدمة التنظيف الاحترافية تشمل:</h4>
        <ul>
          <li>تنظيف المبخر والمكثف بالبخار</li>
          <li>تطهير الفلاتر وتعقيمها</li>
          <li>تنظيف المروحة والشفرات</li>
          <li>فحص وتنظيف مواسير الصرف</li>
          <li>فحص شامل لجميع الأجزاء</li>
        </ul>

        <p><strong>احجز موعد تنظيف مكيفك الآن في جدة - خدمة محترفة - اتصل: +966567000317</strong></p>
      `,
      date: '2025-10-06',
      category: 'صيانة المكيفات',
      image: '/images/acrepair.jpg'
    },
    {
      id: 6,
      title: 'متى تحتاج غسالتك إلى صيانة دورية؟ - جدول الصيانة الشامل',
      excerpt: 'دليل كامل لجدول الصيانة الدورية للغسالة لتجنب الأعطال وإطالة عمرها',
      content: `
        <h3>أهمية الصيانة الدورية</h3>
        <p>الصيانة الدورية تطيل عمر الغسالة من 8 سنوات إلى 12+ سنة وتوفر تكاليف الإصلاحات الكبيرة.</p>

        <h4>الصيانة الشهرية:</h4>
        <ul>
          <li><strong>تنظيف فلتر المصفاة:</strong> أهم خطوة، يستغرق 10 دقائق فقط</li>
          <li><strong>تنظيف درج المنظفات:</strong> انقعه في ماء ساخن مع خل</li>
          <li><strong>مسح جوان الباب:</strong> بقطعة قماش مبللة بالخل</li>
          <li><strong>دورة تنظيف ساخنة:</strong> 90 درجة مع كوب خل</li>
        </ul>

        <h4>الصيانة كل 3 أشهر:</h4>
        <ul>
          <li>فحص خراطيم المياه للتشققات</li>
          <li>فحص مستوى الغسالة بميزان ماء</li>
          <li>تنظيف الجزء الخلفي من الغبار</li>
          <li>فحص أداء العصر</li>
        </ul>

        <h4>الصيانة كل 6 أشهر (اتصل بفني):</h4>
        <ul>
          <li>فحص الموتور والسير</li>
          <li>فحص وتنظيف مضخة الصرف</li>
          <li>فحص نظام التعليق</li>
          <li>فحص اللوحة الإلكترونية</li>
        </ul>

        <h4>الصيانة السنوية الشاملة:</h4>
        <ul>
          <li>فك وتنظيف الحوض من الداخل</li>
          <li>فحص جميع القطع الميكانيكية</li>
          <li>اختبار شامل لكل الوظائف</li>
          <li>التكلفة: 150-300 ريال</li>
        </ul>

        <h4>علامات تحتاج صيانة فورية:</h4>
        <ul>
          <li>تسرب مياه | أصوات غريبة | رائحة حريق</li>
          <li>توقف مفاجئ | اهتزاز عنيف | عدم تصريف</li>
        </ul>

        <h4>فوائد الصيانة الدورية:</h4>
        <p>توفير 800-1500 ريال سنوياً من تكاليف الإصلاحات + إطالة عمر الغسالة + توفير 20-30% من الكهرباء</p>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>احجز صيانة دورية: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-04',
      category: 'صيانة الغسالات',
      image: '/images/washingmachinerepair.jpg'
    },
    {
      id: 7,
      title: 'لماذا المكيف يعمل ولا يبرد؟ - أسباب وحلول',
      excerpt: 'دليل شامل لحل مشكلة ضعف التبريد في المكيفات وأسبابها الشائعة',
      content: `
        <h3>أسباب ضعف التبريد في المكيف</h3>
        <p>المكيف يعمل لكن الهواء ليس بارداً كفاية؟ إليك الأسباب الشائعة وحلولها.</p>

        <h4>1. نقص غاز التبريد (الفريون):</h4>
        <ul>
          <li><strong>العلامات:</strong> تجمد المبخر، تقطير مياه، ارتفاع فاتورة الكهرباء</li>
          <li><strong>السبب:</strong> تسريب في الأنابيب</li>
          <li><strong>الحل:</strong> اتصل بفني لفحص التسريب وشحن الغاز (300-600 ريال)</li>
        </ul>

        <h4>2. فلاتر متسخة:</h4>
        <ul>
          <li><strong>العلامات:</strong> ضعف تدفق الهواء، صوت الموتور أعلى</li>
          <li><strong>السبب:</strong> تراكم الغبار والأتربة</li>
          <li><strong>الحل:</strong> نظف الفلاتر بالماء والصابون (يمكنك فعله بنفسك)</li>
        </ul>

        <h4>3. الوحدة الخارجية متسخة:</h4>
        <ul>
          <li><strong>العلامات:</strong> المكيف يعمل لكن التبريد ضعيف جداً</li>
          <li><strong>السبب:</strong> انسداد المكثف بالغبار</li>
          <li><strong>الحل:</strong> تنظيف احترافي بالبخار (100-200 ريال)</li>
        </ul>

        <h4>4. حجم المكيف غير مناسب:</h4>
        <ul>
          <li>مكيف صغير لغرفة كبيرة = تبريد ضعيف دائماً</li>
          <li>الحل: استبدال بمكيف بقدرة أعلى</li>
        </ul>

        <h4>5. عطل في الكمبروسر:</h4>
        <ul>
          <li><strong>العلامات:</strong> صوت غريب من الوحدة الخارجية</li>
          <li><strong>الحل:</strong> فني متخصص (إصلاح أو استبدال 800-1500 ريال)</li>
        </ul>

        <h4>6. مشكلة في الثرموستات:</h4>
        <ul>
          <li>قراءة خاطئة للحرارة</li>
          <li>الحل: معايرة أو استبدال (150-300 ريال)</li>
        </ul>

        <h4>الفحص السريع قبل الاتصال بالفني:</h4>
        <ol>
          <li>نظف الفلاتر</li>
          <li>تأكد من إغلاق الأبواب والنوافذ</li>
          <li>اخفض درجة الحرارة إلى 18 واختبر لمدة ساعة</li>
          <li>تأكد من عدم وجود عوائق أمام المكيف</li>
        </ol>

        <div class="alert alert-info mt-3">
          <strong>نصيحة:</strong> إذا كان المكيف جديد (أقل من سنة) ولا يبرد، قد تكون المشكلة في التركيب أو شحن غاز غير كافي عند التركيب.
        </div>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>فحص وإصلاح: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-03',
      category: 'صيانة المكيفات',
      image: '/images/acrepair.jpg'
    },
    {
      id: 8,
      title: 'كم يكلف شحن غاز المكيف في جدة؟ - دليل الأسعار 2025',
      excerpt: 'أسعار شحن غاز التبريد للمكيفات في جدة حسب النوع والكمية',
      content: `
        <h3>أسعار شحن غاز المكيف في جدة</h3>
        <p>تختلف تكلفة شحن الغاز حسب نوع الغاز، حجم المكيف، وما إذا كان هناك تسريب يحتاج إصلاح.</p>

        <h4>أسعار شحن الغاز حسب النوع:</h4>
        <ul>
          <li><strong>R22 (القديم):</strong> 250-400 ريال للوحدة الصغيرة (1-2 طن)</li>
          <li><strong>R410A (الشائع):</strong> 300-500 ريال للوحدة الصغيرة</li>
          <li><strong>R32 (الحديث):</strong> 350-600 ريال للوحدة الصغيرة</li>
        </ul>

        <h4>أسعار شحن الغاز حسب حجم المكيف:</h4>
        <ul>
          <li>مكيف 1-1.5 طن (غرفة صغيرة): 250-400 ريال</li>
          <li>مكيف 2-2.5 طن (غرفة متوسطة): 400-600 ريال</li>
          <li>مكيف 3-4 طن (غرفة كبيرة): 600-900 ريال</li>
          <li>مكيف مركزي (فيلا): 1,500-3,000 ريال</li>
        </ul>

        <h4>تكاليف إضافية محتملة:</h4>
        <ul>
          <li><strong>كشف التسريب:</strong> 100-200 ريال</li>
          <li><strong>إصلاح التسريب البسيط:</strong> 150-300 ريال</li>
          <li><strong>إصلاح التسريب الكبير:</strong> 300-800 ريال</li>
          <li><strong>تغيير أنبوب:</strong> 200-500 ريال</li>
          <li><strong>تنظيف المكيف:</strong> 150-300 ريال (موصى به قبل الشحن)</li>
        </ul>

        <h4>متى تحتاج لشحن الغاز؟</h4>
        <ul>
          <li>المكيف يعمل لكن التبريد ضعيف جداً</li>
          <li>تكون ثلج على الأنابيب الداخلية</li>
          <li>ارتفاع ملحوظ في فاتورة الكهرباء</li>
          <li>صوت صفير من الوحدة الخارجية</li>
        </ul>

        <h4>مدة صلاحية غاز التبريد:</h4>
        <p><strong>مهم جداً:</strong> المكيف السليم لا يحتاج شحن غاز أبداً! الغاز لا ينتهي بالاستخدام. إذا احتجت لشحن الغاز، فهناك تسريب يجب إصلاحه أولاً.</p>

        <h4>نصائح لتجنب الاحتيال:</h4>
        <ul>
          <li>اطلب فحص التسريب قبل الشحن</li>
          <li>تأكد من نوع الغاز المستخدم (مكتوب على المكيف)</li>
          <li>اطلب فاتورة مفصلة</li>
          <li>تجنب الأسعار المبالغ فيها أو الرخيصة جداً</li>
          <li>اطلب ضمان على العمل (شهر على الأقل)</li>
        </ul>

        <h4>علامات الفني المحترف:</h4>
        <ul>
          <li>يفحص الضغط قبل وبعد الشحن</li>
          <li>يبحث عن التسريب بجهاز كشف</li>
          <li>يسحب الهواء من النظام قبل الشحن (تفريغ)</li>
          <li>يشحن الكمية الصحيحة (حسب بيانات المكيف)</li>
        </ul>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>شحن غاز بسعر عادل: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-10-02',
      category: 'صيانة المكيفات',
      image: '/images/acrepair.jpg'
    },
    {
      id: 9,
      title: 'تنظيف المكيف بنفسك خطوة بخطوة - دليل DIY',
      excerpt: 'دليل مبسط لتنظيف المكيف بنفسك لتوفير المال وتحسين الأداء',
      content: `
        <h3>تنظيف المكيف في المنزل</h3>
        <p>تنظيف المكيف بنفسك كل شهر يوفر 150-300 ريال ويحسن الأداء بنسبة 30%.</p>

        <h4>الأدوات المطلوبة:</h4>
        <ul>
          <li>ماء + صابون أو منظف خاص</li>
          <li>فرشاة ناعمة أو فرشاة أسنان قديمة</li>
          <li>بخاخ ماء</li>
          <li>قطعة قماش نظيفة</li>
          <li>مكنسة كهربائية (اختياري)</li>
          <li>زجاجة خل أبيض (اختياري)</li>
        </ul>

        <h4>خطوات تنظيف الوحدة الداخلية:</h4>
        <ol>
          <li><strong>افصل الكهرباء:</strong> من القاطع للأمان</li>
          <li><strong>افتح الغطاء الأمامي:</strong> عادة يرفع للأعلى</li>
          <li><strong>أخرج الفلاتر:</strong> اسحبها بلطف للخارج</li>
          <li><strong>نظف الفلاتر:</strong> اغسلها بماء وصابون، اتركها تجف تماماً (ساعتين)</li>
          <li><strong>نظف الزعانف:</strong> استخدم فرشاة ناعمة بحذر (لا تثنيها)</li>
          <li><strong>امسح الجسم:</strong> من الداخل والخارج بقطعة مبللة</li>
          <li><strong>رش معقم:</strong> (اختياري) رش خل مخفف بالماء 1:3</li>
          <li><strong>أعد الفلاتر:</strong> بعد جفافها تماماً</li>
        </ol>

        <h4>خطوات تنظيف الوحدة الخارجية:</h4>
        <ol>
          <li><strong>افصل الكهرباء</strong></li>
          <li><strong>أزل الأوراق والأتربة الكبيرة:</strong> باليد</li>
          <li><strong>رش بالماء:</strong> من الداخل للخارج (ليس العكس!)</li>
          <li><strong>لا تستخدم ضغط عالي:</strong> يتلف الزعانف</li>
          <li><strong>نظف الزعانف بفرشاة ناعمة:</strong> بحذر شديد</li>
          <li><strong>اترك المكيف يجف:</strong> ساعة على الأقل قبل التشغيل</li>
        </ol>

        <h4>التنظيف العميق (مرة كل 3 أشهر):</h4>
        <ul>
          <li>نظف صرف المياه (الخرطوم الصغير)</li>
          <li>رش محلول خل داخل الوحدة</li>
          <li>نظف المروحة إذا كانت مرئية</li>
        </ul>

        <h4>أخطاء يجب تجنبها:</h4>
        <ul>
          <li>❌ تشغيل المكيف والفلاتر مبللة</li>
          <li>❌ استخدام مواد كيميائية قوية</li>
          <li>❌ ثني زعانف المبخر</li>
          <li>❌ رش الماء على اللوحة الإلكترونية</li>
          <li>❌ الضغط بقوة على الأجزاء</li>
        </ul>

        <h4>متى تحتاج فني محترف؟</h4>
        <ul>
          <li>تنظيف المبخر والمكثف من الداخل (بالبخار)</li>
          <li>التنظيف الكيميائي العميق</li>
          <li>فك وتنظيف المكيف بالكامل</li>
          <li>تنظيف المكيفات المركزية</li>
          <li>مرة كل 6 أشهر للصيانة الشاملة</li>
        </ul>

        <h4>فوائد التنظيف المنتظم:</h4>
        <ul>
          <li>توفير 20-30% من الكهرباء</li>
          <li>تبريد أسرع وأقوى</li>
          <li>هواء أنظف وأصحى</li>
          <li>عمر أطول للمكيف</li>
          <li>تجنب الأعطال المفاجئة</li>
        </ul>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>تنظيف احترافي: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-09-30',
      category: 'صيانة المكيفات',
      image: '/images/acrepair.jpg'
    },
    {
      id: 10,
      title: 'كيف تخفض فاتورة الكهرباء من المكيف؟ - 15 نصيحة عملية',
      excerpt: 'طرق مجربة لتقليل استهلاك المكيف للكهرباء وتوفير حتى 50% من الفاتورة',
      content: `
        <h3>توفير استهلاك كهرباء المكيف</h3>
        <p>المكيف يستهلك 60-70% من فاتورة الكهرباء في الصيف. إليك 15 طريقة لتوفير حتى 50%!</p>

        <h4>1. درجة الحرارة المثالية:</h4>
        <ul>
          <li><strong>اضبط على 24-25 درجة:</strong> كل درجة أقل = 5% زيادة باستهلاك</li>
          <li>22 درجة مريحة ومثالية لمعظم الناس</li>
          <li>تجنب ضبطها على 16-18 إلا للضرورة</li>
        </ul>

        <h4>2. استخدم مؤقت النوم:</h4>
        <ul>
          <li>ضبط المؤقت ليطفئ بعد 4-6 ساعات</li>
          <li>أو يرفع الحرارة تدريجياً أثناء النوم</li>
          <li>وفر 30-40% من استهلاك الليل</li>
        </ul>

        <h4>3. نظف الفلاتر شهرياً:</h4>
        <ul>
          <li>فلتر متسخ = استهلاك أعلى 15%</li>
          <li>التنظيف سهل ويستغرق 10 دقائق</li>
          <li>وفر 200-300 ريال سنوياً</li>
        </ul>

        <h4>4. صيانة دورية كل 6 أشهر:</h4>
        <ul>
          <li>مكيف نظيف = كفاءة أعلى 25%</li>
          <li>تكلفة الصيانة: 150-300 ريال</li>
          <li>توفير سنوي: 500-800 ريال</li>
        </ul>

        <h4>5. عزل الغرفة جيداً:</h4>
        <ul>
          <li>أغلق جميع الشقوق حول الأبواب والنوافذ</li>
          <li>استخدم ستائر سميكة أو ستائر عازلة</li>
          <li>عزل الأبواب والنوافذ يوفر 20-30%</li>
        </ul>

        <h4>6. لا تدخل حرارة للغرفة:</h4>
        <ul>
          <li>أغلق الستائر نهاراً لمنع الشمس</li>
          <li>أغلق الغرف غير المستخدمة</li>
          <li>أطفئ الأجهزة غير المستخدمة (تصدر حرارة)</li>
        </ul>

        <h4>7. حجم المكيف المناسب:</h4>
        <ul>
          <li>مكيف صغير جداً = يعمل باستمرار = استهلاك أعلى</li>
          <li>مكيف كبير جداً = يطفئ ويشتغل كثيراً = يتلف سريعاً</li>
          <li>اختر الحجم المناسب لمساحة الغرفة</li>
        </ul>

        <h4>8. استخدم مراوح السقف:</h4>
        <ul>
          <li>مروحة السقف توزع الهواء البارد</li>
          <li>تشعر ببرودة 2-3 درجات أكثر</li>
          <li>وفر باستهلاك المكيف 20%</li>
        </ul>

        <h4>9. وضع توفير الطاقة Eco Mode:</h4>
        <ul>
          <li>معظم المكيفات الحديثة بها هذا الوضع</li>
          <li>يوفر 25-35% من الاستهلاك</li>
          <li>قد يكون أبطأ قليلاً لكنه فعال</li>
        </ul>

        <h4>10. تبريد مسبق في أوقات التعريفة المنخفضة:</h4>
        <ul>
          <li>برّد الغرفة قبل وقت الذروة</li>
          <li>استفد من التعريفة المنخفضة إن وجدت</li>
        </ul>

        <h4>11. تحقق من عزل الأنابيب:</h4>
        <ul>
          <li>الأنابيب المعزولة جيداً توفر 10-15%</li>
          <li>تأكد من سلامة العازل الإسفنجي</li>
        </ul>

        <h4>12. لا تفتح الباب كثيراً:</h4>
        <ul>
          <li>كل مرة تفتح الباب = دخول هواء ساخن</li>
          <li>استخدم أغطية الأبواب الهوائية</li>
        </ul>

        <h4>13. نظف الوحدة الخارجية:</h4>
        <ul>
          <li>وحدة نظيفة = تبريد أسرع = توفير 15%</li>
          <li>أزل الأوساخ والأوراق بانتظام</li>
        </ul>

        <h4>14. فحص غاز التبريد:</h4>
        <ul>
          <li>نقص الغاز = استهلاك أعلى 30%</li>
          <li>افحص سنوياً</li>
        </ul>

        <h4>15. ترقية لمكيف إنفرتر:</h4>
        <ul>
          <li>مكيفات إنفرتر توفر 40-60% من الكهرباء</li>
          <li>استثمار يسترد خلال 2-3 سنوات</li>
        </ul>

        <h4>التوفير المتوقع:</h4>
        <p>تطبيق هذه النصائح يمكن أن يقلل فاتورتك من 800 ريال شهرياً إلى 400-500 ريال = توفير 3,000-4,000 ريال سنوياً!</p>

        <div class="d-flex gap-2 mt-3">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>استشارة توفير الطاقة: 0567000317
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>واتساب
          </a>
        </div>
      `,
      date: '2025-09-28',
      category: 'صيانة المكيفات',
      image: '/images/acrepair.jpg'
    }
  ],
  en: [
    {
      id: 1,
      title: 'Complete Guide to AC Maintenance in Jeddah During Summer',
      excerpt: 'Learn the essential tips to keep your AC running efficiently during hot summer months in Jeddah',
      content: `
        <h3>Why is AC Maintenance Important in Jeddah?</h3>
        <p>With high temperatures in Jeddah, your AC runs continuously, requiring regular maintenance for optimal efficiency.</p>

        <h4>Important Maintenance Tips:</h4>
        <ul>
          <li><strong>Clean Filters Monthly:</strong> Clean filters ensure better airflow and reduce electricity consumption</li>
          <li><strong>Check Refrigerant Gas:</strong> Low gas leads to poor cooling and increased energy usage</li>
          <li><strong>Clean Outdoor Unit:</strong> Remove accumulated dust and debris</li>
          <li><strong>Check Electrical Connections:</strong> Ensure safe operation</li>
          <li><strong>Clean Evaporator and Condenser:</strong> Significantly improves cooling efficiency</li>
        </ul>

        <h4>Signs You Need a Professional Technician:</h4>
        <ul>
          <li>Unusual noise from the AC</li>
          <li>Poor cooling despite cleaning</li>
          <li>Water leakage from indoor unit</li>
          <li>Bad smell when operating</li>
          <li>Noticeable increase in electricity bill</li>
        </ul>

        <p><strong>Call us at +966567000317 for professional maintenance service in Jeddah</strong></p>
      `,
      date: '2025-10-10',
      category: 'AC Maintenance',
      image: 'https://i.ibb.co/4gD4hNQQ/image.png'
    },
    {
      id: 2,
      title: 'How to Extend Your Washing Machine Life: Expert Tips',
      excerpt: 'Simple steps you can follow to keep your washing machine running efficiently for years',
      content: `
        <h3>Daily Washing Machine Care</h3>
        <p>An automatic washing machine is an important investment in your home, and proper care ensures its longevity.</p>

        <h4>Proper Usage Tips:</h4>
        <ul>
          <li><strong>Avoid Overloading:</strong> Respect the maximum capacity</li>
          <li><strong>Use Appropriate Detergent:</strong> Use detergents specifically for automatic washers</li>
          <li><strong>Clean the Filter:</strong> Clean the lint filter monthly</li>
          <li><strong>Leave Door Open:</strong> After washing to prevent odors and mold</li>
          <li><strong>Check Hoses:</strong> Ensure no leaks or cracks</li>
        </ul>

        <h4>Regular Maintenance:</h4>
        <ul>
          <li>Clean the drum with specialized cleaner monthly</li>
          <li>Check and clean detergent drawer</li>
          <li>Check legs and ensure machine is level</li>
          <li>Verify no strange sounds</li>
        </ul>

        <h4>When Do You Need a Professional Technician?</h4>
        <ul>
          <li>Machine won't spin clothes</li>
          <li>Water leaking during operation</li>
          <li>High knocking or grinding sounds</li>
          <li>One of the programs stopped working</li>
          <li>Severe vibration during spinning</li>
        </ul>

        <p><strong>Washing Machine Maintenance Service in Jeddah - Call Now: +966567000317</strong></p>
      `,
      date: '2025-10-08',
      category: 'Washing Machine',
      image: 'https://i.ibb.co/hxg9YW3N/image.png'
    },
    {
      id: 3,
      title: 'Importance of AC Gas Refilling and When to Do It',
      excerpt: 'Everything you need to know about refrigerant gas and signs of low levels',
      content: `
        <h3>What is Refrigerant Gas and Why is it Important?</h3>
        <p>Refrigerant gas (Freon) is the main component responsible for cooling air in your AC. Low levels significantly affect AC performance.</p>

        <h4>Signs of Low Refrigerant Gas:</h4>
        <ul>
          <li><strong>Poor Cooling:</strong> AC runs but air isn't cool enough</li>
          <li><strong>Frozen Evaporator:</strong> Ice forming on internal pipes</li>
          <li><strong>High Electricity Bills:</strong> AC runs longer to cool the space</li>
          <li><strong>Water Leakage:</strong> Abnormal leaking from indoor unit</li>
          <li><strong>Hissing Sound:</strong> From outdoor unit</li>
        </ul>

        <h4>Gas Refilling Process:</h4>
        <p>Gas refilling should be done by a professional technician to ensure:</p>
        <ul>
          <li>Using the correct type of gas</li>
          <li>Appropriate quantity for your AC type</li>
          <li>Checking and fixing any leaks before refilling</li>
          <li>Ensuring correct gas pressure</li>
        </ul>

        <h4>How Often Does AC Need Gas Refilling?</h4>
        <p>A properly functioning AC doesn't need frequent gas refills. If you need refills more than once a year, there's a leak that needs fixing.</p>

        <h4>Common Refrigerant Types:</h4>
        <ul>
          <li><strong>R22:</strong> Old type (being phased out)</li>
          <li><strong>R410A:</strong> Most common currently, environmentally friendly</li>
          <li><strong>R32:</strong> Newest and most efficient</li>
        </ul>

        <p><strong>AC Gas Refilling Service in Jeddah - Certified Technicians - Call: +966567000317</strong></p>
      `,
      date: '2025-10-05',
      category: 'AC Maintenance',
      image: 'https://i.ibb.co/4gD4hNQQ/image.png'
    },
    {
      id: 4,
      title: 'Common Washing Machine Problems in Saudi Homes',
      excerpt: 'Most common issues facing washing machine users and how to solve or prevent them',
      content: `
        <h3>Common Problems and Solutions</h3>

        <h4>1. Machine Won't Spin or Drain</h4>
        <p><strong>Possible Causes:</strong></p>
        <ul>
          <li>Overload or unbalanced load</li>
          <li>Motor or belt problem</li>
          <li>Electronic control malfunction</li>
        </ul>
        <p><strong>Solution:</strong> Reduce load and restart. If problem persists, call a technician.</p>

        <h4>2. Water Leaking from Machine</h4>
        <p><strong>Possible Causes:</strong></p>
        <ul>
          <li>Damaged or loose hose</li>
          <li>Damaged door seal</li>
          <li>Drainage system blockage</li>
          <li>Too much detergent foam</li>
        </ul>
        <p><strong>Solution:</strong> Check hoses and seals, use appropriate detergent amount.</p>

        <h4>3. Bad Odors from Machine</h4>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Bacteria and mold buildup</li>
          <li>Detergent residue in drum</li>
          <li>Not ventilating machine after use</li>
        </ul>
        <p><strong>Solution:</strong></p>
        <ul>
          <li>Run hot cleaning cycle with vinegar or specialized cleaner</li>
          <li>Leave door open after use</li>
          <li>Clean detergent drawer regularly</li>
        </ul>

        <h4>4. Violent Shaking During Spin</h4>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Machine not level</li>
          <li>Unbalanced load</li>
          <li>Machine legs not secured</li>
        </ul>
        <p><strong>Solution:</strong> Adjust machine level, redistribute clothes.</p>

        <h4>5. Machine Won't Drain Water</h4>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Blocked lint filter</li>
          <li>Blocked drain hose</li>
          <li>Faulty drain pump</li>
        </ul>
        <p><strong>Solution:</strong> Clean filter and hose. If problem persists, call technician.</p>

        <h4>Prevention Tips:</h4>
        <ul>
          <li>Clean filter monthly</li>
          <li>Avoid overloading</li>
          <li>Use quality detergents</li>
          <li>Check hoses regularly</li>
          <li>Ventilate machine after each use</li>
        </ul>

        <p><strong>All Washing Machine Repairs in Jeddah - Home Service - Call: +966567000317</strong></p>
      `,
      date: '2025-10-02',
      category: 'Washing Machine',
      image: 'https://i.ibb.co/hxg9YW3N/image.png'
    },
    {
      id: 5,
      title: 'Best Times to Clean Your AC in Jeddah',
      excerpt: 'When should you clean your AC for best performance and electricity savings?',
      content: `
        <h3>Optimal Timing for AC Cleaning</h3>

        <h4>Before Summer Starts (March - April)</h4>
        <p>This is the best time for comprehensive AC cleaning before intensive use:</p>
        <ul>
          <li>Clean indoor and outdoor units</li>
          <li>Check refrigerant gas level</li>
          <li>Clean or replace filters</li>
          <li>Check electrical connections</li>
          <li>Test performance and efficiency</li>
        </ul>

        <h4>During Summer (Monthly)</h4>
        <p>Routine cleaning you can do yourself:</p>
        <ul>
          <li>Clean filters every 2-4 weeks</li>
          <li>Wipe outdoor unit from dust</li>
          <li>Check water drainage</li>
          <li>Monitor any strange sounds</li>
        </ul>

        <h4>End of Summer (September - October)</h4>
        <p>Comprehensive cleaning before off-season:</p>
        <ul>
          <li>Deep clean units</li>
          <li>Completely dry the AC</li>
          <li>Cover outdoor unit (optional)</li>
          <li>General inspection and repair any issues</li>
        </ul>

        <h4>Signs You Need Immediate Cleaning:</h4>
        <ul>
          <li>Bad smell when operating</li>
          <li>Weak airflow</li>
          <li>Unusual sound</li>
          <li>Water dripping from inside</li>
          <li>Noticeable increase in electricity bill</li>
        </ul>

        <h4>Benefits of Regular Cleaning:</h4>
        <ul>
          <li><strong>Save 15-30% on electricity consumption</strong></li>
          <li>Improve home air quality</li>
          <li>Extend AC lifespan</li>
          <li>Avoid sudden breakdowns</li>
          <li>Faster and more efficient cooling</li>
        </ul>

        <h4>Professional Cleaning Service Includes:</h4>
        <ul>
          <li>Steam cleaning evaporator and condenser</li>
          <li>Sanitizing and disinfecting filters</li>
          <li>Cleaning fan and blades</li>
          <li>Checking and cleaning drainage pipes</li>
          <li>Comprehensive inspection of all parts</li>
        </ul>

        <p><strong>Book Your AC Cleaning Appointment Now in Jeddah - Professional Service - Call: +966567000317</strong></p>
      `,
      date: '2025-09-28',
      category: 'AC Maintenance',
      image: 'https://i.ibb.co/4gD4hNQQ/image.png'
    }
  ]
};

const updateContent = () => {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
};

const setupLanguageSwitcher = () => {
  const languageSwitch = document.getElementById('languageSwitch');

  if (languageSwitch) {
    languageSwitch.addEventListener('change', (e) => {
      const newLang = e.target.checked ? 'en' : 'ar';
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

      i18next.changeLanguage(newLang).then(() => {
        updateContent();
        renderBlogPosts();
      });
    });
  }
};

const createBlogCard = (post) => {
  const lang = i18next.language;
  return `
    <div class="col-lg-4 col-md-6">
      <article class="card h-100 border-0 shadow-sm blog-card">
        <img src="${post.image}" class="card-img-top" alt="${post.title}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <div class="mb-2">
            <span class="badge bg-primary">${post.category}</span>
            <small class="text-muted ms-2">${post.date}</small>
          </div>
          <h3 class="h5 card-title">${post.title}</h3>
          <p class="card-text text-muted">${post.excerpt}</p>
          <button class="btn btn-outline-primary mt-auto" onclick="showFullPost(${post.id})">
            ${lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
          </button>
        </div>
      </article>
    </div>
  `;
};

const showFullPost = (postId) => {
  const lang = i18next.language;
  const post = blogPosts[lang].find(p => p.id === postId);

  if (!post) return;

  const modal = document.createElement('div');
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">${post.title}</h2>
          <button type="button" class="btn-close" onclick="this.closest('.modal').remove()"></button>
        </div>
        <div class="modal-body">
          <img src="${post.image}" class="img-fluid rounded mb-4" alt="${post.title}">
          <div class="mb-3">
            <span class="badge bg-primary">${post.category}</span>
            <small class="text-muted ms-2">${post.date}</small>
          </div>
          ${post.content}
        </div>
        <div class="modal-footer">
          <a href="tel:+966567000317" class="btn btn-primary">
            <i class="bi bi-telephone-fill me-2"></i>
            ${lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
          </a>
          <a href="https://wa.me/966567000317" class="btn btn-success">
            <i class="bi bi-whatsapp me-2"></i>
            ${lang === 'ar' ? 'واتساب' : 'WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
};

window.showFullPost = showFullPost;

const renderBlogPosts = () => {
  const container = document.getElementById('blogContainer');
  if (!container) return;

  const lang = i18next.language;
  const posts = blogPosts[lang];

  container.innerHTML = posts.map(post => createBlogCard(post)).join('');
};

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  updateContent();
  setupLanguageSwitcher();
  renderBlogPosts();

  // Initialize analytics tracking
  initAnalytics();
  trackScrollDepth();
  trackTimeOnPage();
});
