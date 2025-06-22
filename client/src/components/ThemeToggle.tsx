import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-600 dark:bg-gray-700 light:bg-gray-300 rounded-full relative transition-colors duration-300">
          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 flex items-center justify-center ${
            theme === "light" ? "translate-x-5" : "translate-x-0"
          }`}>
            {theme === "light" ? (
              <i className="fas fa-sun text-yellow-500 text-xs"></i>
            ) : (
              <i className="fas fa-moon text-blue-400 text-xs"></i>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
