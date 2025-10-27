import './style.css';
import { initAnalytics, trackScrollDepth, trackTimeOnPage } from './analytics.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Google Analytics tracking
  initAnalytics();
  trackScrollDepth();
  trackTimeOnPage();

  console.log('Website initialized successfully');
});
