import "./styles/App.css";
import ThemeToggle from "./components/ThemeToggleTemp";
import Home from "./sections/HomeTemp";
import About from "./sections/AboutTemp";
import Technologies from "./sections/TechnologiesTemp";
import Projects from "./sections/ProjectsTemp";
import Contact from "./sections/ContactTemp";

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
