import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

/**
 * Portfólio Guilherme Rios - Design System
 * 
 * Design Philosophy: Minimalismo Contemporâneo com Foco em Dados
 * - Swiss Style meets Data Visualization
 * - Sidebar fixa à esquerda com navegação clara
 * - Tipografia hierárquica (Poppins para títulos, Inter para corpo)
 * - Paleta azul/cinza/branco com acentos vibrantes
 * - Muito espaço em branco para sofisticação
 * - Números e dados destacados como elementos visuais principais
 * - Animações sutis e funcionais
 */

function Router() {
  return (
    <Switch>
      <Route path={""} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
