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
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className = "mr-auto">
                <Nav.Link href=" /AirInsight" className="nav-link">
                  AirInsight
                </Nav.Link>
                <Nav.Link href=" /TakeAction" className="nav-link">
                  TakeAction
                </Nav.Link>
                <Nav.Link href=" /contact" className="nav-link">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>;


          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
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
