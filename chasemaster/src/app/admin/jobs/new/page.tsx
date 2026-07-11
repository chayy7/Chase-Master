"use client";

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function NewJobPage() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const jobData = {
      title: formData.get('title'),
      company: formData.get('company'),
      location: formData.get('location'),
      type: formData.get('type'),
      salary: formData.get('salary'),
      description: formData.get('description'),
    };

    const { error: insertError } = await supabase
      .from('jobs')
      .insert([jobData]);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push('/admin/jobs');
      router.refresh();
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/jobs" className="p-2 bg-background border border-border/50 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Post a New Job</h1>
          <p className="text-sm text-muted-foreground mt-1">Fill out the details below to create a new job listing.</p>
        </div>
      </div>

      <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm">
        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Job Title *</label>
              <input required name="title" type="text" placeholder="e.g. Senior Frontend Developer" className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company Name *</label>
              <input required name="company" type="text" placeholder="e.g. Acme Corp" className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Location *</label>
              <input required name="location" type="text" placeholder="e.g. Remote, San Francisco, CA" className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Employment Type *</label>
              <select required name="type" className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-foreground">Salary Range (Optional)</label>
              <input name="salary" type="text" placeholder="e.g. $100k - $120k" className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-foreground">Job Description *</label>
              <textarea required name="description" rows={6} placeholder="Describe the role, responsibilities, and requirements..." className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"></textarea>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium shadow-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {loading ? 'Publishing...' : 'Publish Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
