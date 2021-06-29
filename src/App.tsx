import Navbar from './components/Navbar'
import Animation from './components/Animation';
import About from './components/About';
import Projects from './Profile/Project'
import Contact from './Profile/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Animation/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
