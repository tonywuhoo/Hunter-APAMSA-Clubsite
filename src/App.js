import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./components/home/home.jsx"
import MentalHealthResource from "./components/resources/mentalhealth/mentalhealth.jsx"
import FooterComponent from "./components/footer/footer.jsx"
import Resources from "./components/resources/resource.jsx"
import Team from "./components/team/team.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Resources/Mentalhealth" element={<MentalHealthResource />}></Route>
        <Route path="/Resources" element={<Resources/>}></Route>
        <Route path="/Team" element={<Team/>}></Route>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
