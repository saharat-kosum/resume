import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { RefContext } from "./context/refContext";
import { useContext } from "react";
import Profile from "./components/Profile";

function App() {
  const refContext = useContext(RefContext);
  const { homeRef } = refContext || {};
  return (
    <div ref={homeRef}>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
