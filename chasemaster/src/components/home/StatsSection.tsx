"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, BookOpen, Building } from "lucide-react";

const stats = [
  { id: 1, name: "Active Users", value: "100K+", icon: Users, color: "text-blue-500" },
  { id: 2, name: "Jobs Posted", value: "50K+", icon: Briefcase, color: "text-primary" },
  { id: 3, name: "Companies", value: "5K+", icon: Building, color: "text-purple-500" },
  { id: 4, name: "Resources", value: "10K+", icon: BookOpen, color: "text-green-500" },
];

export function StatsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl border-border/40 hover:border-primary/50 transition-colors group shadow-lg"
              >
                <div className={`p-4 rounded-full bg-muted/50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
