import Navigation from "@/components/Navigation";
import InteractiveCodeEditor from "@/components/InteractiveCodeEditor";
import CoursesSection from "@/components/CoursesSection";
import PlatformFeatures from "@/components/PlatformFeatures";
import GamificationShowcase from "@/components/GamificationShowcase";
import Footer from "@/components/Footer";
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
      <CoursesSection />

      {/* Platform Features Section */}
      <PlatformFeatures />

      {/* Gamification Showcase Section */}
      <GamificationShowcase />

      {/* Final CTA Section */}
      <section 
        id="final-cta" 
        className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        {/* Subtle moon/stars background animation optimized for mobile */}
        <div className="absolute inset-0">
          {/* Stars with optimized animations */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-100 rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Additional mobile-optimized stars */}
          <div className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Larger moon element with glow animation */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full animate-moon-glow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 md:py-20 lg:py-24">
          <div className="container-luna">
            {/* Mobile-first centered design using Tailwind flexbox */}
            <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
              
              {/* Compelling headline with responsive Tailwind typography utilities */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl">
                Ready to Start Your Coding Journey? 🌙
              </h2>
              
              {/* Supporting text */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
                Join Luna today and transform from beginner to developer - 
                <span className="text-yellow-300 font-semibold"> completely free, forever.</span>
              </p>
              
              {/* Prominent sign-up button with proper touch targets using shadcn/ui Button */}
              <div className="pt-4 md:pt-6">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 h-auto min-h-[3rem] md:min-h-[3.5rem] rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border-0"
                  >
                    Start Learning Now - Free Forever
                  </Button>
                </Link>
              </div>
              
              {/* Additional trust signal */}
              <p className="text-sm md:text-base text-white/60 mt-4">
                No credit card required • Join thousands of learners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
