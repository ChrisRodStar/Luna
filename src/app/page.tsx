import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="w-full text-white section-luna pt-16 md:pt-18 lg:pt-20" style={{backgroundColor: '#1e293b'}}>
        <div className="container-luna">
          <div className="text-center space-luna-lg">
            <h1 className="hero-title text-white">
              Learn Web Development.<br />
              Build Real Projects.<br />
              Get Hired. 🌙✨
            </h1>
            <p className="hero-subtitle text-white/80 max-w-2xl mx-auto">
              Join thousands learning to code through gamified lessons and AI feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-luna-primary">
                Start Learning Now
              </button>
              <button className="btn-luna-accent">
                Try Free Lesson
              </button>
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
