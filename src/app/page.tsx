import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="w-full text-white min-h-screen flex items-center pt-16 md:pt-18 lg:pt-20 hero-section">
        <div className="container-luna w-full">
          {/* Mobile-first split-layout hero using Tailwind grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)]">
            
            {/* Content Section - Left side on desktop, top on mobile */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Large, bold multi-line headline with responsive typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
                Learn Web Development.<br />
                Build Real Projects.<br />
                Get Hired. <span className="inline-block">🌙✨</span>
              </h1>
              
              {/* Supporting text */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join thousands learning to code through gamified lessons and AI feedback.
              </p>
              
              {/* Integrated sign-up form using shadcn/ui components */}
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                  />
                  <Input
                    type="password"
                    placeholder="Create a password"
                    className="h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                  />
                </div>
                
                {/* Primary CTA button with Luna purple theme, optimized for touch targets */}
                <Button 
                  size="lg" 
                  className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start Learning Now - Free Forever
                </Button>
                
                {/* Secondary CTA */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full h-12 text-base font-medium bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                >
                  Try Free Lesson
                </Button>
              </div>
              
              {/* Trust indicator */}
              <p className="text-sm text-white/60 max-w-md mx-auto lg:mx-0">
                No credit card required • Start coding in 2 minutes
              </p>
            </div>
            
            {/* Interactive Demo Section - Right side on desktop, bottom on mobile */}
            <div className="relative">
              {/* Code Editor Preview */}
              <div className="bg-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-400 text-sm ml-3">index.html</span>
                  </div>
                  <div className="text-xs text-slate-500">Luna Code Editor</div>
                </div>
                
                {/* Editor Tabs */}
                <div className="flex bg-slate-800 border-b border-slate-700">
                  <div className="px-4 py-2 bg-slate-900 text-white text-sm border-r border-slate-700">
                    HTML
                  </div>
                  <div className="px-4 py-2 text-slate-400 text-sm border-r border-slate-700 hover:text-white cursor-pointer">
                    CSS
                  </div>
                  <div className="px-4 py-2 text-slate-400 text-sm hover:text-white cursor-pointer">
                    JS
                  </div>
                </div>
                
                {/* Code Content with proper alignment */}
                <div className="flex font-mono text-sm leading-relaxed">
                  {/* Line numbers */}
                  <div className="flex flex-col text-slate-500 text-right pr-4 pl-4 py-4 bg-slate-800/50 border-r border-slate-700 select-none">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                  </div>
                  
                  {/* Code content */}
                  <div className="flex-1 p-4 text-left">
                    <div>
                      <span className="text-slate-500">&lt;</span>
                      <span className="text-blue-400">h1</span>
                      <span className="text-slate-500">&gt;</span>
                      <span className="text-white">Hello, Luna! 🌙</span>
                      <span className="text-slate-500">&lt;/</span>
                      <span className="text-blue-400">h1</span>
                      <span className="text-slate-500">&gt;</span>
                    </div>
                    <div>
                      <span className="text-slate-500">&lt;</span>
                      <span className="text-blue-400">p</span>
                      <span className="text-slate-500">&gt;</span>
                      <span className="text-white">Welcome to your coding journey!</span>
                      <span className="text-slate-500">&lt;/</span>
                      <span className="text-blue-400">p</span>
                      <span className="text-slate-500">&gt;</span>
                    </div>
                    <div>
                      <span className="text-slate-500">&lt;</span>
                      <span className="text-blue-400">button</span>
                      <span className="text-green-400"> class</span>
                      <span className="text-slate-500">=</span>
                      <span className="text-yellow-300">"btn-primary"</span>
                      <span className="text-slate-500">&gt;</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-white">Start Learning</span>
                    </div>
                    <div>
                      <span className="text-slate-500">&lt;/</span>
                      <span className="text-blue-400">button</span>
                      <span className="text-slate-500">&gt;</span>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white rounded-full opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course/Learning Path Section */}
      <section id="courses" className="w-full section-luna">
        <div className="container-luna">
          <h2 className="text-section-title text-center mb-12">
            Choose Your Learning Path
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-luna p-6">
              <h3 className="text-card-title mb-4">Full-Stack Development</h3>
              <p style={{color: '#64748b'}}>
                Master HTML, CSS, JavaScript, React, TypeScript, and Next.js
              </p>
            </div>
            <div className="card-luna p-6">
              <h3 className="text-card-title mb-4">Frontend Specialist</h3>
              <p style={{color: '#64748b'}}>
                Focus on HTML, CSS, JavaScript, and React
              </p>
            </div>
            <div className="card-luna p-6">
              <h3 className="text-card-title mb-4">AI-Enhanced Development</h3>
              <p style={{color: '#64748b'}}>
                Coming soon - Learn with AI assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="features" className="w-full section-luna" style={{backgroundColor: '#f8fafc'}}>
        <div className="container-luna">
          <h2 className="text-section-title text-center mb-12">
            Why Choose Luna?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-luna-md">
              <h3 className="text-card-title">Gamified Learning</h3>
              <p style={{color: '#64748b'}}>
                Learn with interactive exercises, challenges, and projects, crafted by learning experts.
              </p>
            </div>
            <div className="code-editor p-4">
              <div className="text-sm mb-2" style={{color: '#f59e0b'}}>// Example lesson</div>
              <div>
                <span style={{color: '#8b5cf6'}}>const</span>{" "}
                <span style={{color: '#f59e0b'}}>greeting</span> = 
                <span style={{color: '#10b981'}}>"Hello, Luna!"</span>;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="about" className="w-full text-white section-luna" style={{backgroundColor: '#1e293b'}}>
        <div className="container-luna text-center space-luna-md">
          <h2 className="hero-title text-white">
            Ready to Start Your Coding Journey? 🌙
          </h2>
          <p className="hero-subtitle text-white/80 max-w-2xl mx-auto">
            Join Luna today and transform from beginner to developer - completely free, forever.
          </p>
          <button className="btn-luna-primary text-lg px-8 py-4">
            Start Learning Now - Free Forever
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border py-8">
        <div className="container-luna">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl">🌙</span>
              <span className="text-xl font-bold">Luna</span>
            </div>
            <p className="text-sm" style={{color: '#64748b'}}>
              © 2024 Luna. Learn web development the fun way.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
