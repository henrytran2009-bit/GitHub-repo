# Google AdSense Integration Guide

## Overview
This guide will help you set up Google AdSense monetization for your TempMail application.

## Prerequisites
1. A Google AdSense account (apply at https://www.google.com/adsense/)
2. Your website must be approved by AdSense
3. Access to your AdSense dashboard

## Setup Steps

### 1. Get Your AdSense Publisher ID
1. Log into your Google AdSense account
2. Go to Account → Account Information
3. Copy your Publisher ID (format: ca-pub-xxxxxxxxxxxxxxxx)

### 2. Create Ad Units
1. In AdSense dashboard, go to Ads → Ad units
2. Create three ad units for optimal monetization:
   - **Banner Ad**: 728x90 or responsive banner
   - **Rectangle Ad**: 300x250 medium rectangle
   - **Footer Ad**: 320x100 or responsive banner

3. For each ad unit, copy the Ad unit ID (data-ad-slot value)

### 3. Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the values in `.env`:
   ```
   VITE_ADSENSE_CLIENT_ID=ca-pub-your-actual-publisher-id
   VITE_ADSENSE_BANNER_SLOT=your-banner-ad-slot-id
   VITE_ADSENSE_RECTANGLE_SLOT=your-rectangle-ad-slot-id
   VITE_ADSENSE_FOOTER_SLOT=your-footer-ad-slot-id
   ```

### 4. Update HTML Head Tag
The AdSense script has been automatically added to `client/index.html`. Update the client ID:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-your-actual-publisher-id" crossorigin="anonymous"></script>
```

### 5. Ad Placements
The following ads are automatically placed:
- **Header Banner**: Below the inbox section (728x90)
- **Rectangle Ad**: Between email display and inbox (300x250)
- **Footer Banner**: Above the footer (320x100)

## Testing
1. In development mode, placeholder ads are shown
2. Real ads only appear in production with valid AdSense configuration
3. AdSense requires actual traffic to display ads (not localhost)

## Best Practices
1. **Ad Placement**: Ads are strategically placed for user engagement without disrupting UX
2. **Responsive Design**: All ads use responsive sizing for mobile compatibility
3. **Performance**: Ads load asynchronously to maintain site speed
4. **Compliance**: Ensure your content complies with AdSense policies

## Revenue Optimization Tips
1. Monitor ad performance in AdSense dashboard
2. Experiment with different ad sizes and placements
3. Ensure high-quality content to maintain good standing
4. Consider adding more ad units if traffic increases

## Troubleshooting
- **Ads not showing**: Check AdSense approval status and account standing
- **Console errors**: Verify client ID and ad slot IDs are correct
- **Policy violations**: Review AdSense policy compliance
- **Low revenue**: Optimize ad placement and increase quality traffic

## Environment Variables Reference
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_ADSENSE_CLIENT_ID` | Your AdSense publisher ID | `ca-pub-1234567890123456` |
| `VITE_ADSENSE_BANNER_SLOT` | Banner ad unit ID | `1234567890` |
| `VITE_ADSENSE_RECTANGLE_SLOT` | Rectangle ad unit ID | `9876543210` |
| `VITE_ADSENSE_FOOTER_SLOT` | Footer ad unit ID | `5555666677` |

## Support
- Google AdSense Help: https://support.google.com/adsense/
- AdSense Community: https://support.google.com/adsense/community