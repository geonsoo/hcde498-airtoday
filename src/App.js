import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import { Nav, Navbar, Col, Container, Row, ButtonToolbar, Buttons, Overlays } from 'react-bootstrap';
// import AirInsight from './AirInsight';

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
            <div className = "wrapper scene_two"  >  
              <Container className = "second">
                <Row>
                  <Col>
                    <h2 class="scene_two_title">What and how does air pollution happen?</h2>
                    <p class="scene_two_text">Air pollution can be defined as the presence of toxic chemicals or compounds in the air, at levels that pose 
a health risk and cause detrimental changes to the earth such as damaging of the ozone layer or causing global warming. </p>

                    <p  class="scene_two_text">Most often, pollution is caused by human causes such as factories, cars and airplanes and cigarrettes. 
Some types of air pollution, are caused form natural sources such as smoke from wildfires or ash from volcanoes.</p>

                  </Col>
              
                </Row>

                <Row>
                  <div class = "scene_image">
                    <img src="img/factories.jpg" alt = "factories"></img>
                    <img src="img/veihcles.jpg" alt = "vehicles"></img>
                    <img src="img/cigarette.jpg" alt = "cigarette"></img>
                    <img src="img/volcanos.jpg" alt = "volcanos"></img>
                  </div>
                </Row>
    
              </Container>
            </div>

            <div className = "wrapper scene_three"  >  
              <Container className = "third">
                <Row>
                  <Col>
                    <div class = "scene_three_wrap">
                      <h1 class = "scene_three_title">What are the effects? </h1>

                      <p class = "scene_three_text">People experience a wide range of health effects from being exposed 
                      to air pollution. Effects can be broken down into short-term effects
                      and long-term effects. </p>
                      <br></br>
                      <p class = "scene_three_text"><strong>Short-term effects,</strong> which are temporary and cause discomfort such
                      as irritation to the nose, throat, eyes, or skin.
                        Air pollution can also cause headaches, dizziness, and nausea. </p>
                      <br></br>
                     
                      <p class = "scene_three_text">
                      <strong>Long-term effects</strong> of air pollution can last for years or for 
                      an entire lifetime. Nearly <strong>2.5 million people die worldwide</strong> each 
                      year from the effects of outdoor or indoor air pollution. 
                      </p>
                    </div>
                </Col>
                
                  </Row>
    
              </Container>
            </div>
            <div className = "wrapper scene_four"  >  

              <Container className = "fourth">
                <Row>
                <h2>What can you do to take action?</h2>
                
                <div class = "fourth_wrap">
                
                  <a href="#">  
                    <div class ="img_left"> </div>
                  </a>
                      
                  <a href="#"> 
                    <div class ="img_right"> </div>
                  </a>
                </div>
               </Row>
    
              </Container>
            </div>
            {/* <div className = "wrapper scene_five"  >  
              <Container className = "fifth">
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                  </Row>
    
              </Container>
            </div> */}

          
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

export default App;
