import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
      </Switch>
      <Router>
      <Header />
      </Router>
    </Router>
  );
}

export default App;
