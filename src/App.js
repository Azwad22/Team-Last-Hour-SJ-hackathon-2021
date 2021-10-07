import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import BuyCourse from "./Components/BuyCourse/BuyCourse";
import Home from "./Components/Home/Home";
import Instructor from "./Components/Instructor/Instructor";
import Services from "./Components/Services/Services";

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

          <Route path="/allcourses">
            <Services></Services>
          </Route>

          <Route path="/buycourse">
            <BuyCourse></BuyCourse>
          </Route>

          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
