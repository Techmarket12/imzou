import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ToitureService from "@/pages/ToitureService";
import FacadeService from "@/pages/FacadeService";
import TerrasseService from "@/pages/TerrasseService";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/toiture" component={ToitureService} />
      <Route path="/services/facade" component={FacadeService} />
      <Route path="/services/terrasse" component={TerrasseService} />
      <Route path="/:rest*">
        {() => <Home />}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
