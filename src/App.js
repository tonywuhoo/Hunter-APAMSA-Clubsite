import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./components/home/home.jsx"
import MentalHealthResource from "./components/resources/mentalhealth/mentalhealth.jsx"
import FooterComponent from "./components/footer/footer.jsx"
import Resources from "./components/resources/resource.jsx"
import Team from "./components/team/team.jsx"
import { Route, Redirect ,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Resources/Mentalhealth" component={MentalHealthResource}></Route>
        <Route exact path="/Resources" component={Resources}></Route>
        <Route exact path="/Team" component={Team}></Route>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
