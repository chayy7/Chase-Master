"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileCheck, FolderOpen, Smartphone, Globe, Video, Target } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Resume & LinkedIn Optimization",
    description: "Get a professional, ATS-friendly resume and a perfectly optimized LinkedIn profile to catch recruiters' attention.",
    price: "₹799",
    oldPrice: "₹1999",
    icon: FileCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Portfolio Building",
    description: "Showcase your work effectively with a stunning portfolio that highlights your skills and past projects.",
    price: "₹1299",
    oldPrice: "₹2499",
    icon: FolderOpen,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    id: 3,
    title: "App Development",
    description: "Custom mobile application development tailored to your needs with cutting-edge technologies.",
    price: "Custom Pricing",
    icon: Smartphone,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    id: 4,
    title: "Website Building",
    description: "Professional, responsive, and SEO-optimized website development to establish your online presence.",
    price: "Custom Pricing",
    icon: Globe,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: 5,
    title: "Online Classes",
    description: "Interactive online learning sessions designed to help you master new skills and industry trends.",
    price: "Custom Pricing",
    icon: Video,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    id: 6,
    title: "Exam & Interview Guidance",
    description: "Comprehensive assistance for company-specific exams and interviews to help you secure your dream job.",
    price: "₹1k - ₹5k",
    icon: Target,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground px-4"
          >
            Everything you need to accelerate your career journey, from crafting the perfect resume to acing your interviews.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 sm:p-8 rounded-3xl glass-card border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
                  {service.oldPrice && (
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground line-through decoration-destructive/70">
                      {service.oldPrice}
                    </span>
                  )}
                  <div className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full border border-border/50 text-xs sm:text-sm font-semibold text-foreground shadow-sm">
                    {service.price}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors pr-16 sm:pr-20">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-primary lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:-translate-x-2 lg:group-hover:translate-x-0">
                  Learn more 
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
