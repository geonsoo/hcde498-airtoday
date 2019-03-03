import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import { Nav, Navbar, Col, Container, Row, ButtonToolbar, Buttons, Overlays } from 'react-bootstrap';


class AirInsight extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home"><img
              src="img/air_logo.svg"
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="Air Today logo"
            /></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end nav_text">
                <Nav.Link href="AirInsight.js" >Air Insight</Nav.Link>
                <Nav.Link href="#take_action">Take Action</Nav.Link>
                <Nav.Link href="#about" >About</Nav.Link>
            </Navbar.Collapse>
         
    
          </Navbar>
          </header>
         
          <body>
            <div className = "wrapper scene_one"  >        
              <Container className = "first main_page"> 
                <Row>
                  <Col>
                  <span class="section_one_text">The air around you is changing. Will you help to stop it?
                  </span>
                  </Col>
               </Row>

               <Row >
                <div class="button_row">
                <Button variant="info" size="lg" class ="button_scene_one">Button</Button>
                </div>
              </Row>

              

    
              </Container>
            </div>
            

         
            
          
         </body>

         <footer>
        

         <Navbar bg="dark" variant="dark" sticky="bottom">
            {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                  Copyright © 2019 HCDE 498
              </Navbar.Text>
            </Navbar.Collapse>
         </Navbar>
         </footer>

      

      </div>
    );
  }
}

export default AirInsight;
