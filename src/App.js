import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Homepage";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/artists" component={Artists} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
