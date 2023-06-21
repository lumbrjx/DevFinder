import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import History from "../pages/history/history";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
export default AppRoutes;
