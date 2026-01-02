# 🌍 AIESEC SLIIT LB-Portal

A modern, interactive web application showcasing leadership roles and opportunities within AIESEC in SLIIT for the 2026/27 term. Built with React, TypeScript, and cutting-edge UI technologies to provide an immersive experience for aspiring leaders.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

### 🎯 Interactive Department Cards
- **Front Office Departments**: IGV IR&M, IGV CXP, IGV B2B, IGT IR&M, IGT B2B & VD, OGV PS, OGV B2C, OGTa, OGTe
- **Back Office Departments**: FnL, BD, TM, IM, MKT, EM, PR & EWA
- Hover effects and smooth animations
- Dynamic icon representations for each department

### 📋 Comprehensive Role Information
- Detailed job descriptions for each leadership position
- Mission statements and core responsibilities
- Required competencies and skills
- Key Performance Indicators (KPIs)
- Time commitment expectations
- Multiple role levels per department (Manager, Team Leader, Specialist, etc.)

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Frosted glass effect with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Dark Theme**: Professional dark mode interface
- **Interactive Modals**: Detailed role panels with smooth transitions

### 📱 Mobile-First Approach
- Hamburger menu navigation
- Touch-optimized interactions
- Adaptive card layouts
- Mobile-friendly contact section

### 🔗 Direct Application Links
- One-click access to Google Form applications
- Department-specific application forms
- Streamlined recruitment process

### 📞 Contact Information
- Direct contact with VP Talent Management
- Phone and email integration
- Professional contact card design

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LB-Portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

### Core Framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Headless UI primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Form Handling
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Additional Libraries
- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes
- **sonner** - Toast notifications

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── DepartmentCard.tsx
│   ├── DepartmentGrid.tsx
│   ├── RolePanel.tsx
│   ├── Hero.tsx
│   ├── Guidelines.tsx
│   ├── ContactUs.tsx
│   └── Navbar.tsx
├── data/
│   └── departments.ts   # Department and role data
├── hooks/              # Custom React hooks
├── lib/
│   └── utils.ts        # Utility functions
├── pages/
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Root component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Key Components

### DepartmentCard
Interactive card component displaying department information with glassmorphism effects.

### RolePanel
Modal component showing detailed role information including responsibilities, KPIs, and competencies.

### DepartmentGrid
Grid layout with office toggle (Front Office / Back Office) and department filtering.

### Guidelines
Step-by-step application process with timeline and important notes.

## 📋 Department Structure

Each department includes:
- **ID & Name**: Unique identifier and full name
- **Office Type**: Front Office or Back Office
- **Description**: Brief overview of department focus
- **Icon**: Visual representation using Lucide icons
- **Application Form URL**: Direct link to Google Form
- **Roles**: Multiple leadership positions with detailed information

### Role Details Include:
- Mission statement
- Key responsibilities (array)
- Core competencies (array)
- KPIs and success metrics (array)
- Time commitment (hours/week)

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration
- `postcss.config.js` - PostCSS configuration

## 🎯 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🤝 Contributing

This is an internal AIESEC in SLIIT project. For updates or modifications, please contact the VP Talent Management.

## 👥 Contact

**Dinadi Jayathilake**  
Vice President - Talent Management  
📧 dinadijayathialke@aiesec.net  
📱 0760006189

## 📄 License

Copyright © 2026 AIESEC in SLIIT. All rights reserved.

## 🙏 Acknowledgments

- AIESEC in SLIIT Leadership Team 2026/27
- All department VPs and team members
- Contributors to the shadcn/ui component library

---

**Built by Sithika Ninduwara from Information Management**
