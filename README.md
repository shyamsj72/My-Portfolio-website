<div align="center">

# ✦ Shyam Jith S J — Personal Portfolio

**A cinematic, recruiter-focused portfolio built with Next.js 16 & React 19**

[![Live Site](https://img.shields.io/badge/Live%20Site-my--portfolio--website--shyam.vercel.app-black?style=for-the-badge&logo=vercel)](https://my-portfolio-website-shyam.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## 🚀 Overview

A high-performance, **Awwwards-level** personal portfolio website showcasing Salesforce development expertise, full-stack engineering skills, and creative frontend projects. Designed for maximum recruiter impact with a cinematic scrollytelling experience and a dark, premium aesthetic.

**Live →** [my-portfolio-website-shyam.vercel.app](https://my-portfolio-website-shyam.vercel.app/)

---

## ✨ Features

- **Cinematic Scroll Experience** — Smooth, physics-based scrolling powered by [Lenis](https://github.com/darkroomengineering/lenis)
- **Framer Motion Animations** — Staggered entrance animations, scroll-triggered reveals, and micro-interactions throughout
- **Working Contact Form** — Gmail SMTP integration via Nodemailer + Next.js API Route (`/api/contact`)
- **Custom Cursor** — Bespoke cursor component replacing the default browser cursor
- **Scroll Progress Indicator** — Visual reading progress bar at the top of the page
- **Overlay / Intro Animation** — Cinematic page-load overlay for a premium first impression
- **Fully Responsive** — Fluid layouts across all device sizes
- **Dark Premium Aesthetic** — Deep `#121212` background, glassmorphism cards, and soft glow accents
- **SEO Optimized** — Proper meta tags, semantic HTML, and structured headings

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Smooth Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [Lucide React](https://lucide.dev/) |
| Email | [Nodemailer](https://nodemailer.com/) + Gmail SMTP |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
Portfolio2/
├── app/
│   ├── api/contact/route.ts   # Contact form API — Gmail SMTP
│   ├── layout.tsx             # Root layout & global meta
│   ├── page.tsx               # Main page — section composition
│   └── globals.css            # Global styles & Tailwind base
├── components/
│   ├── Overlay.tsx            # Cinematic page-load intro
│   ├── ScrollyCanvas.tsx      # Scrollytelling canvas layer
│   ├── About.tsx              # About / hero section
│   ├── Experience.tsx         # Work experience timeline
│   ├── Skills.tsx             # Skills & tech stack grid
│   ├── Projects.tsx           # Featured projects showcase
│   ├── Certifications.tsx     # Salesforce & other certs
│   ├── Education.tsx          # Education section
│   ├── Contact.tsx            # Contact form section
│   ├── CustomCursor.tsx       # Custom mouse cursor
│   ├── ScrollProgress.tsx     # Scroll progress bar
│   ├── SmoothScroll.tsx       # Lenis smooth scroll wrapper
│   └── ResumeButton.tsx       # Resume download CTA
└── public/                    # Static assets
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js ≥ 18
- A Gmail account with [App Password](https://myaccount.google.com/apppasswords) enabled (for contact form)

### 1. Clone the repo
```bash
git clone https://github.com/shyamsj72/My-Portfolio-website.git
cd My-Portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASS=your-gmail-app-password
```

> ⚠️ **Never commit `.env.local`** — it's already in `.gitignore`.

### 4. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📧 Contact Form Setup

The contact form sends email via **Gmail SMTP** using Nodemailer.

1. Go to your Google Account → **Security** → **2-Step Verification** → **App Passwords**
2. Generate an app password for "Mail"
3. Add it to `.env.local` as `GMAIL_APP_PASS`

For **Vercel deployment**, add these as Environment Variables in your project's **Settings → Environment Variables**:
- `GMAIL_USER`
- `GMAIL_APP_PASS`

---

## 🚢 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

```bash
# Manual production deploy
vercel --prod
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shyamsj72/My-Portfolio-website)

---

## 📬 Contact

**Shyam Jith S J**  
📧 [shyamjith2302@gmail.com](mailto:shyamjith2302@gmail.com)  
📞 [+91 9539553727](tel:+919539553727)  
📍 Malappuram, Kerala, India  

---

<div align="center">

Designed & built by **Shyam Jith S J** •  MIT License

</div>
