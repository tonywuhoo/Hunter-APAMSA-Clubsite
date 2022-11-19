import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./components/home/home.jsx"
import FooterComponent from "./components/footer/footer.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
