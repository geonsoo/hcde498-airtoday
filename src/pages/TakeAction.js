import React, { Component } from "react";
// import logo from './logo.svg';

import Button from "@material-ui/core/Button";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import {
  Nav,
  Navbar,
  Col,
  Container,
  Row,
  ButtonToolbar,
  Buttons
} from "react-bootstrap";

import TakeAction from "./pages/TakeAction.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router> */}
        <header className="App-header">
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
              <img
                src="img/air_logo.svg"
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt="Air Today logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end nav_text">
              <Nav.Link href="#air_insight">Air Insight</Nav.Link>
              <Nav.Link href="/pages/TakeAction.js">Take Action</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </header>

        <body>
          <div className="whole_page">
            <span class="header_text">
              <b>Actions You Can Take to Reduce Air Pollution</b>
            </span>
            <span>What will you do to help make your air cleaner?</span>

            <Container>
              <Row>
                <img src="img/daily_daily.jpg" alt="daily" />
                <img src="img/daily_campaign.jpg" alt="daily" />
              </Row>
            </Container>
          </div>
        </body>

        <footer>
          <Navbar bg="dark" variant="dark">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Copyright © 2019 HCDE 498</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </footer>
      </div>
    );
  }
}
export default App;
