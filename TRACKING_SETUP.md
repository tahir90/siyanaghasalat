# Google Tracking Setup Guide

This website is configured with Google Tag Manager (GTM), Google Analytics 4 (GA4), and Google Ads conversion tracking for comprehensive tracking and optimization.

## 🎯 What's Already Set Up

### 1. Google Analytics 4 (GA4)
- **Current ID**: `G-7M54T7XGVN`
- **Status**: ✅ Active and tracking
- **Tracks**: Page views, user behavior, traffic sources, engagement metrics

### 2. Google Tag Manager (GTM)
- **Placeholder**: `GTM-XXXXXXX`
- **Status**: ⚠️ Needs your GTM container ID
- **Purpose**: Centralized tag management, easier tracking updates

### 3. Google Ads Conversion Tracking
- **Placeholder**: `AW-XXXXXXXXXX`
- **Status**: ⚠️ Needs your Google Ads conversion IDs
- **Purpose**: Track phone calls, WhatsApp clicks, and form submissions as conversions

## 📋 Setup Instructions

### Step 1: Set Up Google Tag Manager (Optional but Recommended)

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container for your website
3. Copy your GTM container ID (format: `GTM-XXXXXXX`)
4. Replace `GTM-XXXXXXX` in the following files:
   - `index.html` (line 43)
   - `index.html` (line 227)

### Step 2: Set Up Google Ads Conversion Tracking

1. **Get Your Google Ads Conversion ID:**
   - Log in to [Google Ads](https://ads.google.com/)
   - Click **Tools & Settings** → **Conversions**
   - Create new conversion actions for:
     - Phone Calls (value: 100 SAR)
     - WhatsApp Messages (value: 100 SAR)
     - Form Submissions (value: 150 SAR)
   - Copy the Conversion ID (format: `AW-XXXXXXXXXX`)
   - Copy each Conversion Label (format: `xxxxx`, `yyyyy`, `zzzzz`)

2. **Update Your Website:**
   Replace in `index.html` (around line 61):
   ```javascript
   // Google Ads Conversion Tracking
   gtag('config', 'AW-XXXXXXXXXX');  // Replace with your Ads account ID
   ```

   Replace in conversion functions (lines 74, 90, 106):
   ```javascript
   'send_to': 'AW-XXXXXXXXXX/xxxxx',  // Phone call conversion
   'send_to': 'AW-XXXXXXXXXX/yyyyy',  // WhatsApp conversion
   'send_to': 'AW-XXXXXXXXXX/zzzzz',  // Form submission conversion
   ```

## 🔍 What's Being Tracked

### Automatic Tracking (via analytics.js)
- ✅ Page views with referrer
- ✅ Traffic source (UTM parameters, direct, referral)
- ✅ Landing pages
- ✅ Phone call clicks (all `tel:` links)
- ✅ WhatsApp clicks (all `wa.me` links)
- ✅ Navigation link clicks
- ✅ Footer link clicks
- ✅ Brand page visits
- ✅ Blog post clicks
- ✅ Button clicks
- ✅ Language toggle
- ✅ Service card interactions
- ✅ Form submissions
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Time on page

### Conversion Events
The following are tracked as conversions:
1. **Phone Call Click** - Value: 100 SAR
2. **WhatsApp Click** - Value: 100 SAR
3. **Form Submission** - Value: 150 SAR

### Enhanced E-commerce Events
- `generate_lead` - When users click phone/WhatsApp

## 🎨 Event Structure

### Conversion Event Example
```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/xxxxx',
  'value': 100.0,
  'currency': 'SAR',
  'event_callback': callback
});
```

### Lead Generation Event
```javascript
gtag('event', 'generate_lead', {
  currency: 'SAR',
  value: 100,
  lead_type: 'Phone' or 'WhatsApp',
  lead_source: 'Header', 'Footer', 'Hero Section', etc.
});
```

## 🚀 Testing Your Setup

### 1. Test Google Analytics
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Visit your website
3. Open browser console
4. You should see GA events firing

### 2. Test Google Tag Manager
1. Install [Google Tag Assistant](https://tagassistant.google.com/)
2. Visit your website
3. Check if GTM container is loading
4. Verify tags are firing

### 3. Test Google Ads Conversions
1. Click a phone number link
2. Go to Google Ads → Tools → Conversions
3. Within 24 hours, you should see test conversions
4. Use [Google Ads Conversion Tracking Tag](https://support.google.com/google-ads/answer/6331314) for testing

## 📊 Expected Results

### Google Analytics 4
- Real-time visitor data
- Traffic sources breakdown
- User behavior flow
- Engagement metrics
- Conversion funnels

### Google Ads
- Conversion tracking for phone calls
- Conversion tracking for WhatsApp
- Conversion tracking for form submissions
- ROI measurement
- Campaign optimization data

## 🔧 Maintenance

### Monthly Tasks
- Review conversion data
- Check for tracking errors
- Optimize conversion values if needed
- Add new tracking as site grows

### Quarterly Tasks
- Audit all tracking codes
- Update conversion goals
- Review attribution models
- Clean up unused tags in GTM

## 📞 Support

For tracking issues:
1. Check browser console for errors
2. Verify IDs are correct
3. Test in incognito mode
4. Clear cache and cookies
5. Wait 24-48 hours for data to appear

## 🎯 Quick Replace Checklist

Before going live, replace these placeholders:

- [ ] `GTM-XXXXXXX` → Your GTM Container ID (2 places)
- [ ] `AW-XXXXXXXXXX` → Your Google Ads Account ID (4 places)
- [ ] `AW-XXXXXXXXXX/xxxxx` → Phone conversion ID
- [ ] `AW-XXXXXXXXXX/yyyyy` → WhatsApp conversion ID
- [ ] `AW-XXXXXXXXXX/zzzzz` → Form submission conversion ID

## 📝 Files to Update

1. **index.html** - Main tracking setup
2. **blog.html** - If separate blog page
3. **All brand pages** - Samsung, LG, Toshiba, Hitachi pages
4. **404.html** - Error page tracking

Note: Google Analytics (G-7M54T7XGVN) is already working and doesn't need any changes.

---

**Important**: After updating the IDs, rebuild the project with `npm run build` to ensure all changes are applied.
