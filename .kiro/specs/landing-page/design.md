# Design Document

## Overview

The Luna landing page design follows a Mimo-inspired approach with clean, modern aesthetics while incorporating the platform's unique moon/stars theme with Luna as the mascot. The design prioritizes mobile-first responsive layout, bold typography, and interactive elements that demonstrate the gamified learning experience. The page structure emphasizes clear visual hierarchy, smooth animations, and strategic placement of calls-to-action to guide users through the learning journey from discovery to signup.

## Architecture

### Layout Structure

The landing page follows a single-page application (SPA) structure with distinct sections that flow logically from introduction to conversion:

```
┌─────────────────────────────────────┐
│ Navigation Header                   │
├─────────────────────────────────────┤
│ Hero Section with Live Code Editor  │
├─────────────────────────────────────┤
│ Course/Learning Path Section        │
├─────────────────────────────────────┤
│ Platform Features Section           │
├─────────────────────────────────────┤
│ Final CTA Section                   │
├─────────────────────────────────────┤
│ Footer                             │
└─────────────────────────────────────┘
```

### Responsive Breakpoints

- Mobile: 320px - 768px (primary focus)
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

### Design System Foundation

**Color Palette (Mimo-inspired with Luna theme):**
- Primary: Deep purple (#8B5CF6) - main CTA and brand color (similar to Mimo's purple)
- Secondary: Slate blue (#475569) - text and secondary elements
- Moon theme: Soft gold (#F59E0B) - accent color for moon/stars elements and Luna mascot
- Background: Dark navy (#1E293B) for hero, clean white (#FFFFFF) for content sections
- Text: White (#FFFFFF) on dark backgrounds, dark gray (#1F2937) on light
- Code editor: Dark theme with syntax highlighting (#0F172A background)

**Typography (Mimo-style):**
- Primary: Inter or SF Pro Display for clean, modern look
- Headings: Bold weights (700-800) with very large sizes for impact
- Body: Regular weight (400-500) with excellent readability
- Code snippets: JetBrains Mono with Luna syntax theme colors
- Emphasis on large, readable fonts with generous spacing

## Components and Interfaces

### Navigation Header

**Design:**
- Fixed position with subtle shadow on scroll
- Logo with moon icon on the left
- Minimal navigation links (Courses, Features, About)
- Primary CTA button on the right
- Mobile: Hamburger menu with slide-out navigation

**Interactive Elements:**
- Smooth scroll to sections on link clicks
- CTA button with hover animations
- Mobile menu with smooth transitions

### Hero Section

**Layout (Mimo-inspired):**
- Split layout: 50% content, 50% interactive code editor on desktop
- Centered content on mobile with code editor below
- Large, bold multi-line headline similar to Mimo's approach
- Minimal supporting text
- Integrated sign-up form (not separate CTA buttons)
- Dark background with subtle moon/stars elements

**Content Structure:**
```
Learn Web Development.
Build Real Projects.
Get Hired. 🌙✨
[Large, bold multi-line headline - Mimo style]

Join thousands learning to code through gamified lessons and AI feedback.
[Brief supporting line]

[Email Input Field]
[Password Input Field]
[Sign up and start learning] - Purple CTA button
[Sign in with Google] - Secondary option
```

**Visual Elements:**
- Live, interactive code editor showing HTML/CSS/JS tabs
- Real-time code preview demonstrating Luna lessons
- Syntax highlighting with Luna's moon theme colors
- Subtle animated background with floating code elements

### Final CTA Section

**Purpose:** Provide a final conversion opportunity before the footer

**Design:**
- Clean, centered design with dark background
- Large, compelling headline about starting the coding journey
- Prominent sign-up button
- Emphasis on the free nature of the platform

**Content Structure:**
```
Ready to Start Your Coding Journey? 🌙
[Large headline]

Join Luna today and transform from beginner to developer
- completely free, forever.
[Supporting text with free emphasis]

[Start Learning Now - Free Forever]
[Large, prominent CTA button]
```

**Visual Treatment:**
- Dark background with subtle moon/stars animation
- Large, readable typography
- Single, focused call-to-action
- Minimal distractions

### Course/Learning Path Section

**Design Approach (Mimo-inspired):**
- Grid layout of course cards similar to Mimo's course selection
- "Career Path" and "Course" labels for different learning tracks
- Large, clear course titles with technology icons
- Brief descriptions focusing on practical outcomes

**Course Card Structure:**
```
[Technology Icon]
Career Path / Course [Label]

[Course Title - Bold]
[Description paragraph - practical focus]

[Technology logos/icons row]
```

**Learning Paths:**
- **Career Path: Full-Stack Development** (HTML, CSS, JS, React, TypeScript, Next.js)
- **Career Path: Frontend Specialist** (HTML, CSS, JS, React)
- **Course: AI-Enhanced Development** (Coming soon - with moon theme)

**Visual Treatment:**
- Clean white cards with subtle shadows
- Hover effects with slight elevation
- Technology icons in consistent style
- Clear visual hierarchy with typography

### Platform Features Section

**Layout (Mimo-inspired):**
- Two-column alternating layout on desktop
- Single column on mobile
- Feature illustration + description pairs
- Clean, minimal design with plenty of whitespace

**Feature Pairs:**
1. **Gamified Lessons**
   - Illustration: Interactive lesson mockup with XP elements
   - "Learn with interactive exercises, challenges, and projects, crafted by learning experts"

2. **Real-World Projects**
   - Illustration: Portfolio/GitHub integration visual
   - "Build projects that apply your coding skills in real-life scenarios"

3. **AI-Powered Feedback**
   - Illustration: AI assistant with moon theme providing code review
   - "Get personalized feedback and guidance tailored to your learning style"

4. **Community & Certificates**
   - Illustration: Community interaction and achievement badges
   - "Connect with learners and celebrate milestones with shareable certificates"

**Visual Treatment:**
- Consistent illustration style with SetLuna's moon theme
- Clean typography with clear hierarchy
- Subtle animations on scroll
- Balanced text-to-visual ratio

### Social Proof & Testimonials

**Design:**
- Carousel/slider format for testimonials
- User avatars with names and progress indicators
- Before/after project showcases
- Statistics highlighting platform success

**Content Structure:**
- Student testimonials with photos
- Portfolio examples from learners
- Success metrics (completion rates, job placements)
- Community size and engagement stats



## Data Models

### User Interaction Tracking

```typescript
interface LandingPageInteraction {
  sessionId: string;
  timestamp: Date;
  action: 'view_section' | 'click_cta' | 'demo_interaction' | 'scroll_progress';
  section: string;
  metadata?: {
    scrollDepth?: number;
    timeSpent?: number;
    demoCompleted?: boolean;
  };
}
```

### Demo Lesson Data

```typescript
interface DemoLesson {
  id: string;
  title: string;
  technology: 'html' | 'css' | 'javascript';
  steps: DemoStep[];
  expectedOutput: string;
}

interface DemoStep {
  instruction: string;
  code: string;
  hint?: string;
  xpReward: number;
}
```

### Feature Content

```typescript
interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  interactiveDemo?: boolean;
}
```

## Error Handling

### Progressive Enhancement

- Core content loads first, enhancements layer on top
- Graceful degradation for older browsers
- Fallback static images for complex animations
- Alternative navigation for JavaScript-disabled users

### Performance Optimization

- Lazy loading for below-the-fold content
- Optimized images with WebP format and fallbacks
- Critical CSS inlined, non-critical CSS loaded asynchronously
- Minimal JavaScript bundle with code splitting

### Accessibility Considerations

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Screen reader friendly content structure
- High contrast mode support
- Reduced motion preferences respected



## Implementation Considerations

### Animation Strategy

- CSS-based animations for performance
- Intersection Observer API for scroll-triggered animations
- Reduced motion media query support
- Smooth transitions between sections

### Mobile-First Approach

- Touch-friendly interactive elements (minimum 44px targets)
- Optimized typography for mobile reading
- Simplified navigation for small screens
- Fast loading on mobile networks

### SEO Optimization

- Semantic HTML structure
- Meta tags optimized for social sharing
- Structured data for rich snippets
- Fast loading times for search ranking

### Integration Points

- Analytics tracking for user behavior
- A/B testing framework integration
- Email capture for newsletter signup
- Social media sharing capabilities