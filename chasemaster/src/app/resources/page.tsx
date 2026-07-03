"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, FileText, Video, Code, LayoutTemplate, Star } from "lucide-react";
import Link from "next/link";

const resourceCategories = [
  { id: "all", name: "All Resources" },
  { id: "development", name: "Web Development" },
  { id: "ai", name: "Artificial Intelligence" },
  { id: "design", name: "UI/UX Design" },
  { id: "career", name: "Career Prep" },
];

const mockResources = [
  {
    id: 1,
    title: "Complete Web Developer Roadmap 2026",
    description: "A comprehensive guide to becoming a modern full-stack web developer.",
    category: "Web Development",
    icon: Code,
    color: "bg-blue-500",
    rating: "4.9",
    type: "Article"
  },
  {
    id: 2,
    title: "ATS-Friendly Resume Templates",
    description: "Downloadable resume templates proven to pass Applicant Tracking Systems.",
    category: "Career Prep",
    icon: FileText,
    color: "bg-purple-500",
    rating: "4.8",
    type: "Template"
  },
  {
    id: 3,
    title: "Machine Learning Crash Course",
    description: "Get started with AI and ML fundamentals using Python and TensorFlow.",
    category: "Artificial Intelligence",
    icon: Video,
    color: "bg-green-500",
    rating: "4.9",
    type: "Video"
  },
  {
    id: 4,
    title: "System Design Interview Prep",
    description: "Master system design principles for FAANG interviews.",
    category: "Career Prep",
    icon: BookOpen,
    color: "bg-orange-500",
    rating: "4.7",
    type: "Guide"
  },
  {
    id: 5,
    title: "Figma UI Kit 2.0",
    description: "A premium set of UI components for rapid prototyping.",
    category: "UI/UX Design",
    icon: LayoutTemplate,
    color: "bg-pink-500",
    rating: "4.8",
    type: "Asset"
  }
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = React.useState("All Resources");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <div className="bg-sky-500/5 pt-12 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Level up your skills with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Curated articles, guides, templates, and roadmaps to accelerate your career growth.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto glass-card p-2 rounded-2xl flex items-center shadow-lg">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <input 
                  type="text" 
                  placeholder="Search for templates, guides, or skills..." 
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
      <div className="max-w-7xl mx-auto px-4 mt-8 relative z-20">
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {resourceCategories.map((cat, index) => (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border/50"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl p-6 border border-border/50 hover:border-sky-500/30 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`${resource.color}/20 p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${resource.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="flex items-center text-sm font-medium text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 mr-1 fill-amber-500" />
                    {resource.rating}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-sky-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform flex items-center">
                    Explore <span className="ml-1">→</span>
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="pt-12 flex justify-center">
          <button className="px-8 py-3 border border-border rounded-xl font-medium hover:bg-muted transition-colors">
            Load More Resources
          </button>
        </div>
      </div>
    </div>
  );
}
