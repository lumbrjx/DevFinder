import { useEffect, useState } from "react";
//custom hook to switch between dark and white theme
export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("Theme"));
  useEffect(() => {
    localStorage.setItem("Theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return [theme, switchTheme];
};
