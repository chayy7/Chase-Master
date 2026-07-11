import { createClient } from '@/lib/supabase/server';
import { Briefcase, Users, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  // Count jobs
  const { count: jobCount } = await supabase
    .from('jobs')
    .select('*', { count: 'exact', head: true });

  const stats = [
    { name: 'Total Job Postings', value: jobCount || 0, icon: Briefcase, change: '+12%', trend: 'up' },
    { name: 'Total Users', value: '142', icon: Users, change: '+5%', trend: 'up' },
    { name: 'Active Applications', value: '89', icon: TrendingUp, change: '+18%', trend: 'up' },
    { name: 'Pending Reviews', value: '12', icon: Clock, change: '-2%', trend: 'down' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back. Here is what is happening with your platform today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon className="w-16 h-16" />
            </div>
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <stat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-medium">{stat.name}</h3>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-rose-500/10 text-rose-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-4">Recent Job Postings</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Go to <Link href="/admin/jobs" className="text-primary hover:underline">Job Postings</Link> to manage them.</p>
          </div>
        </div>

        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/admin/jobs/new" className="flex items-center gap-3 p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="font-medium text-sm text-foreground">Post New Job</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
