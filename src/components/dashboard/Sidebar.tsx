
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  FileText, 
  Package, 
  CreditCard, 
  Users, 
  Settings, 
  ChevronRight, 
  LayoutDashboard,
  Leaf,
  Globe
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  to: string;
  collapsed: boolean;
  active?: boolean;
}

function SidebarItem({ icon, label, to, collapsed, active = false }: SidebarItemProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={to}
            className={cn(
              "flex items-center p-3 my-1 rounded-lg text-sm font-medium transition-colors",
              collapsed ? "justify-center" : "justify-start",
              active
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <div className={cn("flex items-center", collapsed ? "justify-center" : "justify-start")}>
              <span className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")}>{icon}</span>
              {!collapsed && <span>{label}</span>}
            </div>
          </Link>
        </TooltipTrigger>
        {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-20 bg-card border-r border-border flex flex-col transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 border-b border-border flex items-center">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl text-primary">Weefarm</span>
          </div>
        )}
        {collapsed && <Leaf className="h-7 w-7 text-primary mx-auto" />}
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "h-6 w-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent ml-auto",
            collapsed && "rotate-180"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 py-4 px-2 overflow-y-auto">
        <nav className="space-y-1">
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" to="/dashboard" collapsed={collapsed} active />
          <SidebarItem icon={<FileText />} label="Content" to="/content" collapsed={collapsed} />
          <SidebarItem icon={<Globe />} label="Website" to="/website" collapsed={collapsed} />
          <SidebarItem icon={<Package />} label="Products" to="/products" collapsed={collapsed} />
          <SidebarItem icon={<CreditCard />} label="Subscriptions" to="/subscriptions" collapsed={collapsed} />
          <SidebarItem icon={<CreditCard />} label="invoices" to="/invoices" collapsed={collapsed} />
          <SidebarItem icon={<Users />} label="Users" to="/users" collapsed={collapsed} />
          <SidebarItem icon={<Settings />} label="Settings" to="/settings" collapsed={collapsed} />
        </nav>
      </div>
      
      <div className="p-4 border-t border-border">
        <SidebarItem 
          icon={<img src="https://ui-avatars.com/api/?name=Admin+User&background=8b5cf6&color=fff" className="rounded-full" />}
          label="Admin User" 
          to="/profile" 
          collapsed={collapsed} 
        />
      </div>
    </div>
  );
}
