'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scroll effect for header styling with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('mobile-menu-button');
      
      if (isMenuOpen && nav && button && 
          !nav.contains(event.target as Node) && 
          !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(30, 41, 59, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
        boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="container-luna">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Now clickable home button */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer transition-opacity hover:opacity-80"
          >
            <span className="text-2xl">🌙</span>
            <span className="text-xl font-bold text-white">Luna</span>
          </button>

          {/* Tablet/Desktop Navigation - Hidden on mobile, visible on md+ */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('courses')}
              className="nav-link text-white hover:text-primary"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="nav-link text-white hover:text-primary"
            >
              Features
            </button>
          </nav>

          {/* Tablet/Desktop CTA Button - Hidden on mobile, visible on md+ */}
          <Link href="/signup">
            <button className="hidden md:block btn-luna btn-luna-primary">
              Start Learning
            </button>
          </Link>

          {/* Mobile Menu Button - Visible on mobile, hidden on md+ */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg border-none bg-transparent cursor-pointer transition-colors hover:bg-white/10 touch-target"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative flex flex-col justify-center items-center w-6 h-6">
              <span
                className="absolute block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"
                style={{
                  transform: isMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)'
                }}
              />
              <span
                className="absolute block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"
                style={{
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
                }}
              />
              <span
                className="absolute block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"
                style={{
                  transform: isMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)'
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu - Slide down animation */}
        <nav
          id="mobile-nav"
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isMenuOpen ? '16rem' : '0',
            opacity: isMenuOpen ? 1 : 0,
            paddingBottom: isMenuOpen ? '1.5rem' : '0'
          }}
        >
          <div className="flex flex-col pt-4 gap-2 border-t border-white/20">
            <button
              onClick={() => scrollToSection('courses')}
              className="nav-link-mobile text-white hover:text-primary hover:bg-white/10"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="nav-link-mobile text-white hover:text-primary hover:bg-white/10"
            >
              Features
            </button>
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link href="/signup">
                <button 
                  className="btn-luna btn-luna-primary w-full touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}