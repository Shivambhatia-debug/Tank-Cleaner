# Google Apps Script Setup Guide

## Step 1: Create Google Sheet
1. Go to https://sheets.google.com/
2. Create a new spreadsheet (name it "Cleaning Hero Submissions")
3. Keep it open - we'll need the ID

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Tools → Apps Script**
2. This will open a new tab with Google Apps Script editor
3. Delete the default code and paste the code from `GOOGLE_APPS_SCRIPT.gs` file
4. Click **Save** (name it "Contact Form Handler")

## Step 3: Deploy as Web App
1. Click the **Deploy** button (top right)
2. Select **"New deployment"**
3. Click the **Select type** icon → Choose **"Web app"**
4. Configure as follows:
   - **Execute as:** Your Gmail account (kccdbg@gmail.com)
   - **Who has access:** Anyone
5. Click **Deploy**
6. Grant permissions when prompted
7. **Copy the deployment URL** - you'll need this!

The URL should look like:
```
https://script.google.com/macros/d/{SCRIPT_ID}/usep
```

## Step 4: Update Tank Cleaner Website
1. Open `.env.local` in VS Code
2. Add the deployment URL:
```
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/d/YOUR_SCRIPT_ID/usep
```

3. Then update the form handler in `src/app/api/contact/route.ts` to use this URL

## Step 5: Test
1. Go to http://localhost:3002
2. Fill the contact form
3. Click Submit
4. Check your Google Sheet - data should appear automatically!
5. Check kccdbg@gmail.com for email notification

---

## Features:
✅ Data saved to Google Sheets automatically
✅ Email notifications to kccdbg@gmail.com
✅ Timestamp recorded for each submission
✅ All fields logged (Name, Phone, Email, Service, Message)
✅ Error handling and logging

---

## Troubleshooting:
- **Deployment URL not working?** → Re-deploy with "New deployment"
- **Email not received?** → Check spam folder, verify email address is correct
- **Data not appearing?** → Check Google Sheet name matches "Contact Submissions"
- **Permission errors?** → Make sure you deployed as "Anyone" has access

---

## Optional: Add More Functionality
You can modify the Google Apps Script to:
- Send SMS notifications
- Create calendar events
- Generate PDF reports
- Integrate with CRM

Just add the code to the Apps Script file!
