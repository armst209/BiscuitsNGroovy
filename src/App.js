import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Homepage";
import FAQ from "./pages/FAQ";
import About from "./pages/About/About";
import Artists from "./pages/Artists";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import FanPortal from "./pages/Portals/FanPortal/FanPortal";
import Footer from "./components/Footer/Footer";
import "../node_modules/@fortawesome/fontawesome-free/js/all";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/artists" component={Artists} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/fanportal" component={FanPortal} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
