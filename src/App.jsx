import About from "./component/About";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Project from "./component/Project";
import Skills from "./component/Skills";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Project />
    </>
  );
};

export default App;
