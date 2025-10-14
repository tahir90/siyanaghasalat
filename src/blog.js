import i18next, { initI18n } from './i18n.js';
import './style.css';

const blogPosts = {
  ar: [
    {
      id: 1,
      title: 'دليل شامل لصيانة المكيفات في جدة خلال فصل الصيف',
      excerpt: 'تعرف على أهم النصائح للحفاظ على مكيفك يعمل بكفاءة عالية خلال أشهر الصيف الحارة في جدة',
      content: `
        <h3>لماذا تعتبر صيانة المكيفات مهمة في جدة؟</h3>
        <p>مع درجات الحرارة العالية في جدة، يعمل المكيف بشكل مستمر مما يتطلب صيانة دورية لضمان كفاءته.</p>

        <h4>نصائح مهمة للصيانة:</h4>
        <ul>
          <li><strong>تنظيف الفلاتر شهرياً:</strong> الفلاتر النظيفة تضمن تدفق هواء أفضل وتقلل استهلاك الكهرباء</li>
          <li><strong>فحص غاز التبريد:</strong> نقص الغاز يؤدي لضعف التبريد وزيادة استهلاك الطاقة</li>
          <li><strong>تنظيف الوحدة الخارجية:</strong> إزالة الأتربة والأوساخ المتراكمة</li>
          <li><strong>فحص التوصيلات الكهربائية:</strong> للتأكد من سلامة التشغيل</li>
          <li><strong>تنظيف المبخر والمكثف:</strong> يحسن كفاءة التبريد بشكل كبير</li>
        </ul>

        <h4>علامات تحتاج معها لفني متخصص:</h4>
        <ul>
          <li>صوت غير طبيعي من المكيف</li>
          <li>ضعف التبريد رغم التنظيف</li>
          <li>تسرب المياه من الوحدة الداخلية</li>
          <li>رائحة كريهة عند التشغيل</li>
          <li>ارتفاع فاتورة الكهرباء بشكل ملحوظ</li>
        </ul>

        <p><strong>اتصل بنا على +966567000317 لخدمة صيانة احترافية في جدة</strong></p>
      `,
      date: '2025-10-10',
      category: 'صيانة المكيفات',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'كيفية إطالة عمر الغسالة الأوتوماتيكية: نصائح من الخبراء',
      excerpt: 'خطوات بسيطة يمكنك اتباعها للحفاظ على غسالتك تعمل بكفاءة لسنوات طويلة',
      content: `
        <h3>العناية اليومية بالغسالة</h3>
        <p>الغسالة الأوتوماتيكية استثمار مهم في منزلك، والعناية المناسبة تضمن عمرها الطويل.</p>

        <h4>نصائح الاستخدام الصحيح:</h4>
        <ul>
          <li><strong>عدم التحميل الزائد:</strong> احترم السعة القصوى للغسالة</li>
          <li><strong>استخدام المنظف المناسب:</strong> استخدم منظفات مخصصة للغسالات الأوتوماتيكية</li>
          <li><strong>تنظيف الفلتر:</strong> نظف فلتر المصفاة مرة شهرياً</li>
          <li><strong>ترك الباب مفتوحاً:</strong> بعد الغسيل لمنع الروائح والعفن</li>
          <li><strong>فحص الخراطيم:</strong> تأكد من عدم وجود تسريب أو تشققات</li>
        </ul>

        <h4>الصيانة الدورية:</h4>
        <ul>
          <li>تنظيف حوض الغسالة بمنظف مخصص شهرياً</li>
          <li>فحص وتنظيف درج المنظفات</li>
          <li>فحص الأرجل والتأكد من استواء الغسالة</li>
          <li>التحقق من عدم وجود أصوات غريبة</li>
        </ul>

        <h4>متى تحتاج لخدمة فني متخصص؟</h4>
        <ul>
          <li>الغسالة لا تعصر الملابس</li>
          <li>تسرب المياه أثناء التشغيل</li>
          <li>أصوات طرق أو احتكاك عالية</li>
          <li>توقف أحد البرامج عن العمل</li>
          <li>اهتزاز شديد أثناء العصر</li>
        </ul>

        <p><strong>خدمة صيانة الغسالات في جدة - اتصل الآن: +966567000317</strong></p>
      `,
      date: '2025-10-08',
      category: 'صيانة الغسالات',
      image: 'https://images.pexels.com/photos/5591842/pexels-photo-5591842.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'أهمية شحن غاز المكيف وكيفية معرفة موعد الشحن',
      excerpt: 'كل ما تحتاج معرفته عن غاز التبريد وعلامات نقصه في المكيف',
      content: `
        <h3>ما هو غاز التبريد ولماذا هو مهم؟</h3>
        <p>غاز التبريد (الفريون) هو المسؤول الرئيسي عن تبريد الهواء في المكيف. نقصه يؤثر بشكل كبير على أداء المكيف.</p>

        <h4>علامات نقص غاز التبريد:</h4>
        <ul>
          <li><strong>ضعف التبريد:</strong> المكيف يعمل لكن الهواء ليس بارداً كفاية</li>
          <li><strong>تجمد المبخر:</strong> تكون ثلج على الأنابيب الداخلية</li>
          <li><strong>ارتفاع فاتورة الكهرباء:</strong> المكيف يعمل وقت أطول لتبريد المكان</li>
          <li><strong>تسرب المياه:</strong> من الوحدة الداخلية بشكل غير طبيعي</li>
          <li><strong>صوت صفير:</strong> من الوحدة الخارجية</li>
        </ul>

        <h4>عملية شحن الغاز:</h4>
        <p>شحن الغاز يجب أن يتم بواسطة فني متخصص لضمان:</p>
        <ul>
          <li>استخدام النوع الصحيح من الغاز</li>
          <li>الكمية المناسبة حسب نوع المكيف</li>
          <li>فحص وإصلاح أي تسريب قبل الشحن</li>
          <li>التأكد من ضغط الغاز الصحيح</li>
        </ul>

        <h4>كم مرة يحتاج المكيف لشحن الغاز؟</h4>
        <p>المكيف السليم لا يحتاج لشحن غاز بشكل متكرر. إذا احتجت لشحن الغاز أكثر من مرة في السنة، فهذا يعني وجود تسريب يجب إصلاحه.</p>

        <h4>أنواع غاز التبريد الشائعة:</h4>
        <ul>
          <li><strong>R22:</strong> النوع القديم (يتم إيقافه تدريجياً)</li>
          <li><strong>R410A:</strong> الأكثر شيوعاً حالياً، صديق للبيئة</li>
          <li><strong>R32:</strong> الأحدث والأكثر كفاءة</li>
        </ul>

        <p><strong>خدمة شحن غاز المكيفات في جدة - فنيون معتمدون - اتصل: +966567000317</strong></p>
      `,
      date: '2025-10-05',
      category: 'صيانة المكيفات',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'حل مشاكل الغسالة الشائعة في المنازل السعودية',
      excerpt: 'أبرز المشاكل التي تواجه مستخدمي الغسالات وكيفية حلها أو الوقاية منها',
      content: `
        <h3>المشاكل الشائعة وحلولها</h3>

        <h4>1. الغسالة لا تدور أو تعصر</h4>
        <p><strong>الأسباب المحتملة:</strong></p>
        <ul>
          <li>حمولة زائدة أو غير متوازنة</li>
          <li>مشكلة في الموتور أو السير</li>
          <li>عطل في البرمجة الإلكترونية</li>
        </ul>
        <p><strong>الحل:</strong> تقليل الحمولة وإعادة التشغيل. إذا استمرت المشكلة، اتصل بفني متخصص.</p>

        <h4>2. تسرب المياه من الغسالة</h4>
        <p><strong>الأسباب المحتملة:</strong></p>
        <ul>
          <li>خرطوم تالف أو غير محكم</li>
          <li>جوان الباب تالف</li>
          <li>انسداد في نظام الصرف</li>
          <li>استخدام منظف رغوة كثيرة</li>
        </ul>
        <p><strong>الحل:</strong> فحص الخراطيم والجوان، استخدام كمية مناسبة من المنظف.</p>

        <h4>3. روائح كريهة من الغسالة</h4>
        <p><strong>الأسباب:</strong></p>
        <ul>
          <li>تراكم البكتيريا والعفن</li>
          <li>بقايا منظفات في الحوض</li>
          <li>عدم تهوية الغسالة بعد الاستخدام</li>
        </ul>
        <p><strong>الحل:</strong></p>
        <ul>
          <li>تشغيل دورة تنظيف ساخنة بالخل أو منظف مخصص</li>
          <li>ترك الباب مفتوحاً بعد الاستخدام</li>
          <li>تنظيف درج المنظفات بانتظام</li>
        </ul>

        <h4>4. اهتزاز عنيف أثناء العصر</h4>
        <p><strong>الأسباب:</strong></p>
        <ul>
          <li>الغسالة غير مستوية</li>
          <li>حمولة غير متوازنة</li>
          <li>أرجل الغسالة غير مثبتة</li>
        </ul>
        <p><strong>الحل:</strong> ضبط مستوى الغسالة، إعادة توزيع الملابس.</p>

        <h4>5. الغسالة لا تصرف المياه</h4>
        <p><strong>الأسباب:</strong></p>
        <ul>
          <li>انسداد في فلتر المصفاة</li>
          <li>انسداد في خرطوم الصرف</li>
          <li>عطل في مضخة الصرف</li>
        </ul>
        <p><strong>الحل:</strong> تنظيف الفلتر والخرطوم. إذا لم يحل المشكلة، الاتصال بفني.</p>

        <h4>نصائح للوقاية:</h4>
        <ul>
          <li>تنظيف الفلتر شهرياً</li>
          <li>عدم التحميل الزائد</li>
          <li>استخدام منظفات عالية الجودة</li>
          <li>فحص الخراطيم دورياً</li>
          <li>تهوية الغسالة بعد كل استخدام</li>
        </ul>

        <p><strong>إصلاح جميع أعطال الغسالات في جدة - خدمة منازل - اتصل: +966567000317</strong></p>
      `,
      date: '2025-10-02',
      category: 'صيانة الغسالات',
      image: 'https://images.pexels.com/photos/5591842/pexels-photo-5591842.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      date: '2025-09-28',
      category: 'صيانة المكيفات',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      image: 'https://images.pexels.com/photos/5591842/pexels-photo-5591842.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      image: 'https://images.pexels.com/photos/5591842/pexels-photo-5591842.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600'
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
});
