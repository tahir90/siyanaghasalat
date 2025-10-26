# 🎯 How to Get Your Google Ads Conversion Labels

Your Google Ads account ID **AW-17664041800** has been added to your website!

## ⚠️ Next Step: Add Conversion Labels

You still need to replace the placeholder conversion labels (`xxxxx`, `yyyyy`, `zzzzz`) with your actual conversion labels from Google Ads.

---

## 📋 Step-by-Step Instructions

### Step 1: Go to Google Ads Conversions

1. Log in to [Google Ads](https://ads.google.com/)
2. Click **Tools & Settings** (wrench icon in top right)
3. Under "Measurement", click **Conversions**

### Step 2: Create or Find Your Conversion Actions

You need to create 3 conversion actions (or use existing ones):

#### 1️⃣ Phone Call Conversion
- Click **+ New conversion action**
- Select **Website**
- Choose **Phone calls** or **Manually create conversion action**
- Set:
  - Name: `Phone Call Click`
  - Value: `100 SAR`
  - Count: `Every`
  - Category: `Lead`
- Click **Create and Continue**
- **Copy the Conversion Label** (looks like: `Ab1CdEfG2Hi`)

#### 2️⃣ WhatsApp Conversion
- Create another conversion action
- Set:
  - Name: `WhatsApp Click`
  - Value: `100 SAR`
  - Count: `Every`
  - Category: `Lead`
- **Copy the Conversion Label**

#### 3️⃣ Form Submission Conversion
- Create another conversion action
- Set:
  - Name: `Form Submission`
  - Value: `150 SAR`
  - Count: `Every`
  - Category: `Lead`
- **Copy the Conversion Label**

### Step 3: Find Your Conversion Labels

If you already have conversion actions set up:

1. In the Conversions page, click on each conversion action
2. Click **Tag setup** → **Use Google tag**
3. You'll see code like this:
   ```javascript
   gtag('event', 'conversion', {
     'send_to': 'AW-17664041800/Ab1CdEfG2Hi'
   });
   ```
4. The part after the slash (`Ab1CdEfG2Hi`) is your conversion label
5. Copy each label

### Step 4: Update Your Website Files

Replace the placeholders in **index.html** and **blog.html**:

#### Current placeholders to replace:
```javascript
// Line 74 in both files:
'send_to': 'AW-17664041800/xxxxx',     // Replace xxxxx with Phone label

// Line 90 in both files:
'send_to': 'AW-17664041800/yyyyy',     // Replace yyyyy with WhatsApp label

// Line 106 in both files:
'send_to': 'AW-17664041800/zzzzz',     // Replace zzzzz with Form label
```

#### Example of what it should look like:
```javascript
// Phone Call Conversion
'send_to': 'AW-17664041800/Ab1CdEfG2Hi',

// WhatsApp Conversion
'send_to': 'AW-17664041800/Xy3ZaBcD4Ef',

// Form Submission Conversion
'send_to': 'AW-17664041800/Mn5OpQrS6Tu',
```

---

## ✅ Quick Checklist

- [ ] Created or found 3 conversion actions in Google Ads
- [ ] Copied all 3 conversion labels
- [ ] Replaced `xxxxx` with phone conversion label (2 places)
- [ ] Replaced `yyyyy` with WhatsApp conversion label (2 places)
- [ ] Replaced `zzzzz` with form conversion label (2 places)
- [ ] Run `npm run build`
- [ ] Deploy to your hosting
- [ ] Test by clicking phone/WhatsApp buttons on your site
- [ ] Check Google Ads for conversions (wait 24 hours)

---

## 🔍 Where to Replace

### Files to update:
1. **index.html**
   - Line 74: Phone conversion
   - Line 90: WhatsApp conversion
   - Line 106: Form conversion

2. **blog.html**
   - Line 58: Phone conversion
   - Line 74: WhatsApp conversion
   - Line 90: Form conversion

---

## 💡 Pro Tip

You can use Find & Replace in your code editor:

1. Open index.html
2. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
3. Find: `AW-17664041800/xxxxx`
4. Replace with: `AW-17664041800/YOUR_PHONE_LABEL`
5. Replace all
6. Repeat for `yyyyy` and `zzzzz`
7. Do the same for blog.html

---

## 📞 Current Setup

✅ **Google Ads Account ID**: `AW-17664041800` (DONE)
⚠️ **Phone Conversion Label**: `xxxxx` (NEEDS UPDATE)
⚠️ **WhatsApp Conversion Label**: `yyyyy` (NEEDS UPDATE)
⚠️ **Form Conversion Label**: `zzzzz` (NEEDS UPDATE)

---

## 🎉 After You're Done

Once you've added the conversion labels:

1. Build: `npm run build`
2. Deploy the `dist/` folder
3. Test your website
4. Click phone and WhatsApp buttons
5. Check Google Ads → Conversions section after 24 hours

You should see conversions being tracked! 🚀

---

## ❓ Questions?

**Phone**: +966503753966
**WhatsApp**: https://wa.me/966503753966
