'use client';

import { useState, useEffect } from 'react';

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
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : 'none',
        boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container-luna">
        <div className="flex items-center justify-between" style={{height: '4rem'}}>
          {/* Logo */}
          <div className="flex items-center" style={{gap: '0.5rem'}}>
            <span style={{fontSize: '1.5rem'}}>🌙</span>
            <span style={{
              fontSize: '1.25rem', 
              fontWeight: '700',
              color: isScrolled ? '#1f2937' : '#ffffff'
            }}>Luna</span>
          </div>

          {/* Tablet/Desktop Navigation - Hidden on mobile, visible on md+ */}
          <nav className="hidden md:flex items-center" style={{gap: '2rem'}}>
            <button
              onClick={() => scrollToSection('courses')}
              style={{
                color: isScrolled ? '#1f2937' : '#ffffff',
                fontWeight: '500',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#1f2937' : '#ffffff'}
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('features')}
              style={{
                color: isScrolled ? '#1f2937' : '#ffffff',
                fontWeight: '500',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#1f2937' : '#ffffff'}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              style={{
                color: isScrolled ? '#1f2937' : '#ffffff',
                fontWeight: '500',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#1f2937' : '#ffffff'}
            >
              About
            </button>
          </nav>

          {/* Tablet/Desktop CTA Button - Hidden on mobile, visible on md+ */}
          <button className="hidden md:block btn-luna-primary">
            Start Learning
          </button>

          {/* Mobile Menu Button - Visible on mobile, hidden on md+ */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative flex flex-col justify-center items-center" style={{width: '1.5rem', height: '1.5rem'}}>
              <span
                style={{
                  position: 'absolute',
                  display: 'block',
                  width: '1.25rem',
                  height: '2px',
                  backgroundColor: isScrolled ? '#1f2937' : '#ffffff',
                  transition: 'all 0.3s ease-in-out',
                  transform: isMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  display: 'block',
                  width: '1.25rem',
                  height: '2px',
                  backgroundColor: isScrolled ? '#1f2937' : '#ffffff',
                  transition: 'all 0.3s ease-in-out',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  display: 'block',
                  width: '1.25rem',
                  height: '2px',
                  backgroundColor: isScrolled ? '#1f2937' : '#ffffff',
                  transition: 'all 0.3s ease-in-out',
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
            maxHeight: isMenuOpen ? '24rem' : '0',
            opacity: isMenuOpen ? 1 : 0,
            paddingBottom: isMenuOpen ? '1.5rem' : '0'
          }}
        >
          <div className="flex flex-col pt-4" style={{gap: '0.5rem', borderTop: '1px solid #e2e8f0'}}>
            <button
              onClick={() => scrollToSection('courses')}
              className="nav-link-mobile"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="nav-link-mobile"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link-mobile"
            >
              About
            </button>
            
            {/* Mobile CTA Button */}
            <div style={{paddingTop: '1rem'}}>
              <button 
                className="btn-luna-primary"
                style={{width: '100%', minHeight: '44px'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Start Learning
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}