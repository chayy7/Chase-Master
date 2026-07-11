import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { LayoutDashboard, Briefcase, Users, Settings, LogOut } from 'lucide-react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // To secure it to only the admin, we should normally check role or email here.
  // For now, we allow any logged in user to see the admin panel, but RLS policies
  // will prevent non-admins from modifying data.
  // In a real production scenario, you would check `user.email === 'your@email.com'`

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-background border-r border-border/50 hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            ChaseMaster <span className="text-foreground">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link href="/admin/jobs" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary transition-colors">
            <Briefcase className="w-4 h-4" />
            Job Postings
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Users className="w-4 h-4" />
            Users
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 truncate">{user.email}</div>
          </div>
          <form action="/auth/signout" method="post" className="mt-2">
            <button className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
