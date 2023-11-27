import { useState, useEffect } from "react";
import { initLS, setLS } from "./localStorage";
import toggleTheme from "./theme";

/**
 * Custom hook for managing theme changes.
 * Initializes theme from local storage and provides a function to toggle between light and dark themes.
 */
export default function useThemeChange() {
  // State to track the current theme
  const [theme, setTheme] = useState("dark");

  // Effect to initialize theme from local storage on component mount
  useEffect(() => {
    initLS("theme", "dark", setTheme, toggleTheme);
  }, []);

  // Function to handle theme change
  function handleThemeChange() {
    // Toggle between light and dark themes
    let newTheme = theme === "light" ? "dark" : "light";

    // Update theme in local storage and apply the new theme
    setLS("theme", newTheme, setTheme, toggleTheme);
  }

  // Return the current theme and the function to handle theme change
  return { theme, handleThemeChange };
}
