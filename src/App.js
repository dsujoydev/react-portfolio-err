import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import HireMe from "./HireMe";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <ul>
          <li>
            <Link to= "/"> Home </Link>
          </li>
          <li>
            <Link to= "/about"> About Me</Link>
          </li>
          <li>
            <Link to= "/project"> My Projects</Link>
          </li>
          <li>
            <Link to= "/hireme"> Hire Me</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
          <Route path="/hireme">
            <HireMe/>
          </Route>
        </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
