import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#top" aria-label="Back to top">{"{klarutyunyan}"}</a>
          <nav aria-label="Main navigation">
            <a href="#top">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
        </div>
      </header>
      <main>
        <About />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
