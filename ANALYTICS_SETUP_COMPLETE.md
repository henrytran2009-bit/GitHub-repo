# Complete Google Analytics Setup for TempMail

## Quick Setup (5 minutes)

### ✅ ALREADY DONE: 
Your TempMail site is already integrated with Google Analytics! I've added all the tracking code.

### 🎯 WHAT YOU NEED TO DO:

## Step 1: Create Google Analytics Account
**Click this link:** [analytics.google.com](https://analytics.google.com)

1. **Sign in** with your Google account (or create one)
2. **Click "Start measuring"**
3. **Account Setup:**
   - Account name: `TempMail`
   - Leave data sharing settings as default
   - Click **"Next"**

## Step 2: Create Property
1. **Property name:** `tempmail10min.org`
2. **Time zone:** Select your timezone
3. **Currency:** Select your currency
4. **Industry:** Technology or Internet
5. **Business size:** Small
6. Click **"Next"**

## Step 3: Create Data Stream
1. **Choose platform:** Click **"Web"**
2. **Website URL:** `https://tempmail10min.org`
3. **Stream name:** `TempMail Website`
4. Click **"Create stream"**

## Step 4: Get Your Measurement ID
After creating the stream, you'll see:
```
Measurement ID: G-XXXXXXXXXX
```
**COPY THIS ID** - you'll need it in the next step!

## Step 5: Add ID to Your Replit Project
1. **In your Replit project, click the Secrets tab** (🔒 lock icon on left sidebar)
2. **Click "Add new secret"**
3. **Enter:**
   - Key: `VITE_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (paste your actual ID)
4. **Click "Add secret"**

## Step 6: Verify It's Working
1. **Your app will restart automatically**
2. **Open your TempMail site in a new tab**
3. **In Google Analytics, go to "Realtime" → "Overview"**
4. **You should see 1 active user (that's you!)**

---

## 🎉 THAT'S IT! 

Your analytics are now tracking:
- **Visitors:** How many people visit your site
- **Page views:** How many pages they look at
- **User actions:** Email creation, copying, downloads, etc.
- **Traffic sources:** Where visitors come from
- **Geographic data:** Which countries visitors are from

## View Your Data

**Real-time data:** Go to Google Analytics → Realtime
**Daily reports:** Go to Google Analytics → Reports → Acquisition

---

## Troubleshooting

**❌ Not seeing data?**
1. Make sure you added the secret correctly in Replit
2. The Measurement ID should start with "G-"
3. Wait 15-30 minutes for data to appear
4. Try visiting your site in an incognito/private browser window

**❌ Can't find the Secrets tab?**
- Look for the 🔒 lock icon in the left sidebar of your Replit project

**❌ Getting errors?**
- Double-check your Measurement ID format: `G-XXXXXXXXXX`
- Make sure there are no extra spaces when pasting

---

**Need help?** Let me know if you get stuck on any step!