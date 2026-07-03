"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Briefcase, BookOpen, Users, ArrowRight } from "lucide-react";

export function HeroSection() {
  const words = ["Jobs", "Internships", "Resources"];
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-start pt-20 pb-32 justify-center overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-4">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-4"
            >
              🚀 India's Largest Career Ecosystem
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
            >
              One Platform.<br />
              Endless <span className="text-gradient">Opportunities.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground flex flex-wrap items-center gap-x-2 h-16"
            >
              <span>Discover the best</span>
              <div className="relative overflow-hidden h-8 w-32 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary font-semibold absolute"
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="w-full mt-1">to kickstart your career journey.</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/jobs" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 group">
                Find Jobs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/resources" className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-medium hover:bg-muted/50 transition-all hover:scale-105">
                Explore Resources
              </Link>
            </motion.div>
          </div>

          {/* Right Content (Floating Cards) */}
          <div className="hidden lg:block relative h-[500px] perspective-1000 mt-4">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-64 glass-card rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">10k+ Jobs</h3>
              <p className="text-sm text-muted-foreground">From top startups and MNCs hiring right now.</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 left-0 w-64 glass-card rounded-2xl p-6 z-10 hover:scale-105 transition-transform"
            >
              <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Resources</h3>
              <p className="text-sm text-muted-foreground">Premium courses, roadmaps, and interview prep.</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 right-20 w-64 glass-card rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Connect with mentors and like-minded peers.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
