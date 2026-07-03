"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is ChaseMaster really free for students?",
    answer: "Yes, the core platform, including job applications, roadmaps, and most learning resources, is completely free for students."
  },
  {
    question: "How does the ATS Resume Builder work?",
    answer: "Our resume builder analyzes your content against industry-standard Applicant Tracking Systems. It scores your resume and provides actionable suggestions to improve your chances of getting shortlisted."
  },
  {
    question: "Can companies directly hire from ChaseMaster?",
    answer: "Absolutely. Companies can post jobs, search our verified talent pool, and conduct initial assessments directly on the platform."
  },
  {
    question: "How are the resources curated?",
    answer: "Resources are community-driven and expert-curated. They are ranked based on user ratings, views, and relevance to current industry trends."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the platform and how it works.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden border border-border/40 shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-foreground">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
