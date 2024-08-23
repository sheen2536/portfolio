import styles from "./App.module.css";
import {Navbar} from "./components/nabvar/Navbar.jsx";
import {Hero} from "./components/hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Skills } from "./components/Skills/Skills.jsx";

function App() {
  

  return (
    <div className = {styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
      
    
  )
}

export default App
