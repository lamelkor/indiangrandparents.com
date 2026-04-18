# Formspree Setup Guide

## Steps to Connect Contact Form

1. **Create a Formspree Account**
   - Go to https://formspree.io/
   - Sign up for a free account (50 submissions/month)
   - Verify your email address

2. **Create a New Form**
   - Click "New Form" in your dashboard
   - Name it "SIG Contact Form"
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)

3. **Update index.html**
   - Open `index.html`
   - Find the line: `<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   - Replace `YOUR_FORM_ID` with your actual form ID from step 2

4. **Configure Email Settings in Formspree**
   - In your Formspree dashboard, click on your form
   - Go to "Settings" → "Email Notifications"
   - Enter the email address where you want to receive submissions
   - You can add multiple email addresses if needed

5. **Test the Form**
   - Open your website
   - Fill out the contact form
   - Submit it
   - Check your email for the submission
   - The first submission will require you to confirm in Formspree

6. **Optional: Customize**
   - Add auto-reply emails to users
   - Set up spam protection (reCAPTCHA)
   - Customize email templates
   - Add file upload support

## Alternative Options

### Option 2: EmailJS (Free - 200 emails/month)
- More complex setup but more customizable
- Requires API keys
- https://www.emailjs.com/

### Option 3: Netlify Forms (if you switch hosting)
- Free with Netlify hosting
- 100 submissions/month on free tier
- Just add `netlify` attribute to form

### Option 4: Custom Backend
- Build your own with Node.js/Express
- Host on services like Vercel, Railway, or Render
- More control but requires maintenance

## Current Setup

The form is already configured to work with Formspree. You just need to:
1. Create your Formspree account
2. Get your form ID
3. Replace `YOUR_FORM_ID` in index.html
4. Commit and push to GitHub

That's it! Your contact form will be live and sending emails.
