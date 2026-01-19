# Google Sheets Form Integration Setup

## Quick Setup with Formspree (Easiest Method)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Sign up with your email (kccdbg@gmail.com)
3. Create a new form (you can name it "Cleaning Hero Contact Form")

### Step 2: Connect to Google Sheets
1. In Formspree dashboard, go to your form settings
2. Click "Integrations" → "Google Sheets"
3. Authorize and select/create a Google Sheet to store responses
4. Copy your Formspree Form ID (should look like: f/xxxxx)

### Step 3: Update Environment Variables
1. Open `.env.local` file in the project root (create if doesn't exist)
2. Add:
```
NEXT_PUBLIC_FORMSPREE_ID=f/your_formspree_id
```

### Step 4: Test
1. Go to http://localhost:3002
2. Scroll to the contact form
3. Fill it out and click "Submit Request"
4. You should see the submission in your Google Sheet + email notification

---

## Alternative: Direct Google Sheets API (Advanced)

If you prefer direct Google Sheets API integration:

1. Create a Google Cloud project at https://console.cloud.google.com/
2. Enable "Google Sheets API"
3. Create a service account and download credentials JSON
4. Get your API key and Sheet ID
5. Update `.env.local` with the credentials

---

## Features Implemented

✅ Form data saved to Google Sheets
✅ Email field is optional
✅ All form data sent to WhatsApp chat on submit
✅ Email notifications to kccdbg@gmail.com
✅ Loading states and success/error messages
✅ Form auto-resets after submission

---

## Email Updated
All email references changed from `info@guptacleaningservice.com` to `kccdbg@gmail.com`
