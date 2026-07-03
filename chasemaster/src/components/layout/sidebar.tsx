import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  GraduationCap,
  Code,
  Map,
  FileText,
  Monitor,
  Building2,
  Calendar,
  PenTool,
  Bookmark,
  Settings,
  Award,
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Resources", href: "/dashboard/resources", icon: BookOpen },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Internships", href: "/dashboard/internships", icon: GraduationCap },
  { name: "Hackathons", href: "/dashboard/hackathons", icon: Code },
  { name: "Courses", href: "/dashboard/courses", icon: Monitor },
  { name: "Roadmaps", href: "/dashboard/roadmaps", icon: Map },
  { name: "Resume", href: "/dashboard/resume", icon: FileText },
  { name: "Portfolio", href: "/dashboard/portfolio", icon: PenTool },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Events", href: "/dashboard/events", icon: Calendar },
  { name: "Certificates", href: "/dashboard/certificates", icon: Award },
  { name: "Bookmarks", href: "/dashboard/bookmarks", icon: Bookmark },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r border-border/40 bg-background sm:flex mt-16 pt-6 pb-20">
      <nav className="flex flex-col gap-1 px-4 overflow-y-auto custom-scrollbar">
        {sidebarLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-muted hover:text-primary"
          >
            <link.icon className="h-4 w-4" />
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
