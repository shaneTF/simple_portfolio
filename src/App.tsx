import Career from "./Components/Career";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className="relative w-auto mx-5 md:mx-auto pt-24 h-max md:w-[50rem]">
        <Header />
        <Contact />
        <Career />
        <Projects />
        <Certifications />
      </div>
    </>
  );
}

export default App;
