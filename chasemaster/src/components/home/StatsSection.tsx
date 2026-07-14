"use client";

import React, { useRef } from "react";
import { Users, Briefcase, BookOpen, Building } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const stats = [
  { id: 1, name: "ACTIVE USERS", value: "30K+", icon: Users, color: "text-[#3B82F6]" },
  { id: 2, name: "JOBS POSTED", value: "50K+", icon: Briefcase, color: "text-[#3B82F6]" },
  { id: 3, name: "COMPANIES", value: "5K+", icon: Building, color: "text-[#A855F7]" },
  { id: 4, name: "RESOURCES", value: "10K+", icon: BookOpen, color: "text-[#22C55E]" },
];

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom", // Scrubs exactly over the 400vh container
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // Handle resize to refresh ScrollTrigger calculations
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  }, { scope: containerRef });

  return (
    <div className="w-full relative bg-gray-50/50 dark:bg-[#050505] h-[400vh] z-10" ref={containerRef}>
      {/* By giving the container a massive height, we create a native scroll runway. */}
      {/* Sticky section stays pinned purely through native CSS, preventing any GSAP spacer bugs */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Horizontal Scroll Track */}
        <div 
          ref={trackRef}
          className="flex items-center gap-16 md:gap-32 px-10 md:px-32 w-max h-full"
        >
          
          <div className="shrink-0 w-[90vw] md:w-[60vw]">
            <h2 className="text-6xl md:text-[8vw] font-bold text-foreground dark:text-white tracking-tighter leading-none">
              Empowering <br />
              <span className="text-primary italic">Careers.</span>
            </h2>
            <p className="mt-8 text-xl md:text-3xl text-muted-foreground font-light max-w-2xl">
              Scroll to explore the impact ChaseMaster is making across the globe.
            </p>
          </div>
          
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex shrink-0 items-center gap-16 md:gap-32"
              >
                <div className="group flex flex-col items-start justify-center p-12 md:p-16 rounded-[2.5rem] bg-white dark:bg-[#0A0A0A] border border-border dark:border-white/5 shadow-xl relative w-[320px] md:w-[480px] hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.03)] dark:hover:bg-[#0c0c0c] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer">
                  <div className={`mb-10 ${stat.color} bg-primary/5 dark:bg-white/5 p-5 md:p-6 rounded-3xl w-fit transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary/10 dark:group-hover:bg-white/10 group-hover:scale-105`}>
                    <Icon className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-6xl md:text-[6rem] font-bold text-foreground dark:text-white mb-6 tracking-tighter leading-none">
                    {stat.value}
                  </h4>
                  <p className="text-sm md:text-xl font-bold text-muted-foreground uppercase tracking-[0.2em]">
                    {stat.name}
                  </p>
                </div>
              </div>
            );
          })}
          
          <div className="shrink-0 pl-16 pr-32 w-[90vw] md:w-[60vw]">
            <h2 className="text-6xl md:text-[8vw] font-bold text-muted-foreground/30 dark:text-white/20 tracking-tighter leading-none">
              Join the <br />
              <span className="text-primary italic">Movement.</span>
            </h2>
          </div>
          
        </div>
      </div>
    </div>
  );
}
