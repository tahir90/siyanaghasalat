import './style.css';
import { initAnalytics, trackScrollDepth, trackTimeOnPage } from './analytics.js';

// Initialize brand page tracking
document.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
  trackScrollDepth();
  trackTimeOnPage();

  console.log('Brand page initialized');
});
