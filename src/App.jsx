import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CustomButton from "./components/ui/button/button";
import AppRoutes from "./routes/appRoutes";
import NavBar from "./components/layout/navbar/navBar";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="tracking-widest pb-10 ">
      <Router>
        <QueryClientProvider client={queryClient}>
          <NavBar />

          <AppRoutes />
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
