import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-md">
                <img 
                  src="/logo.png" 
                  alt="NEXTSTEP PRO" 
                  className="max-w-full max-h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-foreground">
                Chase Master
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              India's largest career ecosystem. One platform. Endless opportunities.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Students</h3>
            <ul className="space-y-3">
              <li><Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link></li>
              <li><Link href="/internships" className="text-sm text-muted-foreground hover:text-primary transition-colors">Internships</Link></li>
              <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Learning Resources</Link></li>
              <li><Link href="/roadmaps" className="text-sm text-muted-foreground hover:text-primary transition-colors">Career Roadmaps</Link></li>
              <li><Link href="/resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Companies</h3>
            <ul className="space-y-3">
              <li><Link href="/post-job" className="text-sm text-muted-foreground hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link href="/search-resumes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Search Talent</Link></li>
              <li><Link href="/assessments" className="text-sm text-muted-foreground hover:text-primary transition-colors">Assessments</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal & Support</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChaseMaster. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
