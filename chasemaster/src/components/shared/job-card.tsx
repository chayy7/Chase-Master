import { Button } from "@/components/ui/button";
import { Building2, MapPin, DollarSign, Clock, ArrowUpRight } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string; // Remote, Hybrid, Onsite
  tags: string[];
}

export function JobCard({ title, company, location, salary, type, tags }: JobCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-border/40 bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-none tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{company}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="shrink-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {location}
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="h-4 w-4" />
          {salary}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {type}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {tags.map((tag) => (
          <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
