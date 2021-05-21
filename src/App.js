import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AlertHeader from "./mycomponents/AlertHeader";
// import Alert from "react-bootstrap/Alert";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Header from "./mycomponents/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import PropTypes from 'prop-types'
import Home from "./mycomponents/Home";
import About from "./mycomponents/About";
import Contact from "./mycomponents/Contact";


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <Router>
      <div className="App">
        {/* <AlertHeader></AlertHeader> */}
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
