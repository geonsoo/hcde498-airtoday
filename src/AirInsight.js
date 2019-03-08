import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import logo from './logo.svg';
import './air.css';

import Button from '@material-ui/core/Button';
import { Nav, Navbar, Col, Container, Row, ButtonToolbar, Buttons, Overlays, Card } from 'react-bootstrap';
// import AirInsight from './AirInsight';
import air_article_1 from "./img/air_insige_article_1.jpg";
import air_article_2 from "./img/air_insige_article_2.jpg";
import air_article_3 from "./img/air_insige_article_3.jpg";

import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '70%',
    height: '70%'
  };

class AirInsight extends Component {
  render() {
    return (
        <div>
          <body>
            <div className = "air_scene_one">        
              <Container className = "first"> 
                <Row>
                  <h2>Live Data on Air Quality</h2>
               </Row>
               <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
               <Row >
                
              </Row>    
              </Container>
            </div>
            <div className = "air_scene_two">  
              <Container className = "second">
                <Row>
                  <h2>Data by Year and Country</h2>

                  <Col>
                  </Col>
              
                </Row>
              </Container>
            </div>

            <div className = "air_scene_three">  
              <Container className = "air_third">
              <h2>Articles</h2>
                <Row>
                  <Col>
                  <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={air_article_1} />
                        <Card.Body>
                            <Card.Title>A Warming World Increases Air Pollution</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                  <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={air_article_2} />
                        <Card.Body>
                            <Card.Title>Air Pollution is Coming Soon!</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                  <a>
                  <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={air_article_3} />
                        <Card.Body className ="card_body">
                            <Card.Title>Climate Change News</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </a>
                  </Col>
                </Row>
                <Row >
                <div class="air_button_row">
                  <Button variant="info" size="lg" class ="air_button_scene_one">View Compagin Website</Button>
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
      </div>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: 'AIzaSyAWIgRoSnkMs-IfdnB3vIvwaW35bkqb7bc'
  })(AirInsight);