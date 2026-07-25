import { Navbar, Welcome, Dock, Home } from "@components";
import { Contact, Email, Finder, Gallery, Image, Resume, Safari, Terminal, Text } from "@windows";

import gsap from "gsap"
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Gallery/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
      <Email/>
    </main>
  );
};

export default App;
