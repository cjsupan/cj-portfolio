import "./styles/App.css";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./sections/Home";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App @container bg-background-default">
      {/* <NavBar /> */}
      <main className="w-full h-full dark:bg-background-dark bg-background-light dark:text-primary-dark transition duration-500 ease-in-out flex flex-col justify-center items-center @max-md:pt-20 ">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <ThemeToggle />
    </div>
  );
}

export default App;
