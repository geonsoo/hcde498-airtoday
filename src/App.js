import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Nav, Navbar, Col, Container, Row, ButtonToolbar, Buttons } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numClicks: 0
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
         
    
          </Navbar>
          </header>
         
          <body>
            <div className = "wrapper scene_one"  >        
              <Container className = "first main_page">
                <Row>
                  <Col>
                  <span class="section_one_text">The air around you is changing. Will you help stop it?
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
            <div className = "wrapper scene_two"  >  
              <Container className = "second">
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                </Row>
    
              </Container>
            </div>
            <div className = "wrapper scene_three"  >  
              <Container className = "third">
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                  </Row>
    
              </Container>
            </div>
            <div className = "wrapper scene_four"  >  

              <Container className = "fourth">
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                  </Row>
    
              </Container>
            </div>
            <div className = "wrapper scene_five"  >  
              <Container className = "fifth">
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                  </Row>
    
              </Container>
            </div>
          
         </body>
      </div>
    );
  }
}

export default App;
