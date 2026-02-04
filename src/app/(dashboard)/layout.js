import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardLayout({ children }) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />

        <main className="flex flex-1 flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">

          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 px-6
          border-b border-white/10
          bg-white/50 dark:bg-white/5
          backdrop-blur-xl shadow-sm">

            <SidebarTrigger className="rounded-lg hover:bg-white/30 dark:hover:bg-white/10 transition" />

            <div className="ml-auto flex items-center gap-4">
              <UserButton
                  afterSignOutUrl="/sign-in"
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9 rounded-xl border border-white/20 shadow-sm",
                    },
                  }}
              />
            </div>
          </header>

          <div className="flex-1 overflow-auto p-8">
            {children}
          </div>
        </main>
      </SidebarProvider>
  );
}
