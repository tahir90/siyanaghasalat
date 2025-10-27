import './style.css';
import { initAnalytics, trackScrollDepth, trackTimeOnPage } from './analytics.js';

// Blog posts data
export const blogPosts = {
  en: [],
  ar: []
};

// Initialize blog page tracking
document.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
  trackScrollDepth();
  trackTimeOnPage();

  console.log('Blog page initialized');
});
