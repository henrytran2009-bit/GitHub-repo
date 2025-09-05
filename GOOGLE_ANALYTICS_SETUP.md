# Google Analytics Setup Guide for TempMail

Your TempMail site is now ready for Google Analytics tracking! Follow these steps to start tracking visitors.

## Step 1: Create a Google Analytics Account

1. **Go to Google Analytics**: Visit [analytics.google.com](https://analytics.google.com)
2. **Sign in**: Use your Google account (create one if needed)
3. **Start for free**: Click "Start measuring" if you're new to Analytics

## Step 2: Set Up Your Property

1. **Create Account**: 
   - Account name: "TempMail" (or your preferred name)
   - Choose your data sharing settings

2. **Create Property**:
   - Property name: "tempmail10min.org"
   - Time zone: Select your timezone
   - Currency: Select your preferred currency

3. **Set Up Data Stream**:
   - Choose "Web"
   - Website URL: `https://tempmail10min.org`
   - Stream name: "TempMail Website"

## Step 3: Get Your Measurement ID

After creating the data stream, you'll see your **Measurement ID** - it looks like: `G-XXXXXXXXXX`

## Step 4: Add the Measurement ID to Replit

1. **Open your Replit project**
2. **Go to the Secrets tab** (left sidebar, lock icon)
3. **Add a new secret**:
   - Key: `VITE_GA_MEASUREMENT_ID`
   - Value: Your Measurement ID (e.g., `G-ABC123DEF4`)

## Step 5: Restart Your Application

After adding the secret, your app will automatically restart and Google Analytics will begin tracking visitors!

## What Gets Tracked

Your TempMail site will automatically track:

### Page Views
- Homepage visits
- Route changes within the app

### User Actions
- **Email Generation**: When users create a temp email
- **Copy Email**: When users copy their email address
- **Message Actions**: Download, delete, and forward emails
- **Timer Extensions**: When users extend their email validity

### Visitor Data
- Number of visitors
- Page views
- Session duration
- Geographic location
- Device and browser info
- Traffic sources (where visitors come from)

## Viewing Your Analytics

1. **Go to Google Analytics**: [analytics.google.com](https://analytics.google.com)
2. **Select your property**: "tempmail10min.org"
3. **View reports**:
   - **Realtime**: See current visitors
   - **Audience**: Learn about your users
   - **Acquisition**: See how people find your site
   - **Behavior**: Understand what users do on your site

## Key Metrics to Monitor

- **Daily Active Users**: How many people use your site daily
- **Page Views**: Total page views and unique page views
- **Session Duration**: How long people stay on your site
- **Bounce Rate**: Percentage of single-page visits
- **Events**: Track temp email generations and user actions

## Helpful Tips

- Analytics data appears within 24-48 hours of setup
- Use "Realtime" reports to see immediate visitor activity
- Set up custom alerts for traffic spikes
- Create goals to track important user actions

---

**Need Help?** If you have questions about Google Analytics or need help interpreting your data, Google provides comprehensive documentation at [support.google.com/analytics](https://support.google.com/analytics).