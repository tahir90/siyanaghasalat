import i18next from './i18n.js';

const jeddahAreas = [
  'الروضة', 'الحمراء', 'الزهراء', 'السلامة', 'النعيم', 'البلد', 'المرجان',
  'أبحر', 'الشاطئ', 'الصفا', 'المروة', 'الفيصلية', 'الرحاب', 'الأندلس',
  'الربوة', 'الواحة', 'الخالدية', 'النخيل', 'الكرامة', 'العزيزية',
  'البساتين', 'الصحيفة', 'الثغر', 'الكندره', 'الشرفية', 'بريمان',
  'المحمدية', 'النزلة اليمانية', 'البغدادية', 'الهنداوية', 'الصواري',
  'ذهبان', 'ثول', 'العمارية', 'النهضة', 'السنابل', 'الورود',
  'الحمدانية', 'غليل', 'مدائن الفهد', 'الياقوت', 'أم السلم'
];

const jeddahAreasEn = [
  'Al-Rawdah', 'Al-Hamra', 'Al-Zahra', 'Al-Salamah', 'Al-Naeem', 'Al-Balad', 'Al-Marjan',
  'Obhur', 'Beach Areas', 'Al-Safa', 'Al-Marwa', 'Al-Faisaliah', 'Al-Rehab', 'Al-Andalus',
  'Al-Rabwa', 'Al-Wahah', 'Al-Khalidiyah', 'Al-Nakheel', 'Al-Karamah', 'Al-Aziziyah',
  'Al-Basateen', 'Al-Sahifa', 'Al-Thaghr', 'Al-Kandarah', 'Al-Sharafeyah', 'Breeman',
  'Al-Muhammadiyah', 'Al-Nazlah Al-Yamaniyah', 'Al-Baghdadiyah', 'Al-Hindawiyah', 'Al-Sawari',
  'Dhahban', 'Thuwal', 'Al-Ammariyah', 'Al-Nahdah', 'Al-Sanabel', 'Al-Wurud',
  'Al-Hamdaniyah', 'Ghulail', 'Madayen Al-Fahd', 'Al-Yaqout', 'Umm Al-Salam'
];

export const renderServiceAreas = () => {
  const container = document.getElementById('serviceAreasContainer');
  if (!container) return;

  const updateAreas = () => {
    const lang = i18next.language;
    const areas = lang === 'ar' ? jeddahAreas : jeddahAreasEn;

    container.innerHTML = areas.map(area => `
      <span class="badge bg-primary bg-gradient px-3 py-2 fs-6">${area}</span>
    `).join('');
  };

  updateAreas();
  i18next.on('languageChanged', updateAreas);
};
