import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboard pages
import Dashboard from "./pages/dashboard/Dashboard";
import ContentManager from "./pages/content/ContentManager";
import ProductsManager from "./pages/products/ProductsManager";
import SubscriptionsManager from "./pages/subscriptions/SubscriptionsManager";
import WebsiteCustomizer from "./pages/website/WebsiteCustomizer";
import UsersManager from "./pages/users/UsersManager";
import InvoicesManager from "./pages/invoices/InvoicesManager";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content" element={<ContentManager />} />
          <Route path="/products" element={<ProductsManager />} />
          <Route path="/subscriptions" element={<SubscriptionsManager />} />
          <Route path="/invoices" element={<InvoicesManager />} />
          <Route path="/website" element={<WebsiteCustomizer />} />
          <Route path="/users" element={<UsersManager />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
