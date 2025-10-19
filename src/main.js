import i18next, { initI18n } from './i18n.js';
import { renderServices } from './services.js';
import { renderFAQ, getFAQSchema } from './faq.js';
import { renderServiceAreas } from './service-areas.js';
import { renderTestimonials, getReviewSchema } from './testimonials.js';
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

const injectSchemas = () => {
  const faqSchema = getFAQSchema();
  const reviewSchemas = getReviewSchema();

  const faqScript = document.createElement('script');
  faqScript.type = 'application/ld+json';
  faqScript.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(faqScript);

  const reviewScript = document.createElement('script');
  reviewScript.type = 'application/ld+json';
  reviewScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "review": reviewSchemas
  });
  document.head.appendChild(reviewScript);
};

const setupStickyCTA = () => {
  const stickyCTA = document.getElementById('stickyCTA');
  const navWhatsappBtn = document.getElementById('navWhatsappBtn');
  const heroSection = document.querySelector('.hero-section');

  if (!stickyCTA || !heroSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          stickyCTA.classList.remove('d-none');
          stickyCTA.classList.add('d-flex');
          if (navWhatsappBtn) {
            navWhatsappBtn.classList.add('d-none');
          }
        } else {
          stickyCTA.classList.remove('d-flex');
          stickyCTA.classList.add('d-none');
          if (navWhatsappBtn) {
            navWhatsappBtn.classList.remove('d-none');
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px'
    }
  );

  observer.observe(heroSection);
};

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  updateContent();
  setupLanguageSwitcher();
  renderServices();
  renderFAQ();
  renderServiceAreas();
  renderTestimonials();
  initMap();
  injectSchemas();
  setupStickyCTA();
});
