<div align="center">

# 🌙 SetLuna
### *Learn Web Development the Fun Way*

**A gamified learning platform that transforms coding education through interactive lessons, GitHub integration, and AI-powered feedback**

---

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Kiro Hackathon](https://img.shields.io/badge/Kiro-Hackathon%202025-purple?style=for-the-badge)](https://kiro.ai)

</div>

---

## 🚀 **Project Vision**

SetLuna revolutionizes web development education by combining the addictive gamification of Duolingo with real-world coding skills. Unlike traditional learning platforms, SetLuna integrates directly with GitHub, turning every commit into XP and every project into portfolio gold.

### **🎯 The Problem We're Solving**
- **Boring Learning**: Traditional coding tutorials lack engagement and motivation
- **No Real Portfolio**: Students learn in isolation without building actual projects  
- **Missing Feedback Loop**: No personalized guidance on code quality and best practices
- **Abandoned Learning**: High dropout rates due to lack of progress tracking and rewards

### **✨ Our Solution**
- **Gamified Progression**: XP, levels, streaks, and badges keep learners motivated
- **GitHub-First Learning**: Every lesson builds real projects that live in your portfolio
- **AI-Powered Mentorship**: Future AI coach analyzes your commits and provides personalized feedback
- **Structured Curriculum**: Clear path from HTML basics to full-stack Next.js applications

---

## 🏗️ **Development Roadmap**

> **Built with Kiro AI** - This project showcases how AI-assisted development can accelerate the journey from concept to production-ready application. Each phase represents a sprint where Kiro helps architect, implement, and refine features.

<details>
<summary><strong>📋 Detailed Implementation Plan</strong></summary>

### Phase 1: Foundation & Landing (MVP Start)

**Priority: Get something live and testable**

#### 🏗️ Project Structure Setup

- [ ] Create `src/components/` folder structure
- [ ] Create `src/lib/` for utilities
- [ ] Create `src/types/` for TypeScript definitions
- [ ] Create `src/hooks/` for custom React hooks
- [ ] Set up path aliases in tsconfig.json

#### 🎨 Landing Page

- [ ] Create hero section component
- [ ] Add features showcase section
- [ ] Build pricing preview cards
- [ ] Add call-to-action buttons
- [ ] Create footer with links
- [ ] Make landing page responsive

#### 🗄️ Database Setup

- [ ] Install and configure Prisma
- [ ] Design User model (id, email, name, createdAt)
- [ ] Design Lesson model (id, title, content, stage, order)
- [ ] Design UserProgress model (userId, lessonId, completed, xp)
- [ ] Design UserStats model (userId, totalXP, level, streak)
- [ ] Run initial migration

#### 🔐 Authentication System

- [ ] Install NextAuth.js
- [ ] Configure NextAuth providers (email, Google, GitHub)
- [ ] Create sign-up page with form validation
- [ ] Create sign-in page with form validation
- [ ] Add logout functionality
- [ ] Create protected route middleware
- [ ] Add session management
- [ ] Handle authentication errors

#### 📊 Dashboard Foundation

- [ ] Create dashboard layout component
- [ ] Add welcome message with user name
- [ ] Create progress overview card
- [ ] Add current level display
- [ ] Show total XP earned
- [ ] Add "Continue Learning" button

#### 🌙 Theme System

- [ ] Set up Tailwind dark mode configuration
- [ ] Create theme context provider
- [ ] Build theme toggle component
- [ ] Add theme persistence (localStorage)
- [ ] Apply theme to all components

### Phase 2: Core Learning Engine

**Priority: Build the learning experience**

#### ⭐ XP & Leveling System

- [ ] Create XP calculation utilities (lesson completion: 10-50 XP)
- [ ] Design level progression algorithm (100 XP = Level 1, exponential growth)
- [ ] Build XP display component with animations
- [ ] Create level-up notification system
- [ ] Add XP history tracking
- [ ] Create level badges/icons

#### 📈 Progress Tracking

- [ ] Create lesson completion API routes
- [ ] Build progress calculation functions
- [ ] Add current lesson tracking
- [ ] Create "resume learning" functionality
- [ ] Track time spent per lesson
- [ ] Add completion timestamps

#### 📚 HTML/CSS Lesson Content

- [ ] Write Stage 0.1: "What is the Internet?" lesson
- [ ] Write Stage 0.2: "HTML Structure Basics" lesson
- [ ] Write Stage 0.3: "Common HTML Tags" lesson
- [ ] Write Stage 0.4: "CSS Introduction" lesson
- [ ] Write Stage 0.5: "CSS Selectors & Colors" lesson
- [ ] Write Stage 0.6: "Box Model & Layout" lesson
- [ ] Create lesson content database seeder

#### 🖥️ Lesson Interface

- [ ] Create lesson reading view component
- [ ] Add lesson navigation (previous/next buttons)
- [ ] Build lesson progress indicator
- [ ] Add "Mark as Complete" functionality
- [ ] Create lesson sidebar with outline
- [ ] Add estimated reading time

#### 📊 Progress Visualization

- [ ] Create circular progress rings
- [ ] Build linear progress bars
- [ ] Add stage completion indicators
- [ ] Create overall progress dashboard
- [ ] Add visual lesson map/tree
- [ ] Show completion percentages

#### 🔥 Streak System

- [ ] Create daily streak calculation
- [ ] Add streak counter display
- [ ] Build streak freeze functionality
- [ ] Create streak milestone rewards
- [ ] Add streak reminder notifications
- [ ] Track longest streak record

### Phase 3: Interactive Learning

**Priority: Make lessons engaging**

#### 💻 Interactive Code Editor

- [ ] Install Monaco Editor or CodeMirror
- [ ] Create code editor component with syntax highlighting
- [ ] Add HTML/CSS preview functionality
- [ ] Build code validation system
- [ ] Add auto-save functionality
- [ ] Create code reset/hint system
- [ ] Add keyboard shortcuts

#### 🎯 Code Challenges & Exercises

- [ ] Create "Build Your First HTML Page" exercise
- [ ] Add "Style with CSS" challenges
- [ ] Build exercise validation logic
- [ ] Create hint system for stuck users
- [ ] Add solution reveal functionality
- [ ] Track exercise completion time
- [ ] Create difficulty progression

#### 🏆 Badge System

- [ ] Design badge categories (Streak, Completion, Speed, etc.)
- [ ] Create badge earning logic
- [ ] Build badge display components
- [ ] Add badge notification system
- [ ] Create badge collection page
- [ ] Add rare/special badges
- [ ] Track badge earning statistics

#### 📝 JavaScript Content Creation

- [ ] Write "Variables and Data Types" lesson
- [ ] Write "Functions Basics" lesson
- [ ] Write "DOM Manipulation" lesson
- [ ] Write "Event Handling" lesson
- [ ] Create JavaScript exercises
- [ ] Add interactive JS console

#### 🔌 Lesson API System

- [ ] Create GET /api/lessons endpoint
- [ ] Create GET /api/lessons/[id] endpoint
- [ ] Create POST /api/lessons/complete endpoint
- [ ] Add lesson content caching
- [ ] Create lesson search functionality
- [ ] Add lesson rating system

### Phase 4: Git Integration & Advanced Content

**Priority: GitHub workflow integration**

#### 🐙 GitHub Integration

- [ ] Set up GitHub OAuth app
- [ ] Create GitHub account connection flow
- [ ] Build commit tracking API
- [ ] Add repository creation guidance
- [ ] Create commit message analysis
- [ ] Track coding frequency
- [ ] Add GitHub Pages deployment helper

#### 📖 Git/GitHub Lessons (Stage 1)

- [ ] Write "What is Version Control?" lesson
- [ ] Write "Installing Git" lesson
- [ ] Write "Your First Repository" lesson
- [ ] Write "Making Commits" lesson
- [ ] Write "Pushing to GitHub" lesson
- [ ] Write "GitHub Pages Deployment" lesson
- [ ] Create hands-on Git exercises

#### ⚛️ React Lessons (Stage 4)

- [ ] Write "Introduction to React" lesson
- [ ] Write "JSX Syntax" lesson
- [ ] Write "Components and Props" lesson
- [ ] Write "State with useState" lesson
- [ ] Write "Event Handling in React" lesson
- [ ] Write "useEffect Hook" lesson
- [ ] Create React component exercises

#### 🔷 TypeScript Content (Stage 4.5)

- [ ] Write "Why TypeScript?" lesson
- [ ] Write "Basic Types" lesson
- [ ] Write "Interfaces and Objects" lesson
- [ ] Write "Typing React Components" lesson
- [ ] Create TypeScript conversion exercises
- [ ] Add TypeScript error explanations

#### ⚡ Next.js Tutorials (Stage 5)

- [ ] Write "Next.js Introduction" lesson
- [ ] Write "File-based Routing" lesson
- [ ] Write "API Routes" lesson
- [ ] Write "Server vs Client Components" lesson
- [ ] Create full Next.js project tutorial
- [ ] Add deployment to Vercel guide

### Phase 5: Gamification & Social

**Priority: Engagement and retention**

#### 🏅 Leaderboards

- [ ] Create weekly XP leaderboard
- [ ] Add monthly challenge rankings
- [ ] Build streak leaderboard
- [ ] Create lesson completion speed rankings
- [ ] Add friend-only leaderboards
- [ ] Create seasonal competitions

#### 👥 Community Features

- [ ] Build user profile pages
- [ ] Add progress sharing functionality
- [ ] Create achievement showcases
- [ ] Add user bio and learning goals
- [ ] Build follow/friend system
- [ ] Create progress feed/timeline

#### 🤝 Team Challenges

- [ ] Create team formation system
- [ ] Build group learning goals
- [ ] Add team progress tracking
- [ ] Create team leaderboards
- [ ] Add team chat/communication
- [ ] Build team achievement system

#### 📧 Email Notifications

- [ ] Set up email service (Resend/SendGrid)
- [ ] Create streak reminder emails
- [ ] Add new lesson notifications
- [ ] Build weekly progress summaries
- [ ] Create achievement congratulations
- [ ] Add email preference settings

#### 🎓 Certificate System

- [ ] Design certificate templates
- [ ] Create certificate generation logic
- [ ] Add stage completion certificates
- [ ] Build skill-specific certificates
- [ ] Create PDF download functionality
- [ ] Add LinkedIn sharing integration

### Phase 6: Monetization & Scale

**Priority: Business model and growth**

#### 💳 Payment System (Stripe)

- [ ] Set up Stripe account and webhooks
- [ ] Create subscription plans (Free, Pro, Team)
- [ ] Build pricing page
- [ ] Add payment flow components
- [ ] Create subscription management
- [ ] Add billing history
- [ ] Handle failed payments and dunning

#### 📊 Advanced Analytics

- [ ] Set up analytics database tables
- [ ] Track learning time per lesson
- [ ] Monitor completion rates
- [ ] Create admin analytics dashboard
- [ ] Add user behavior insights
- [ ] Build retention metrics
- [ ] Create A/B testing framework

#### 📱 Mobile Optimization

- [ ] Audit mobile experience
- [ ] Optimize lesson interface for mobile
- [ ] Improve code editor mobile UX
- [ ] Add touch-friendly navigation
- [ ] Optimize loading performance
- [ ] Add offline lesson reading

#### 🤖 AI Code Review System

- [ ] Set up OpenAI/Claude API
- [ ] Create commit analysis pipeline
- [ ] Build code quality scoring
- [ ] Add personalized feedback generation
- [ ] Create improvement suggestions
- [ ] Add AI-powered hints for exercises

#### 🔗 Partnership Integrations

- [ ] Integrate with VS Code extension
- [ ] Add GitHub Codespaces support
- [ ] Connect with job boards
- [ ] Partner with coding bootcamps
- [ ] Add portfolio generation tools
- [ ] Create employer showcase features

### Technical Debt & Polish

**Ongoing: Code quality and UX improvements**

- [ ] **Error handling** - Graceful error states
- [ ] **Loading states** - Skeleton screens, spinners
- [ ] **Accessibility** - ARIA labels, keyboard navigation
- [ ] **Performance optimization** - Code splitting, caching
- [ ] **SEO optimization** - Meta tags, sitemap, structured data

</details>

---

## 🎮 **Core Features**

<table>
<tr>
<td width="50%">

### **🎯 Gamified Learning**
- **XP System**: Earn points for lesson completion and code quality
- **Level Progression**: Unlock new content as you advance
- **Streak Tracking**: Build consistent learning habits
- **Achievement Badges**: Celebrate milestones and special accomplishments
- **Leaderboards**: Compete with friends and the community

</td>
<td width="50%">

### **💻 Interactive Coding**
- **In-Browser Editor**: Write and test code without setup
- **Live Preview**: See your HTML/CSS changes instantly  
- **Code Validation**: Get immediate feedback on your solutions
- **Progressive Challenges**: From basic tags to full applications
- **Hint System**: Stuck? Get contextual help without spoilers

</td>
</tr>
<tr>
<td width="50%">

### **🐙 GitHub Integration**
- **Portfolio Building**: Every lesson creates real repository content
- **Commit Tracking**: Earn XP for good version control habits
- **Deployment Guidance**: Learn to publish your projects live
- **Code Quality Insights**: Future AI analysis of your commits
- **Professional Workflow**: Learn industry-standard practices

</td>
<td width="50%">

### **📚 Structured Curriculum**
- **Stage 0**: HTML & CSS Foundations
- **Stage 1**: Git & Version Control  
- **Stage 2**: JavaScript Fundamentals
- **Stage 3**: APIs & Modern JavaScript
- **Stage 4**: React Components & Hooks
- **Stage 5**: TypeScript & Type Safety
- **Stage 6**: Next.js Full-Stack Development

</td>
</tr>
</table>

---

## 🛠️ **Tech Stack & Architecture**

<div align="center">

| **Category** | **Technology** | **Why We Chose It** |
|--------------|----------------|---------------------|
| **Frontend** | Next.js 15 + React 19 | Latest features, App Router, Server Components |
| **Language** | TypeScript | Type safety, better developer experience |
| **Styling** | Tailwind CSS v4 | Rapid UI development, consistent design system |
| **Database** | PostgreSQL + Prisma | Robust relational data, type-safe queries |
| **Auth** | NextAuth.js | Secure, flexible authentication |
| **Payments** | Stripe | Industry-standard payment processing |
| **Hosting** | Vercel | Seamless Next.js deployment and scaling |
| **AI** | OpenAI/Claude API | Code review and personalized feedback |

</div>

---

## 🏆 **Kiro Hackathon Showcase**

This project demonstrates the power of **AI-assisted development** using Kiro IDE:

### **🤖 How Kiro Accelerated Development**
- **Spec-Driven Architecture**: Used Kiro's spec system to plan and iterate on complex features
- **Intelligent Code Generation**: Leveraged AI to scaffold components, API routes, and database schemas
- **Multi-Modal Planning**: Discussed ideas through natural conversation, then implemented with precision
- **Agent Hooks**: Automated repetitive tasks like testing, formatting, and deployment prep
- **Context-Aware Assistance**: Kiro understood the full project context for better suggestions

### **🚀 From Idea to Implementation**
SetLuna showcases how modern AI-powered development can transform the entire software creation process - from initial brainstorming to production-ready code. This isn't just about writing code faster; it's about building better architecture, making smarter decisions, and focusing on solving interesting problems while AI handles the heavy lifting.

---

## 🎯 **Getting Started**

```bash
# Clone the repository
git clone https://github.com/yourusername/setluna.git
cd setluna

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your database URL, NextAuth secret, etc.

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see SetLuna in action!

---

## 🌟 **Future Vision**

SetLuna represents the future of coding education where:
- **Learning is addictive** through gamification and social features
- **Every lesson builds your portfolio** with real GitHub projects  
- **AI mentorship is personalized** based on your actual code
- **Community drives motivation** through challenges and collaboration
- **Skills transfer directly to employment** with industry-standard practices

---

## 📬 **Connect & Contribute**

**Built for the Kiro Hackathon 2025** 🚀

This project is actively developed and welcomes contributions! Whether you're interested in education technology, gamification, or AI-powered development tools, there's a place for you in the SetLuna community.

---

<div align="center">

**Made with ❤️ and Kiro AI**

*Transforming how developers learn, one commit at a time*

</div>
