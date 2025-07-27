'use client';

import { useEffect, useRef, useState } from 'react';

interface FeatureProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  reverse?: boolean;
}

function Feature({ title, description, illustration, reverse = false }: FeatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'
      }`}
    >
      {/* Content - appears first on mobile, alternates on desktop */}
      <div className={`space-y-4 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="text-card-title">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Illustration - appears second on mobile, alternates on desktop */}
      <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        {illustration}
      </div>
    </div>
  );
}

// Feature illustration components
function GamifiedLessonsIllustration() {
  return (
    <div className="card-luna p-6 lg:p-8 relative overflow-hidden">
      {/* XP Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">Level 3</span>
          <span className="text-sm font-medium text-accent">850 XP</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full w-3/4 transition-all duration-1000"></div>
        </div>
      </div>

      {/* Interactive Lesson Preview */}
      <div className="space-y-4">
        <div className="text-sm text-accent mb-2">// Interactive Exercise</div>
        <div className="bg-code-background rounded-lg p-4 font-mono text-sm">
          <div className="text-code-foreground">
            <span className="text-primary">const</span>{" "}
            <span className="text-accent">greeting</span> = 
            <span className="text-green-400">"Hello, Luna!"</span>;
          </div>
          <div className="text-code-foreground mt-2">
            <span className="text-primary">console</span>
            <span className="text-white">.</span>
            <span className="text-accent">log</span>
            <span className="text-white">(</span>
            <span className="text-accent">greeting</span>
            <span className="text-white">);</span>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex gap-2 mt-4">
          <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
            🏆 First Function
          </div>
          <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
            ⚡ 5-Day Streak
          </div>
        </div>
      </div>

      {/* Floating XP indicator */}
      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold animate-pulse">
        +50 XP
      </div>
    </div>
  );
}

function RealWorldProjectsIllustration() {
  return (
    <div className="card-luna p-6 lg:p-8">
      {/* GitHub Integration Visual */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div>
            <div className="font-semibold text-foreground">Portfolio Project</div>
            <div className="text-sm text-muted-foreground">Committed to GitHub</div>
          </div>
        </div>

        {/* Project Preview */}
        <div className="bg-code-background rounded-lg p-4 space-y-2">
          <div className="text-xs text-accent">📁 my-portfolio/</div>
          <div className="text-xs text-muted-foreground ml-4">├── index.html</div>
          <div className="text-xs text-muted-foreground ml-4">├── styles.css</div>
          <div className="text-xs text-muted-foreground ml-4">├── script.js</div>
          <div className="text-xs text-muted-foreground ml-4">└── README.md</div>
        </div>

        {/* Commit History */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-muted-foreground">Added responsive navigation</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-muted-foreground">Implemented hero section</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-muted-foreground">Initial project setup</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIFeedbackIllustration() {
  return (
    <div className="card-luna p-6 lg:p-8 relative">
      {/* AI Assistant with Moon Theme */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-lg">🌙</span>
        </div>
        <div className="flex-1">
          <div className="bg-muted rounded-lg p-3 text-sm">
            <p className="text-foreground">
              Great work on your function! Here's how you can improve:
            </p>
          </div>
        </div>
      </div>

      {/* Code Review */}
      <div className="bg-code-background rounded-lg p-4 mb-4">
        <div className="text-xs text-accent mb-2">// Your code</div>
        <div className="font-mono text-sm text-code-foreground">
          <span className="text-primary">function</span>{" "}
          <span className="text-accent">calculateTotal</span>
          <span className="text-white">(</span>
          <span className="text-orange-400">price</span>
          <span className="text-white">{")"} {"{"}</span>
          <br />
          <span className="ml-4 text-primary">return</span>{" "}
          <span className="text-orange-400">price</span>{" "}
          <span className="text-white">*</span>{" "}
          <span className="text-green-400">1.1</span>
          <span className="text-white">;</span>
          <br />
          <span className="text-white">{"}"}</span>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center mt-0.5">
            <span className="text-xs text-background">✓</span>
          </div>
          <span className="text-sm text-muted-foreground">Good function structure</span>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center mt-0.5">
            <span className="text-xs text-accent-foreground">!</span>
          </div>
          <span className="text-sm text-muted-foreground">Consider adding parameter validation</span>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center mt-0.5">
            <span className="text-xs text-primary-foreground">💡</span>
          </div>
          <span className="text-sm text-muted-foreground">Try using a constant for the tax rate</span>
        </div>
      </div>
    </div>
  );
}

function CommunityIllustration() {
  return (
    <div className="card-luna p-6 lg:p-8">
      {/* Community Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">12.5K</div>
          <div className="text-sm text-muted-foreground">Active Learners</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">850</div>
          <div className="text-sm text-muted-foreground">Projects Built</div>
        </div>
      </div>

      {/* Achievement Certificates */}
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-3 border border-primary/30">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div>
              <div className="font-semibold text-sm">HTML Fundamentals</div>
              <div className="text-xs text-muted-foreground">Certificate earned</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-3 border border-accent/30">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="font-semibold text-sm">CSS Master</div>
              <div className="text-xs text-muted-foreground">In progress - 80%</div>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-3 border border-muted">
          <div className="flex items-center gap-3">
            <span className="text-2xl opacity-50">🚀</span>
            <div>
              <div className="font-semibold text-sm opacity-50">JavaScript Pro</div>
              <div className="text-xs text-muted-foreground">Locked - Complete CSS first</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  return (
    <section id="features" className="w-full section-luna bg-background">
      <div className="container-luna">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">
            Why Choose Luna?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience a new way to learn web development with our gamified, 
            project-based approach that builds real skills and portfolios.
          </p>
        </div>

        {/* Feature Pairs with Alternating Layout */}
        <div className="space-y-16 lg:space-y-24">
          {/* Feature 1: Gamified Lessons */}
          <Feature
            title="Gamified Learning Experience"
            description="Learn with interactive exercises, challenges, and projects, crafted by learning experts. Earn XP, unlock achievements, and maintain learning streaks that keep you motivated every step of the way."
            illustration={<GamifiedLessonsIllustration />}
            reverse={false}
          />

          {/* Feature 2: Real-World Projects */}
          <Feature
            title="Build Real-World Projects"
            description="Build projects that apply your coding skills in real-life scenarios. Every project you create gets committed to your GitHub profile, building a professional portfolio that showcases your growth to potential employers."
            illustration={<RealWorldProjectsIllustration />}
            reverse={true}
          />

          {/* Feature 3: AI-Powered Feedback */}
          <Feature
            title="AI-Powered Personalized Feedback"
            description="Get personalized feedback and guidance tailored to your learning style. Our AI assistant reviews your code, suggests improvements, and provides hints when you're stuck, ensuring you learn best practices from day one."
            illustration={<AIFeedbackIllustration />}
            reverse={false}
          />

          {/* Feature 4: Community & Certificates */}
          <Feature
            title="Community & Achievements"
            description="Connect with learners worldwide and celebrate milestones with shareable certificates. Join a supportive community of developers, share your progress, and earn recognition for your achievements."
            illustration={<CommunityIllustration />}
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}