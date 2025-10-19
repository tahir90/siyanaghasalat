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


const initMap = () => {
  if (typeof L !== 'undefined') {
    const map = L.map('map').setView([21.5169, 39.2192], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([21.5169, 39.2192]).addTo(map)
      .bindPopup('<b>Jeddah</b><br>Saudi Arabia')
      .openPopup();
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  updateContent();
  setupLanguageSwitcher();
  renderServices();
  initMap();
});
