import { Dock, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal } from "#windows";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Resume />

      <Finder />
      <Safari />
      <Terminal />
    </main>
  );
};

export default App;