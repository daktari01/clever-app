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
        <main className="flex flex-1 flex-col">
          <header className="flex h-14 lg:h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </header>
          <div className="flex-1 overflow-auto p-6">{children}</div>
        </main>
      </SidebarProvider>
  );
}