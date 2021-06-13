import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Busca from "./pages/busca";
import Readme from "./pages/readme";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/busca">
            <Busca />
          </Route>
          <Route path="/readme">
            <Readme />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
