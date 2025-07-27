'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface GamificationStats {
  xp: number;
  level: number;
  streak: number;
  badges: number;
}

export default function GamificationShowcase() {
  const [stats, setStats] = useState<GamificationStats>({
    xp: 0,
    level: 1,
    streak: 0,
    badges: 0
  });
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentDemo, setCurrentDemo] = useState<'lesson' | 'project' | 'streak'>('lesson');

  // Simulate earning XP and leveling up
  const simulateProgress = (type: 'lesson' | 'project' | 'streak') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentDemo(type);
    
    setTimeout(() => {
      setStats(prev => {
        const newStats = { ...prev };
        
        switch (type) {
          case 'lesson':
            newStats.xp += 25;
            if (newStats.xp >= 100 && newStats.level === 1) {
              newStats.level = 2;
              newStats.badges += 1;
            } else if (newStats.xp >= 200 && newStats.level === 2) {
              newStats.level = 3;
              newStats.badges += 1;
            }
            break;
          case 'project':
            newStats.xp += 50;
            newStats.badges += 1;
            if (newStats.xp >= 100 && newStats.level === 1) {
              newStats.level = 2;
            } else if (newStats.xp >= 200 && newStats.level === 2) {
              newStats.level = 3;
            }
            break;
          case 'streak':
            newStats.streak += 1;
            newStats.xp += 10;
            if (newStats.streak === 7 || newStats.streak === 14) {
              newStats.badges += 1;
            }
            break;
        }
        
        return newStats;
      });
      
      setTimeout(() => setIsAnimating(false), 1200);
    }, 300);
  };

  // Reset demo
  const resetDemo = () => {
    setStats({ xp: 0, level: 1, streak: 0, badges: 0 });
    setIsAnimating(false);
    setCurrentDemo('lesson');
  };

  return (
    <section id="gamification" className="w-full section-luna bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Floating background elements - hidden on mobile for better performance */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="floating-element absolute top-20 left-10 text-2xl opacity-20">⭐</div>
        <div className="floating-element absolute top-40 right-20 text-xl opacity-30" style={{ animationDelay: '1s' }}>🌟</div>
        <div className="floating-element absolute bottom-32 left-20 text-3xl opacity-25" style={{ animationDelay: '2s' }}>✨</div>
        <div className="floating-element absolute top-60 left-1/3 text-lg opacity-20" style={{ animationDelay: '3s' }}>💫</div>
        <div className="floating-element absolute bottom-20 right-10 text-2xl opacity-30" style={{ animationDelay: '4s' }}>🌙</div>
        <div className="floating-element absolute top-32 right-1/3 text-xl opacity-25" style={{ animationDelay: '5s' }}>⚡</div>
      </div>
      
      <div className="container-luna relative z-10">
        <div className="text-center space-y-6 mb-12">
          <h2 className="hero-title text-white">
            Learn Through Play 🎮
          </h2>
          <p className="hero-subtitle text-white/80 max-w-3xl mx-auto">
            Experience the addictive progression system that makes learning web development 
            as engaging as your favorite mobile game. Every lesson, every project, every day counts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Interactive Demo Panel */}
          <div className="order-2 lg:order-1">
            <div className="card-luna p-6 lg:p-8 bg-slate-800/50 backdrop-blur-sm border-purple-500/20" role="region" aria-labelledby="demo-title">
              <h3 id="demo-title" className="text-card-title text-white mb-6">Try the Luna Experience</h3>
              
              {/* Demo Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                <Button
                  onClick={() => simulateProgress('lesson')}
                  disabled={isAnimating}
                  className="btn-luna btn-luna-primary h-12 text-sm font-medium touch-target transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Simulate completing a lesson to earn 25 XP"
                >
                  <span className="flex flex-col items-center">
                    <span>Complete Lesson</span>
                    <span className="text-xs opacity-80">+25 XP</span>
                  </span>
                </Button>
                
                <Button
                  onClick={() => simulateProgress('project')}
                  disabled={isAnimating}
                  className="btn-luna btn-luna-accent h-12 text-sm font-medium touch-target transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Simulate finishing a project to earn 50 XP and a badge"
                >
                  <span className="flex flex-col items-center">
                    <span>Finish Project</span>
                    <span className="text-xs opacity-80">+50 XP</span>
                  </span>
                </Button>
                
                <Button
                  onClick={() => simulateProgress('streak')}
                  disabled={isAnimating}
                  className="btn-luna btn-luna-secondary h-12 text-sm font-medium touch-target transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Simulate daily practice to increase streak and earn 10 XP"
                >
                  <span className="flex flex-col items-center">
                    <span>Daily Practice</span>
                    <span className="text-xs opacity-80">🔥 Streak</span>
                  </span>
                </Button>
              </div>

              {/* Screen reader announcements */}
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {isAnimating && currentDemo === 'lesson' && `Lesson completed! Earned 25 XP. Current level: ${stats.level}`}
                {isAnimating && currentDemo === 'project' && `Project finished! Earned 50 XP and a badge. Current level: ${stats.level}`}
                {isAnimating && currentDemo === 'streak' && `Daily practice completed! Streak increased to ${stats.streak} days. Earned 10 XP.`}
              </div>

              {/* Progress Visualization */}
              <div className="space-y-6">
                {/* XP Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Experience Points</span>
                    <span className={`text-sm text-purple-300 ${isAnimating ? 'animate-xp-gain' : ''}`}>
                      {stats.xp} XP
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden relative">
                    <div 
                      className={`h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000 ease-out relative ${
                        isAnimating ? 'shadow-lg shadow-purple-500/50' : ''
                      }`}
                      style={{ width: `${Math.min((stats.xp % 100), 100)}%` }}
                    >
                      {isAnimating && (
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-white/50 text-center">
                    {stats.xp % 100}/100 XP to next level
                  </div>
                </div>

                {/* Level and Streak Display */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-purple-500/20 relative overflow-hidden">
                    {isAnimating && (currentDemo === 'lesson' || currentDemo === 'project') && (
                      <div className="absolute inset-0 bg-purple-500/20 animate-pulse" />
                    )}
                    <div className={`text-2xl font-bold text-purple-300 relative z-10 ${
                      isAnimating && currentDemo !== 'streak' ? 'animate-level-up' : ''
                    }`}>
                      {stats.level}
                    </div>
                    <div className="text-sm text-white/70 relative z-10">Level</div>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-orange-500/20 relative overflow-hidden">
                    {isAnimating && currentDemo === 'streak' && (
                      <div className="absolute inset-0 bg-orange-500/20 animate-pulse" />
                    )}
                    <div className={`text-2xl font-bold text-orange-300 relative z-10 ${
                      isAnimating && currentDemo === 'streak' ? 'animate-streak-fire' : ''
                    }`}>
                      {stats.streak}🔥
                    </div>
                    <div className="text-sm text-white/70 relative z-10">Day Streak</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Achievement Badges</span>
                    <span className="text-xs text-yellow-300">{stats.badges} earned</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: Math.max(stats.badges + 2, 4) }, (_, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-lg transition-all duration-300 ${
                          i < stats.badges 
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white font-bold' 
                            : 'bg-slate-600/50 text-slate-400 border border-slate-500/30'
                        } ${
                          i === stats.badges - 1 && isAnimating ? 'animate-badge-earn' : ''
                        }`}
                      >
                        {i < stats.badges ? (
                          i === 0 ? '🏆' : i === 1 ? '⭐' : i === 2 ? '🚀' : i === 3 ? '💎' : '👑'
                        ) : '🔒'}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-white/50">
                    {stats.badges === 0 && "Complete your first lesson to earn a badge!"}
                    {stats.badges === 1 && "Great start! Keep learning to unlock more badges."}
                    {stats.badges === 2 && "You're on fire! 🔥 More achievements await."}
                    {stats.badges >= 3 && "Amazing progress! You're becoming a coding master! ✨"}
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <Button
                onClick={resetDemo}
                variant="outline"
                className="w-full mt-6 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 touch-target transition-all duration-200"
                aria-label="Reset gamification demo to initial state"
              >
                Reset Demo
              </Button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-8">
              {/* XP System */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Experience Points</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Earn XP for every lesson completed, project built, and milestone reached. 
                    Watch your progress grow with each line of code you write.
                  </p>
                </div>
              </div>

              {/* Level System */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Level Progression</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Advance through developer levels from Beginner to Full-Stack Pro. 
                    Each level unlocks new challenges and advanced topics.
                  </p>
                </div>
              </div>

              {/* Streak System */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Daily Streaks</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Build consistent coding habits with daily practice streaks. 
                    The longer your streak, the more bonus XP you earn.
                  </p>
                </div>
              </div>

              {/* Achievement System */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Achievement Badges</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Unlock special badges for completing challenges, maintaining streaks, 
                    and mastering new technologies. Show off your coding journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Luna Mascot Integration */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🌙</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Meet Luna</h4>
                  <p className="text-white/70 text-sm">
                    Your coding companion who celebrates every victory and guides you through challenges. 
                    Luna grows stronger as you level up! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}