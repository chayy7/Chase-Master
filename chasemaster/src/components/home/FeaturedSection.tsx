"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, Building2, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";

const featuredJobs = [
  { id: 1, title: "Senior Frontend Engineer", company: "Google", location: "Bangalore, India", salary: "₹40L - ₹60L", type: "Full-time", logo: "G" },
  { id: 2, title: "Product Designer", company: "Microsoft", location: "Hyderabad, India", salary: "₹35L - ₹50L", type: "Full-time", logo: "M" },
  { id: 3, title: "Backend Developer", company: "Amazon", location: "Remote", salary: "₹30L - ₹45L", type: "Full-time", logo: "A" },
  { id: 4, title: "AI Research Scientist", company: "OpenAI", location: "Remote", salary: "₹50L - ₹80L", type: "Full-time", logo: "O" },
];

export function FeaturedSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Latest <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover roles at top companies and fast-growing startups looking for talent like you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link href="/jobs" className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
              View all jobs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="glass-card rounded-2xl p-6 border-border/40 hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col h-full shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center font-bold text-xl text-foreground">
                  {job.logo}
                </div>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Star className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-4 flex-grow">
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>{job.company}</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground">
                  {job.type}
                </span>
                <Link href={`/jobs/${job.id}`} className="text-sm font-medium text-primary hover:underline">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
