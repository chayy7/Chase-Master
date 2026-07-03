"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, DollarSign, Filter, ChevronDown, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";

const mockInternships = [
  {
    id: 1,
    company: "Meta",
    role: "Software Engineering Intern",
    location: "London, UK",
    stipend: "£4,000/mo",
    duration: "12 Weeks",
    tags: ["React", "C++", "Summer 2027"],
    logo: "M",
    color: "bg-blue-600",
    ppo: "High Chance"
  },
  {
    id: 2,
    company: "Apple",
    role: "Hardware Engineering Intern",
    location: "Cupertino, CA",
    stipend: "$8,500/mo",
    duration: "6 Months",
    tags: ["Verilog", "Embedded", "Fall 2026"],
    logo: "A",
    color: "bg-gray-800",
    ppo: "Medium Chance"
  },
  {
    id: 3,
    company: "Goldman Sachs",
    role: "Quantitative Analyst Intern",
    location: "Bengaluru, India",
    stipend: "₹1.5L/mo",
    duration: "8 Weeks",
    tags: ["Python", "Math", "Summer 2026"],
    logo: "G",
    color: "bg-sky-600",
    ppo: "High Chance"
  },
  {
    id: 4,
    company: "Uber",
    role: "Data Science Intern",
    location: "Remote",
    stipend: "$7,000/mo",
    duration: "12 Weeks",
    tags: ["SQL", "Machine Learning"],
    logo: "U",
    color: "bg-black",
    ppo: "High Chance"
  }
];

export default function Internships() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <div className="bg-purple-500/5 pt-12 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Launch your career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-primary">Internships</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gain real-world experience. Find summer internships, co-ops, and entry-level programs.
            </p>

            {/* Search Bar */}
            <div className="glass-card p-2 rounded-2xl flex items-center shadow-lg">
              <div className="flex-1 flex items-center px-4 border-r border-border/50">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <input 
                  type="text" 
                  placeholder="Internship title, skills, or company" 
                  className="w-full bg-transparent border-none outline-none py-3 text-foreground"
                />
              </div>
              <div className="hidden md:flex flex-1 items-center px-4">
                <MapPin className="w-5 h-5 text-muted-foreground mr-3" />
                <input 
                  type="text" 
                  placeholder="Location or remote" 
                  className="w-full bg-transparent border-none outline-none py-3 text-foreground"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors ml-2">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20 flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-64 flex-shrink-0 space-y-6"
        >
          <div className="glass-card rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <Filter className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">Duration</h4>
                <div className="space-y-2">
                  {["1-3 Months", "3-6 Months", "6+ Months"].map((type) => (
                    <label key={type} className="flex items-center group cursor-pointer">
                      <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                      <span className="ml-3 text-sm text-foreground group-hover:text-primary transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">Season</h4>
                <div className="space-y-2">
                  {["Summer 2026", "Fall 2026", "Winter 2027", "Spring 2027"].map((level) => (
                    <label key={level} className="flex items-center group cursor-pointer">
                      <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                      <span className="ml-3 text-sm text-foreground group-hover:text-primary transition-colors">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Listings */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground text-sm font-medium">Showing 1-4 of 892 internships</p>
            <div className="flex items-center text-sm font-medium text-foreground cursor-pointer hover:text-primary">
              Sort by: Recent <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>

          {mockInternships.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 border border-border/50 hover:border-purple-500/30 transition-all cursor-pointer shadow-sm hover:shadow-md group"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className={`${job.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-inner`}>
                  {job.logo}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors">{job.role}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1 gap-3">
                        <span className="font-medium text-foreground/80">{job.company}</span>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" /> {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> {job.duration}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 flex flex-col items-end gap-2">
                      <div className="flex items-center text-sm font-semibold bg-green-500/10 text-green-600 px-3 py-1 rounded-full">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {job.stipend}
                      </div>
                      <div className="flex items-center text-xs font-medium text-purple-600 bg-purple-500/10 px-2 py-1 rounded-md">
                        <GraduationCap className="w-3 h-3 mr-1" /> PPO: {job.ppo}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-lg border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="pt-8 flex justify-center">
            <button className="px-6 py-2 border border-border rounded-xl font-medium hover:bg-muted transition-colors">
              Load More Internships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
