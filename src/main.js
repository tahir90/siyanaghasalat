import i18next, { initI18n } from './i18n.js';
import { renderServices } from './services.js';
import './style.css';

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
      });
    });
  }
};

const setupContactForm = () => {
  const form = document.getElementById('contactForm');

  const updateFormLabels = () => {
    if (form) {
      form.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
      });
    }
  };

  if (form) {
    updateFormLabels();
    i18next.on('languageChanged', updateFormLabels);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (form.checkValidity()) {
        console.log('Form submitted');
      }

      form.classList.add('was-validated');
    });
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  updateContent();
  setupLanguageSwitcher();
  renderServices();
  setupContactForm();
});
