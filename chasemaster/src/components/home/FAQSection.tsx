"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Headphones, 
  Home, 
  Monitor, 
  Box,
  FileText,
  Briefcase,
  GraduationCap
} from "lucide-react";

const faqs = [
  {
    icon: Home,
    question: "What does your company do?",
    answer: "We are a platform dedicated to bridging the gap between students and top companies. We provide tools like an ATS Resume Builder, curated learning resources, and direct hiring opportunities for businesses."
  },
  {
    icon: Headphones,
    question: "Do you offer ongoing support or maintenance?",
    answer: "Yes, we provide continuous support for all our users. Whether you're a student building a resume or a company posting a job, our team is here to help."
  },
  {
    icon: Monitor,
    question: "Do you offer custom solutions or packages?",
    answer: "For our enterprise partners, we offer customized hiring solutions and tailored candidate sourcing packages to meet specific recruitment needs."
  },
  {
    icon: GraduationCap,
    question: "Is ChaseMaster really free for students?",
    answer: "Yes, the core platform, including job applications, roadmaps, and most learning resources, is completely free for students."
  },
  {
    icon: FileText,
    question: "How does the ATS Resume Builder work?",
    answer: "Our resume builder analyzes your content against industry-standard Applicant Tracking Systems. It scores your resume and provides actionable suggestions."
  },
  {
    icon: Briefcase,
    question: "Can companies directly hire from ChaseMaster?",
    answer: "Absolutely. Companies can post jobs, search our verified talent pool, and conduct initial assessments directly on the platform."
  },
  {
    icon: Box,
    question: "What about your infrastructure?",
    answer: "We use state-of-the-art, secure cloud infrastructure to ensure that student data and company information are protected and always accessible."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              FAQS
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Your Questions Answered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Find answers to the most commonly asked questions about our services and offerings.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-secondary-foreground" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-secondary-foreground" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const Icon = faq.icon;
            
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`
                  relative flex-none w-[300px] md:w-[320px] h-[400px] rounded-3xl p-8 cursor-pointer
                  snap-start transition-colors duration-500 flex flex-col border
                  ${isActive 
                    ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 shadow-xl' 
                    : 'bg-muted/30 text-foreground border-border/50 dark:border-white/10 hover:bg-muted/50'}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-auto transition-colors duration-500
                  ${isActive 
                    ? 'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900' 
                    : 'bg-background/80 text-foreground'}
                `}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold mb-4 leading-tight">
                    {faq.question}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ 
                          opacity: { duration: 0.2, delay: 0.1 },
                          height: { duration: 0.3, ease: "easeOut" }
                        }}
                        className="overflow-hidden"
                      >
                        <p className={`text-sm leading-relaxed ${isActive ? 'text-zinc-400 dark:text-zinc-600' : ''}`}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
