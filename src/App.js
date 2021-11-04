import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Register from "./containers/Register";
import Login from "./containers/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/register">
          <ToastContainer position="top-center"/>
          <Register />
        </Route>

        <Route path="/login">
          <ToastContainer position="top-center"/>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
