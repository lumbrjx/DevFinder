import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home/home";
import History from "../pages/history/history";
import { AnimatePresence } from "framer-motion";
import Error from "../pages/error/error";
const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AppRoutes;
