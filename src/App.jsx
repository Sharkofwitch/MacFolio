import { Dock, Home, Navbar, Welcome } from "#components";
import { Contact, Finder, Image, Photos, Resume, Safari, Terminal, Text } from "#windows";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Image />
      <Resume />
      <Text />

      <Contact />
      <Finder />
      <Photos />
      <Safari />
      <Terminal />
    </main>
  );
};

export default App;