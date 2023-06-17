import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CustomButton from "./components/ui/button/button";
import AppRoutes from "./routes/appRoutes";
import NavBar from "./components/layout/navbar/navBar";

function App() {
  return (
    <div className="tracking-widest ">
      <Router>
        <NavBar />

        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
