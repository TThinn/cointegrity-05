
import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import { useAnalytics } from "./hooks/useAnalytics"
import './index.css'
import './App.css'

// Create a client
const queryClient = new QueryClient();

// RouteTracker component to handle route changes
const RouteTracker = () => {
  const location = useLocation();
  const { pageView } = useAnalytics();
  
  React.useEffect(() => {
    // Track page view on route change
    pageView(location.pathname);
  }, [location, pageView]);
  
  return null;
};

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <RouteTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster 
            position="top-center" 
            closeButton
            toastOptions={{
              className: "toast-blur-container",
              style: {
                background: "transparent",
                border: "none",
                boxShadow: "none",
              }
            }}
          />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;
