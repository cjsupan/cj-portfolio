import "./styles/App.css";
import ThemeToggle from "./components/themeToggle";
import Home from "./sections/home";
import About from "./sections/about";
import Tecnologies from "./sections/technologies";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App @container bg-background-default">
      {/* <NavBar /> */}
      <main className="w-full h-full dark:bg-background-dark bg-background-light dark:text-primary-dark transition duration-500 ease-in-out flex flex-col justify-center items-center @max-md:pt-20 ">
        <Home />
        <About />
        <Tecnologies />
        <Projects />
        <Contact />
      </main>
      <ThemeToggle />
    </div>
  );
}

export default App;
