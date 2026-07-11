import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

export default async function AdminJobsPage() {
  const supabase = await createClient();
  
  // Fetch jobs from Supabase
  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Job Postings</h1>
          <p className="text-muted-foreground mt-1">Manage and track all job listings on your platform.</p>
        </div>
        <Link 
          href="/admin/jobs/new"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-medium shadow-sm hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Post New Job
        </Link>
      </div>

      <div className="bg-background border border-border/50 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border/50 flex justify-between items-center bg-muted/20">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/20 border-b border-border/50">
              <tr>
                <th className="px-6 py-4 font-medium">Job Title</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Date Posted</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {error && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-destructive">
                    Failed to load jobs. Have you created the jobs table?
                  </td>
                </tr>
              )}
              {jobs?.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No jobs posted yet. Click "Post New Job" to get started.
                  </td>
                </tr>
              )}
              {jobs?.map((job) => (
                <tr key={job.id} className="hover:bg-muted/10 transition-colors group">
                  <td className="px-6 py-4 font-medium text-foreground">{job.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">{job.company}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      {job.location}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(job.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/admin/jobs/${job.id}/edit`} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
