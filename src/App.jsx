import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <main className="max-w-6xl mx-auto px-8 pt-20 pb-10">
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}