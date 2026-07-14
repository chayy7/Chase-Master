"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import BubbleMenu from "@/components/ui/BubbleMenu";

const navLinks = [
  { label: "Jobs", href: "/jobs" },
  { label: "Internships", href: "/internships" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Temporary removal of login / signup buttons, keeping the logic for later as requested
  const loginButton = (
    <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
      Log in
    </Link>
  );

  const signupButton = (
    <Link href="/signup" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
      Sign up
    </Link>
  );

  return (
    <>
      <BubbleMenu
        useFixedPosition={true}
        menuBg={theme === 'dark' ? '#111' : '#fff'}
        menuContentColor={theme === 'dark' ? '#fff' : '#111'}
        logo={
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-cover" />
            <span className="font-bold text-lg tracking-tight hidden sm:block" style={{ color: theme === 'dark' ? '#fff' : '#111' }}>
              Chase Master
            </span>
          </Link>
        }
        items={navLinks}
      />

      {/* Theme toggle kept separate or hidden if not needed. For now floating on bottom right */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-background border border-border shadow-lg hover:bg-muted text-muted-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      )}

      {/* 
        NOTE: Login and Signup logic preserved for later:
        {loginButton}
        {signupButton}
      */}
    </>
  );
}
