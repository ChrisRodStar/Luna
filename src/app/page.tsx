import Navigation from "@/components/Navigation";
import InteractiveCodeEditor from "@/components/InteractiveCodeEditor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full text-white min-h-screen flex items-center pt-16 md:pt-18 lg:pt-20"
      >
        <div className="container-luna w-full">
          {/* Mobile-first split-layout hero using Tailwind grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)]">
            {/* Content Section - Left side on desktop, top on mobile */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Large, bold multi-line headline with responsive typography */}
              <h1 className="hero-title text-white">
                Learn to code
                <br />
                Build a portfolio
                <br />
                Get hire
              </h1>

              {/* Supporting text */}
              <p className="hero-subtitle text-white/80 max-w-2xl mx-auto lg:mx-0">
                Join thousands learning to code through gamified lessons and AI
                feedback.
              </p>

              {/* CTA buttons */}
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                {/* Primary CTA button with Luna purple theme, optimized for touch targets */}
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="btn-luna btn-luna-primary w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Start Learning Now
                  </Button>
                </Link>

                {/* Google Sign In CTA */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 mt-4 text-base font-medium bg-white hover:bg-gray-50 border-white text-gray-700 hover:text-gray-800 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <Image
                    src="/google.svg" // Path to your Google SVG in the public directory
                    alt="Google logo"
                    width={24} // Specify the width of the SVG
                    height={24} // Specify the height of the SVG
                  />
                  Sign in with Google
                </Button>
              </div>
            </div>

            {/* Interactive Demo Section - Desktop only */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <InteractiveCodeEditor />
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
              <p className="text-muted-foreground">
                Master HTML, CSS, JavaScript, React, TypeScript, and Next.js
              </p>
            </div>
            <div className="card-luna p-6">
              <h3 className="text-card-title mb-4">Frontend Specialist</h3>
              <p className="text-muted-foreground">
                Focus on HTML, CSS, JavaScript, and React
              </p>
            </div>
            <div className="card-luna p-6">
              <h3 className="text-card-title mb-4">AI-Enhanced Development</h3>
              <p className="text-muted-foreground">
                Coming soon - Learn with AI assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="features" className="w-full section-luna">
        <div className="container-luna">
          <h2 className="text-section-title text-center mb-12">
            Why Choose Luna?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-luna-md">
              <h3 className="text-card-title">Gamified Learning</h3>
              <p className="text-muted-foreground">
                Learn with interactive exercises, challenges, and projects,
                crafted by learning experts.
              </p>
            </div>
            <div className="card-luna p-4">
              <div className="text-sm mb-2 text-accent">// Example lesson</div>
              <div className="text-code-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">greeting</span> =
                <span className="text-green-400">"Hello, Luna!"</span>;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="about" className="w-full text-white section-luna">
        <div className="container-luna text-center space-luna-md">
          <h2 className="hero-title text-white">
            Ready to Start Your Coding Journey? 🌙
          </h2>
          <p className="hero-subtitle text-white/80 max-w-2xl mx-auto">
            Join Luna today and transform from beginner to developer -
            completely free, forever.
          </p>
          <Link href="/signup">
            <button className="btn-luna btn-luna-primary text-lg px-8 py-4">
              Start Learning Now - Free Forever
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border py-8">
        <div className="container-luna">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl">🌙</span>
              <span className="text-xl font-bold text-foreground">Luna</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Luna. Learn web development the fun way.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
