import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Homepage";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Login from "./pages/Login";
import FanPortal from "./pages/FanPortal";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/artists" component={Artists} />
        <Route path="/login" component={Login} />
        <Route path="/fanportal" component={FanPortal} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
