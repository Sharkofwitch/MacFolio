import { Dock, Navbar, Welcome } from "#components";
import { Resume, Safari, Terminal } from "#windows";
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

      <Safari />
      <Terminal />
    </main>
  );
};

export default App;