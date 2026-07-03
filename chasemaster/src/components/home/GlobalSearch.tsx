"use client";

import * as React from "react";
import { Search, Briefcase, BookOpen, Building, Code, MapPin, DollarSign, Star, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  { id: "all", name: "All", icon: Search },
  { id: "jobs", name: "Jobs", icon: Briefcase },
  { id: "companies", name: "Companies", icon: Building },
  { id: "resources", name: "Resources", icon: BookOpen },
];

// Mock data for search
const mockDatabase = [
  { id: 1, type: "jobs", title: "Frontend Developer", company: "Google", location: "Bangalore", salary: "₹18L - ₹30L", icon: "G", color: "bg-blue-500", link: "/jobs" },
  { id: 2, type: "jobs", title: "Cloud Architect", company: "Google", location: "Hyderabad", salary: "₹25L - ₹40L", icon: "G", color: "bg-blue-500", link: "/jobs" },
  { id: 3, type: "companies", title: "Google", subtitle: "Internet & Technology", location: "Global", rating: "4.9", icon: "G", color: "bg-blue-500", link: "/companies" },
  { id: 4, type: "jobs", title: "Software Engineer II", company: "Microsoft", location: "Hyderabad", salary: "₹20L - ₹35L", icon: "M", color: "bg-green-500", link: "/jobs" },
  { id: 5, type: "companies", title: "Microsoft", subtitle: "Software & Hardware", location: "Global", rating: "4.8", icon: "M", color: "bg-green-500", link: "/companies" },
  { id: 6, type: "resources", title: "System Design Interview Prep", subtitle: "Master FAANG interviews", author: "Tech Lead", rating: "4.9", icon: <BookOpen className="w-5 h-5 text-orange-500" />, color: "bg-orange-500/10", link: "/resources" },
  { id: 7, type: "resources", title: "Web Developer Roadmap", subtitle: "Complete guide for modern web", author: "ChaseMaster", rating: "4.9", icon: <Code className="w-5 h-5 text-blue-500" />, color: "bg-blue-500/10", link: "/resources" },
];

export function GlobalSearch() {
  const [activeCategory, setActiveCategory] = React.useState("jobs");
  const [isFocused, setIsFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return mockDatabase.filter(item => {
      const matchesCategory = activeCategory === "all" || item.type === activeCategory;
      const matchesQuery = item.title.toLowerCase().includes(query) || 
                           (item.company && item.company.toLowerCase().includes(query)) ||
                           (item.subtitle && item.subtitle.toLowerCase().includes(query));
      
      return matchesCategory && matchesQuery;
    }).slice(0, 5); // Limit to top 5 results
  }, [searchQuery, activeCategory]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 mb-20 relative z-30 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: "spring", bounce: 0.4 }}
        whileHover={{ y: -5 }}
        className="glass-card rounded-2xl p-4 md:p-6 shadow-xl relative"
      >
        <div className="flex overflow-x-auto pb-4 mb-4 gap-2 no-scrollbar border-b border-border/40">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSearchQuery(""); // Clear search on category change
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-transparent hover:border-border/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className={`relative flex items-center transition-all duration-300 rounded-xl border bg-background/80 backdrop-blur-xl ${isFocused || searchQuery ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-border/40'}`}>
          <div className="pl-4 pr-2 py-3 text-muted-foreground">
            <Search className={`w-6 h-6 transition-colors ${isFocused ? 'text-primary' : ''}`} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search for ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()}...`}
            className="flex-1 bg-transparent border-none outline-none py-4 px-2 text-foreground placeholder:text-muted-foreground w-full"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay blur so we can click results
          />
          <div className="pr-2 py-2 flex items-center">
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-muted-foreground hover:text-foreground p-2 mr-2 transition-colors text-sm font-medium"
              >
                Clear
              </button>
            )}
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md active:scale-95">
              Search
            </button>
          </div>
        </div>

        {/* Live Search Dropdown */}
        <AnimatePresence>
          {searchQuery && (isFocused || searchResults.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden z-50 mx-4 md:mx-6"
            >
              {searchResults.length > 0 ? (
                <div className="flex flex-col">
                  <div className="px-4 py-3 border-b border-border/40 bg-muted/30">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Suggested Results
                    </p>
                  </div>
                  {searchResults.map((result, index) => (
                    <Link 
                      href={result.link} 
                      key={`${result.id}-${index}`}
                      className="flex items-center gap-4 p-4 hover:bg-muted/50 border-b border-border/20 last:border-0 transition-colors group cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm ${typeof result.icon === 'string' ? `${result.color} text-white` : result.color}`}>
                        {result.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                            {result.title}
                          </h4>
                          {result.type === 'jobs' && (
                            <span className="text-xs font-medium bg-green-500/10 text-green-600 px-2 py-1 rounded-md flex items-center">
                              <DollarSign className="w-3 h-3 mr-0.5" /> {result.salary}
                            </span>
                          )}
                          {result.type === 'companies' && (
                            <span className="text-xs font-medium bg-amber-500/10 text-amber-500 px-2 py-1 rounded-md flex items-center">
                              <Star className="w-3 h-3 mr-0.5 fill-amber-500" /> {result.rating}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-3">
                          {result.company && (
                            <span className="font-medium text-foreground/80">{result.company}</span>
                          )}
                          {result.subtitle && (
                            <span className="font-medium text-foreground/80">{result.subtitle}</span>
                          )}
                          
                          {result.location && (
                            <div className="flex items-center">
                              <span className="w-1 h-1 rounded-full bg-border mr-3" />
                              <MapPin className="w-3.5 h-3.5 mr-1" /> {result.location}
                            </div>
                          )}
                          
                          {result.author && (
                            <div className="flex items-center">
                              <span className="w-1 h-1 rounded-full bg-border mr-3" />
                              By {result.author}
                            </div>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                  <div className="p-3 bg-muted/20 text-center border-t border-border/40">
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      View all results for "{searchQuery}" →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <p className="text-foreground font-medium mb-1">No results found</p>
                  <p className="text-sm text-muted-foreground">
                    We couldn't find anything matching "{searchQuery}" in {categories.find(c => c.id === activeCategory)?.name}.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
