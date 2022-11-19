import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./components/home/home.jsx"
import MentalHealthResource from "./components/resources/mentalhealth/mentalhealth.jsx"
import FooterComponent from "./components/footer/footer.jsx"
import Resources from "./components/resources/resource.jsx"
import About from "./components/about/about.jsx"
import Newsletter from './components/newsletter/newsletter';
import Project from './components/projects/project';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Resources/Mentalhealth" element={<MentalHealthResource />}></Route>
        <Route path="/Resources" element={<Resources/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Newsletter" element={<Newsletter/>}></Route>
        <Route path="/Projects" element={<Project />}></Route>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
