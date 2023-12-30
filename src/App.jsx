import Pricing from "./component/Pricing";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Project from "./component/Project";
import Services from "./component/Services";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Services />
      <Pricing />
      <Project />
      <Footer />
    </>
  );
};

export default App;
