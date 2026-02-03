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

const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Candidates", url: "#", icon: Users },
  { title: "Analytics", url: "#", icon: BarChart3 },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="border-b p-4">
          <h2 className="text-xl font-bold tracking-tight">Clever</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-4 text-xs text-muted-foreground">
          © 2026 Clever • Recruitment Platform
        </SidebarFooter>
      </Sidebar>
  );
}