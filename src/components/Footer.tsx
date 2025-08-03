import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="container-luna py-12 md:py-16">
        {/* Mobile-first footer with company information and links */}
        {/* Stack elements vertically on mobile, expand to multi-column on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Company/Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            {/* Luna branding that scales properly across breakpoints */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-3xl">🌙</span>
              <span className="text-2xl font-bold text-slate-900">Luna</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Learn web development the fun way through gamified lessons and interactive coding exercises.
            </p>
            {/* Social media links with touch-friendly spacing */}
            <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
              <Link 
                href="https://twitter.com/setluna" 
                className="text-slate-500 hover:text-purple-600 transition-colors duration-200 p-2 -m-2"
                aria-label="Follow Luna on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link 
                href="https://github.com/setluna" 
                className="text-slate-500 hover:text-purple-600 transition-colors duration-200 p-2 -m-2"
                aria-label="Follow Luna on GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link 
                href="https://discord.gg/setluna" 
                className="text-slate-500 hover:text-purple-600 transition-colors duration-200 p-2 -m-2"
                aria-label="Join Luna Discord community"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Learning Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
              Learning
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/courses" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/career-paths" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Career Paths
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/certificates" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/community" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link 
                  href="/discord" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Discord Server
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/success-stories" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/help" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            {/* Contact information with touch-friendly spacing */}
            <div className="pt-4 space-y-2">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                Contact
              </p>
              <p className="text-sm text-slate-600">
                <Link 
                  href="mailto:hello@setluna.com" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  hello@setluna.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright that scales properly across breakpoints */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © 2025 Luna. Learn web development the fun way.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy" 
                className="text-xs text-slate-500 hover:text-purple-600 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-xs text-slate-500 hover:text-purple-600 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                href="/cookies" 
                className="text-xs text-slate-500 hover:text-purple-600 transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}