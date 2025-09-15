# TalentFlow 🌟

**TalentFlow** is a **full-stack Next.js job portal** that connects top talent with leading companies. Users can browse job opportunities, post jobs, apply to roles, and manage applications—all within a **secure, responsive platform**.  

The platform features a **protected dashboard** for managing jobs and applications, built with **Ant Design** for consistent UI components. It uses **NextAuth** for authentication, **MongoDB** for data storage, and **Axios / TanStack Query** for client-server communication. The UI is enhanced with **Tailwind CSS**, and **React Awesome Reveal** for smooth animations. 


---

## 📝 Project Overview

TalentFlow is designed as a professional job portal where users can:

- Browse jobs  
- Post new job listings (employers)  
- Apply to jobs (candidates)  
- Track and manage applications  
- Access a protected dashboard for CRUD operations  

This project showcases a real-world, portfolio-ready application with authentication, protected routes, and a dynamic dashboard.

---

## 🛠 Tech Stack

**Frontend:**

- Next.js 13+ (App Router)  
- React 18+  
- Tailwind CSS 
- Ant Design 
- React Awesome Reveal (animations)  
- Next/Image, Next/Font  

**Backend / API:**

- Next.js API Routes (`/api/jobs`, `/api/applications`)  
- Node.js  
- MongoDB (Mongoose)  
- Axios / Fetch for client-server communication  

**Authentication:**

- NextAuth (Google OAuth, optional Email/Password)  

**Utilities:**

- TanStack Query / SWR (client-side fetching)  
- Sonner (notifications)  
- Environment Variables (`.env.local`)  

---

## 🔑 Core Features

### 1. Authentication & Protected Routes 🔒
- Google OAuth sign-in  
- Dashboard & job management pages protected  
- UI adjusts based on authentication status  

### 2. Landing Page & Public Pages 🌐
- Hero section, Features, Testimonials, FAQ, CTA, Subscribe, Trending Jobs  
- SEO-friendly metadata via `UseHead.jsx` (Open Graph, title, description)  
- Smooth animations with fade-in & scroll reveal  

### 3. Dashboard (Protected CRUD) 📊
- Create, edit, delete, and view job listings  
- Manage job applications  
- Dynamic routes (e.g., `/jobs/[id]`)  

### 4. Job Applications & Status
- Candidates can apply to jobs  
- Employers can track application status  
- Status updates (pending, accepted, rejected) reflected in the dashboard  

### 5. Styling & Responsiveness 🎨
- Fully responsive design for desktop, tablet, and mobile  
- Optimized images with `next/image`  
- Consistent design system with Tailwind & Ant Design  

### 6. Backend API & Database 🗄️
- RESTful API routes for CRUD operations  
- MongoDB for data persistence  
- Secure handling of environment variables in `.env.local`  

### 7. Data Fetching & Live Updates ⚡
- Client-side fetching with Axios  
- Real-time updates with React Query / SWR  
- SSR / ISR / caching strategies applied  

### 8. Advanced Next.js Features
- Middleware for route protection  
- `loading.tsx` and `error.tsx` for seamless UX  
- Dynamic routes for job details  

---


## ✅ Features Summary

- Google OAuth authentication & protected routes 🔒
- Job posting & application management 📋
- Dashboard for CRUD operations 📊
- Dynamic job details pages /jobs/[id] 🛠️
- SEO & Open Graph meta tags 🌐
- Loading & error states for smooth UX ⏳
- Fully responsive UI 🎨

---



---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/ArunRoy404/Talent-Flow.git
cd talentflow

```

2. **Install dependencies**

```bash
npm install
# or
yarn install

```

3. **Create .env.local**

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
MONGODB_URI=your_mongodb_connection_string

```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev

```

5. **Open http://localhost:3000 in your browser.**

--- 


## 🚀 Deployment

- Recommended: Vercel
- Ensure environment variables are configured in the Vercel dashboard
- Build with:

```bash
npm run build
npm run start

```

---
