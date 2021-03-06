import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import { Nav, Navbar, Col, Container, Row, ButtonToolbar, Buttons, Overlays } from 'react-bootstrap';
// import AirInsight from './AirInsight';
import AirInsight from './AirInsight'
import TakeAction from './TakeAction'
import About from './About';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
         <div>
          <body>
            <div className = "wrapper scene_one"  >        
              <Container className = "first main_page"> 
                <Row>
                  <Col>
                  <span className ="section_one_text">The air around you is changing. Will you help to stop it?
                  </span>
                  </Col>
               </Row>
               <Row >
                <div className ="button_row">
                <Link to={"/AirInsight"} className="nav-link">
                   <Button variant="info" size="lg" class ="button_scene_one" >Check Air Now</Button>
                 </Link>
                </div>

                
              </Row>    
              </Container>
            </div>
            <div className = "wrapper scene_two">  
              <Container className = "second">
                <Row>
                  <Col>
                    <h2 className ="scene_two_title">What and how does air pollution happen?</h2>
                    <p className ="scene_two_text">Air pollution can be defined as the presence of toxic chemicals or compounds in the air, at levels that pose 
a health risk and cause detrimental changes to the earth such as damaging of the ozone layer or causing global warming. </p>

                    <p  className ="scene_two_text">Most often, pollution is caused by human causes such as factories, cars and airplanes and cigarrettes. 
Some types of air pollution, are caused form natural sources such as smoke from wildfires or ash from volcanoes.</p>

                  </Col>
              
                </Row>

                <Row>
                  <div className = "scene_image">
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
                    <div className = "scene_three_wrap">
                      <h1 className = "scene_three_title">What are the effects? </h1>

                      <p className = "scene_three_text">People experience a wide range of health effects from being exposed 
                      to air pollution. Effects can be broken down into short-term effects
                      and long-term effects. </p>
                      <br></br>
                      <p class = "scene_three_text"><strong>Short-term effects,</strong> which are temporary and cause discomfort such
                      as irritation to the nose, throat, eyes, or skin.
                        Air pollution can also cause headaches, dizziness, and nausea. </p>
                      <br></br>
                  
                      <p className = "scene_three_text">
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
                
                <div className = "fourth_wrap">
                
                <Link to={"/TakeAction"} className="TakeAction">
                <div className ="img_left"> </div>
              </Link>

                  {/* <a href="TakeAction">  
                    <div className ="img_left"> </div>
                  </a>
                       */}
                  {/* <a href="TakeAction"> 
                    <div className ="img_right"> </div>
                  </a> */}
              <Link to={"/TakeAction"} className="TakeAction">
              <div className ="img_right"> </div>
              </Link>


                </div>
               </Row>
    
              </Container>
            </div>
         </body>
         <footer>
         <Navbar bg="dark" variant="dark" sticky="bottom">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                  Copyright © 2019 HCDE 498
              </Navbar.Text>
            </Navbar.Collapse>
         </Navbar>
         </footer>


         <Switch>
           
            <Route path="/AirInsight" component={AirInsight} />
            
          </Switch>
      </div>
    )
  }
}

export default Home;