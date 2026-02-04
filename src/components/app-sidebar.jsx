"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Home, Users, BarChart3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Candidates", url: "/dashboard/candidates", icon: Users },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
      <Sidebar
          collapsible="icon"
          className="
        border-none
        bg-white/40 dark:bg-white/5
        backdrop-blur-xl
        shadow-xl
      "
      >
        <SidebarHeader className="p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-extrabold shadow-md">
              C
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clever
              </h2>
              <p className="text-xs text-muted-foreground">
                Recruitment Platform
              </p>
            </div>
          </div>
        </SidebarHeader>

        {/* Main Menu */}
        <SidebarContent className="px-4 pt-2">
          <SidebarMenu className="space-y-2">
            {items.map((item) => {
              const active = pathname === item.url;
              const Icon = item.icon;

              return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        className={cn(
                            "group rounded-xl px-4 py-3 transition-all duration-200",

                            active
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                                : "text-slate-700 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-white/10"
                        )}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        {/* Icon */}
                        <Icon
                            className={cn(
                                "h-5 w-5 transition-colors",
                                active
                                    ? "text-white"
                                    : "text-blue-500 dark:text-purple-400 group-hover:text-purple-600"
                            )}
                        />
                        <span className="text-sm font-medium tracking-tight">
                      {item.title}
                    </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-6 mt-auto">
          <div className="rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 p-4">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">
              Clever Hiring Suite ✨
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built for modern recruitment teams
            </p>
          </div>

          <p className="text-[11px] text-muted-foreground mt-4 text-center">
            © {new Date().getFullYear()} Clever
          </p>
        </SidebarFooter>
      </Sidebar>
  );
}
