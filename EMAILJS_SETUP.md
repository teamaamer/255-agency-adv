# EmailJS Setup Instructions

The contact form now uses EmailJS to send emails. Follow these steps to configure it:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add an Email Service

1. Go to the **Email Services** page in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## 3. Create an Email Template

1. Go to the **Email Templates** page
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Best regards,
255 Agency Contact Form
```

4. Save the template and copy the **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy this key

## 5. Update Environment Variables

Open the `.env.local` file in your project root and replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Restart Your Development Server

After updating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

## 7. Test the Contact Form

1. Navigate to your website's contact section
2. Fill out the form with test data
3. Submit the form
4. Check your email inbox for the submission

## Troubleshooting

- **Emails not sending?** Check that all three environment variables are correctly set
- **Getting errors?** Verify your EmailJS service is active and not blocked
- **Free tier limits:** EmailJS free tier allows 200 emails/month

## EmailJS Dashboard

Access your dashboard at: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

Monitor your email statistics and manage your services and templates.
