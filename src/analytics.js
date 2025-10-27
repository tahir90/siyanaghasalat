// Google Analytics 4 Event Tracking
// This script tracks all user interactions across the website

// Initialize tracking on page load
export function initAnalytics() {
  // Track page view with referrer and landing page
  trackPageView();

  // Track traffic source
  trackTrafficSource();

  // Add click tracking to all links and buttons
  addClickTracking();
}

// Track page view
function trackPageView() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_referrer: document.referrer || 'direct'
    });
  }
}

// Track traffic source and UTM parameters
function trackTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer;
  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');
  const utmTerm = params.get('utm_term');
  const utmContent = params.get('utm_content');

  if (typeof gtag !== 'undefined') {
    // Track UTM parameters if present
    if (utmSource || utmMedium || utmCampaign) {
      gtag('event', 'utm_tracking', {
        utm_source: utmSource || 'none',
        utm_medium: utmMedium || 'none',
        utm_campaign: utmCampaign || 'none',
        utm_term: utmTerm || 'none',
        utm_content: utmContent || 'none'
      });
    }

    // Track referrer domain
    if (referrer) {
      try {
        const referrerDomain = new URL(referrer).hostname;
        gtag('event', 'referrer_tracking', {
          referrer_url: referrer,
          referrer_domain: referrerDomain
        });
      } catch (e) {
        // Invalid referrer URL
      }
    }

    // Track landing page
    gtag('event', 'landing_page', {
      landing_page: window.location.pathname,
      landing_url: window.location.href
    });

    // Store traffic source in session storage for attribution
    if (!sessionStorage.getItem('traffic_source')) {
      const source = utmSource || (referrer ? 'referral' : 'direct');
      sessionStorage.setItem('traffic_source', source);
      sessionStorage.setItem('landing_page', window.location.pathname);
    }
  }
}

// Add click tracking to all interactive elements
function addClickTracking() {
  // Track all phone number clicks (conversion event)
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
      const location = getElementLocation(this);
      trackConversion('Phone', location, this.href);
    });
  });

  // Track all WhatsApp clicks (conversion event)
  document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', function() {
      const location = getElementLocation(this);
      trackConversion('WhatsApp', location, this.href);
    });
  });

  // Track navigation links
  document.querySelectorAll('nav a, .navbar a').forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('Navigation', 'Click', this.textContent.trim() || this.href);
    });
  });

  // Track footer links
  document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', function() {
      const isConversion = this.href.includes('tel:') || this.href.includes('wa.me') || this.href.includes('whatsapp');
      if (!isConversion) {
        trackEvent('Footer', 'Link Click', this.textContent.trim() || this.href);
      }
    });
  });

  // Track brand page links
  document.querySelectorAll('a[href*="washing-machine-repair"], a[href*="صيانة-غسالات"]').forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('Brand Page', 'Click', this.href);
    });
  });

  // Track blog post clicks
  document.querySelectorAll('a[href*="blog"]').forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('Blog', 'Post Click', this.textContent.trim() || this.href);
    });
  });

  // Track all buttons
  document.querySelectorAll('button, .btn').forEach(button => {
    button.addEventListener('click', function() {
      const location = getElementLocation(this);
      const label = this.textContent.trim() || this.getAttribute('aria-label') || 'Button';
      trackEvent('Button', 'Click', `${location} - ${label}`);
    });
  });

  // Track language toggle
  document.querySelectorAll('#languageSwitch, .language-switch input').forEach(toggle => {
    toggle.addEventListener('change', function() {
      const language = this.checked ? 'English' : 'Arabic';
      trackEvent('Language', 'Toggle', language);
    });
  });

  // Track service cards
  document.querySelectorAll('.service-card, [class*="service"]').forEach(card => {
    card.addEventListener('click', function() {
      const serviceName = this.querySelector('h3, h4, .card-title')?.textContent.trim() || 'Service';
      trackEvent('Service', 'Card Click', serviceName);
    });
  });

  // Track form submissions
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
      const formName = this.getAttribute('name') || this.id || 'Contact Form';
      trackEvent('Form', 'Submit', formName);
    });
  });
}

// Track conversion events (Phone & WhatsApp)
export function trackConversion(type, location, value) {
  if (typeof gtag !== 'undefined') {
    // Standard conversion event
    gtag('event', 'conversion', {
      event_category: 'Lead',
      event_label: `${type} - ${location}`,
      value: 1
    });

    // Google Ads conversion event
    gtag('event', 'generate_lead', {
      currency: 'SAR',
      value: 100,
      lead_type: type,
      lead_source: location
    });

    // Custom conversion event with more details
    gtag('event', `${type.toLowerCase()}_click`, {
      click_location: location,
      click_value: value,
      traffic_source: sessionStorage.getItem('traffic_source') || 'unknown',
      landing_page: sessionStorage.getItem('landing_page') || 'unknown'
    });

    console.log(`Conversion tracked: ${type} from ${location}`);
  }
}

// Track custom events
export function trackEvent(category, action, label, value) {
  if (typeof gtag !== 'undefined') {
    const eventData = {
      event_category: category,
      event_label: label
    };

    if (value !== undefined) {
      eventData.value = value;
    }

    gtag('event', action, eventData);
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
  }
}

// Helper function to determine element location
function getElementLocation(element) {
  if (element.closest('header') || element.closest('nav') || element.closest('.navbar')) {
    return 'Header';
  } else if (element.closest('footer')) {
    return 'Footer';
  } else if (element.closest('.hero')) {
    return 'Hero Section';
  } else if (element.closest('main')) {
    return 'Main Content';
  } else {
    return 'Page';
  }
}

// Track scroll depth
let maxScrollDepth = 0;
export function trackScrollDepth() {
  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercentage > maxScrollDepth && scrollPercentage % 25 === 0) {
      maxScrollDepth = scrollPercentage;
      trackEvent('Engagement', 'Scroll', `${scrollPercentage}%`);
    }
  });
}

// Track time on page
export function trackTimeOnPage() {
  let startTime = Date.now();

  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('Engagement', 'Time on Page', document.title, timeSpent);
  });
}
