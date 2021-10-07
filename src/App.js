<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import BuyCourse from './Components/BuyCourse/BuyCourse';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
>>>>>>> a92b76a8036cfeec6cf1fb8bcf3f8a99d96a2e51

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
<<<<<<< HEAD
=======

          <Route path="/buycourse">
            <BuyCourse></BuyCourse>
          </Route>





>>>>>>> a92b76a8036cfeec6cf1fb8bcf3f8a99d96a2e51
        </Switch>
      </Router>
    </div>
  );
}

export default App;
