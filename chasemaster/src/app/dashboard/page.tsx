import { JobCard } from "@/components/shared/job-card";
import { Button } from "@/components/ui/button";
import { Target, Trophy, Flame } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Card */}
      <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            You're on a 5-day learning streak. Keep up the momentum! Your resume score is currently 85/100.
          </p>
          <div className="flex gap-4">
            <Button>Continue Learning</Button>
            <Button variant="outline">View Recommendations</Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 -mt-16 -mr-16 w-64 h-64 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Daily Goals */}
        <div className="col-span-1 md:col-span-2 rounded-2xl border border-border/50 bg-card p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" /> Daily Goals
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/40">
              <span className="font-medium">Complete React State Module</span>
              <span className="text-sm text-primary">In Progress</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/40">
              <span className="font-medium">Solve 2 DSA Problems</span>
              <span className="text-sm text-muted-foreground">0/2</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/40">
              <span className="font-medium">Apply to 3 Internships</span>
              <span className="text-sm text-muted-foreground">1/3</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="col-span-1 space-y-6">
          <div className="rounded-2xl border border-border/50 bg-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
              <h3 className="text-2xl font-bold">5 Days</h3>
            </div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Global Rank</p>
              <h3 className="text-2xl font-bold">#1,204</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Recommended for You</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JobCard 
            title="Frontend Developer Intern"
            company="TechNova Solutions"
            location="Bangalore, India"
            salary="₹25k - ₹35k / mo"
            type="Hybrid"
            tags={["React", "Next.js", "Tailwind"]}
          />
          <JobCard 
            title="SDE-1"
            company="CloudScale Inc."
            location="Remote"
            salary="₹12L - ₹18L"
            type="Remote"
            tags={["Node.js", "AWS", "MongoDB"]}
          />
          <JobCard 
            title="UI/UX Designer"
            company="CreativePulse"
            location="Mumbai, India"
            salary="₹8L - ₹12L"
            type="Onsite"
            tags={["Figma", "Prototyping"]}
          />
        </div>
      </div>
    </div>
  );
}
