import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  Nav,
  Navbar,
  Col,
  Container,
  Row,
  ButtonToolbar,
  Buttons,
  Overlays
} from "react-bootstrap";
import AirInsight from "./AirInsight";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TakeAction from "./TakeAction";
import "./App.css";

class App extends Component {
  render() {
    return (
      
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand className="nav-link">
              <Link to={"/Home"}>
                <img
                  src="img/air_logo.svg"
                  width="auto"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Air Today logo"
                />
              </Link>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end nav_text">
              <Link to={"/AirInsight"} className="nav-link">
                AirInsight
              </Link>
              <Link to={"/TakeAction"} className="nav-link">
                TakeAction
              </Link>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/AirInsight" component={AirInsight} />
            <Route path="/TakeAction" component={TakeAction} />
            <Route path="/contact" component={Contact} />
          </Switch>
          
        </div>

        </Router>
      
    );
  }
}

export default App;
