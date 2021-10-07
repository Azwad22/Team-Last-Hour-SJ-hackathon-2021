<<<<<<< HEAD
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
import Instructor from './Components/Instructor/Instructor';
import Services from './Components/Services/Services';

=======
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import BuyCourse from "./Components/BuyCourse/BuyCourse.js";
>>>>>>> 3c4273f71a89531c698f7d503388ff332d40d831
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
          <Route path="/buycourse">
            <BuyCourse></BuyCourse>
          </Route>
<<<<<<< HEAD

          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>





=======
>>>>>>> 3c4273f71a89531c698f7d503388ff332d40d831
        </Switch>
      </Router>
    </div>
  );
}

export default App;
