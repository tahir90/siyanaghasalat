import i18next, { initI18n } from './i18n.js';

const updateContent = () => {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = i18next.t(key);

    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });

  // Update HTML lang and dir attributes
  const currentLang = i18next.language;
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
};

const setupLanguageToggle = () => {
  const languageSwitch = document.getElementById('languageSwitch');

  if (languageSwitch) {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18next.changeLanguage(savedLang);
      languageSwitch.checked = savedLang === 'en';
      updateContent();
    }

    languageSwitch.addEventListener('change', (e) => {
      const newLang = e.target.checked ? 'en' : 'ar';
      i18next.changeLanguage(newLang);
      localStorage.setItem('language', newLang);
      updateContent();
    });
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();

  // Check if language was set on main page
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    await i18next.changeLanguage(savedLang);
  }

  updateContent();
  setupLanguageToggle();
});
