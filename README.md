# 🚀 Portfolio — Next.js + TypeScript

A production-grade personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — featuring a dark editorial aesthetic with amber accents.

---

## ✨ Features

| Section | Description |
|---|---|
| **Home** | Hero with animated intro, stats strip, featured projects, top skills, and CTA |
| **About** | Bio, values, interests, contact info, and resume download |
| **Resume** | Timeline of work experience and education with tech tags |
| **Skills** | Filterable skill grid with progress bars and proficiency levels |
| **Projects** | Tag-filtered project gallery with GitHub/live links |
| **Certificates** | Credential cards grouped by category with verification links |
| **Achievements** | Timeline of awards, hackathon wins, publications, and open-source milestones |
| **Contact** | Contact form with Node.js/Nodemailer backend + social links |

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS variables
- **Fonts**: Playfair Display (display) + DM Sans (body) + JetBrains Mono (code)
- **Email**: Nodemailer (Node.js API route)
- **Icons**: Lucide React

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your SMTP credentials (see section below).

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📧 Email Configuration (Contact Form)

The contact form uses **Nodemailer** with any SMTP provider.

### Gmail Setup
1. Enable 2-Step Verification in your Google Account
2. Go to **Google Account → Security → App Passwords**
3. Generate a password for "Mail"
4. Add to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_EMAIL=your-email@gmail.com
```

### Other Providers
| Provider | Host | Port |
|---|---|---|
| Outlook | smtp.office365.com | 587 |
| SendGrid | smtp.sendgrid.net | 587 |
| Mailgun | smtp.mailgun.org | 587 |
| Resend | smtp.resend.com | 465 |

---

## 🎨 Customization

### Update your personal info
Edit `lib/data.ts`:
```ts
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  email: 'you@example.com',
  // ...
};
```

### Add/edit projects
```ts
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Short description',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',
    featured: true,
    year: '2024',
  },
];
```

### Update skills, certificates, achievements
All data lives in `lib/data.ts` — simply edit the arrays.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (fonts, navbar, footer)
│   ├── globals.css         # Design tokens, animations, utilities
│   ├── page.tsx            # Home / Hero page
│   ├── about/page.tsx      # About me
│   ├── resume/page.tsx     # Work & education timeline
│   ├── skills/page.tsx     # Skills with filter
│   ├── projects/page.tsx   # Projects gallery
│   ├── certificates/page.tsx
│   ├── achievements/page.tsx
│   ├── contact/page.tsx    # Contact form
│   └── api/
│       └── contact/route.ts  # Node.js email API
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── PageHeader.tsx
├── lib/
│   ├── data.ts             # All portfolio content
│   └── utils.ts
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```
Add environment variables in Vercel Dashboard → Settings → Environment Variables.

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📝 License
MIT — feel free to use this as a template for your own portfolio.
