"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, Briefcase, Github, ArrowRight } from "lucide-react";

export default function Signup() {
  const [accountType, setAccountType] = React.useState<"student" | "company">("student");

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="max-w-md w-full glass-card rounded-3xl p-8 border-border/50 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">Create Account</h2>
          <p className="text-muted-foreground">Join ChaseMaster to unlock endless opportunities.</p>
        </div>

        {/* Account Type Toggle */}
        <div className="flex p-1 bg-muted/50 rounded-xl mb-8">
          <button
            onClick={() => setAccountType("student")}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
              accountType === "student" 
                ? "bg-background text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            I&apos;m a Student
          </button>
          <button
            onClick={() => setAccountType("company")}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
              accountType === "company" 
                ? "bg-background text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            I&apos;m a Company
          </button>
        </div>

        <form className="space-y-4">
          <AnimatePresence mode="wait">
            {accountType === "student" ? (
              <motion.div
                key="student"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-border/50 rounded-xl bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="company"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-border/50 rounded-xl bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="email"
                className="block w-full pl-10 pr-3 py-3 border border-border/50 rounded-xl bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-border/50 rounded-xl bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all group mt-2"
          >
            Create Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
