import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// import logo from './logo.svg';
import "./air.css";

import Button from "@material-ui/core/Button";
import {
  Nav,
  Navbar,
  Col,
  Container,
  Row,
  ButtonToolbar,
  Buttons,
  Overlays,
  Jumbotron,
  Card,
  CardGroup
} from "react-bootstrap";
// import AirInsight from './AirInsight';
import air_article_1 from "./img/air_insige_article_1.jpg";
import air_article_2 from "./img/air_insige_article_2.jpg";
import air_article_3 from "./img/air_insige_article_3.jpg";

//import all images for the country part
import a2014 from "./img/2014.png";
import a2015 from "./img/2015.png";
import a2016 from "./img/2016.png";
import a2017 from "./img/2017.png";
import a2018 from "./img/2018.png";
import a2019 from "./img/2019.png";
import a2014b from "./img/2014-1.png";
import a2015b from "./img/2015-1.png";
import a2016b from "./img/2016-1.png";
import a2017b from "./img/2017-1.png";
import a2018b from "./img/2018-1.png";
import a2019b from "./img/2019-1.png";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";

import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "70%",
  height: "70%"
};

class AirInsight extends Component {
  render() {
    return (
      <div>
        <body>
          <div className="air_scene_one">
            <Container className="first">
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
              <Row />
            </Container>
          </div>
          <div className="air_scene_two">
            <Container className="second">
              {/* <Row> */}
              <h2>Data by Year and Country</h2>
              {/* Country by Year */}
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="china" title="China">
                  {/* make china here  */}
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    // class="nav-tab-year"
                  >
                    <Tab eventKey="2014" title="2014">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2014} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2014b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2015" title="2015">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2015} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2015b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2016" title="2016">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2016} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2016b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2017" title="2017">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2017} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2017b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2018" title="2018">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2018} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2018b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2019" title="2019">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2019} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2019b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                  </Tabs>
                  {/* end china  */}
                </Tab>
                <Tab eventKey="korea" title="Korea">
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    // class="nav-tab-year"
                  >
                    <Tab eventKey="2014" title="2014">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2014} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2014b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2015" title="2015">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2015} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2015b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2016" title="2016">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2016} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2016b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2017" title="2017">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2017} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2017b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2018" title="2018">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2018} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2018b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2019" title="2019">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2019} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2019b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                  </Tabs>
                  {/* end china  */}
                </Tab>
                <Tab eventKey="usa" title="United States">
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    // class="nav-tab-year"
                  >
                    <Tab eventKey="2014" title="2014">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2014} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2014b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2015" title="2015">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2015} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2015b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2016" title="2016">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2016} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2016b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2017" title="2017">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2017} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2017b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2018" title="2018">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2018} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2018b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2019" title="2019">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2019} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2019b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                  </Tabs>
                  {/* end china  */}
                </Tab>
                <Tab eventKey="mexico" title="Mexico">
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    // class="nav-tab-year"
                  >
                    <Tab eventKey="2014" title="2014">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2014} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2014b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2015" title="2015">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2015} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2015b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2016" title="2016">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2016} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2016b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2017" title="2017">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2017} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2017b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2018" title="2018">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2018} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2018b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2019" title="2019">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2019} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2019b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                  </Tabs>
                  {/* end china  */}
                </Tab>
                <Tab eventKey="england" title="England">
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    // class="nav-tab-year"
                  >
                    <Tab eventKey="2014" title="2014">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2014} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2014b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2015" title="2015">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2015} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2015b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2016" title="2016">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2016} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2016b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2017" title="2017">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2017} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2017b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2018" title="2018">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2018} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2018b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                    <Tab eventKey="2019" title="2019">
                      <Jumbotron fluid>
                        <Container>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={a2019} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={a2019b} />
                              </Card>
                            </CardGroup>
                          </Row>
                          <Row>
                            <CardGroup>
                              <Card>
                                <Card.Img variant="top" src={card1} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card2} />
                              </Card>
                              <Card>
                                <Card.Img variant="top" src={card3} />
                              </Card>
                            </CardGroup>
                          </Row>
                        </Container>
                      </Jumbotron>
                    </Tab>
                  </Tabs>
                  {/* end china  */}
                </Tab>
              </Tabs>
              {/* Country by year end */}
            </Container>
          </div>

          {/* Articles here below */}
          <div className="air_scene_three">
            <Container className="air_third">
              <h2>Articles</h2>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={air_article_1} />
                    <Card.Body>
                      <Card.Title>
                        A Warming World Increases Air Pollution
                      </Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={air_article_2} />
                    <Card.Body>
                      <Card.Title>Air Pollution is Coming Soon!</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <a>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={air_article_3} />
                      <Card.Body className="card_body">
                        <Card.Title>Climate Change News</Card.Title>
                        <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              </Row>
              <Row>
                <div class="air_button_row">
                  <Button variant="info" size="lg" class="air_button_scene_one">
                    View Compagin Website
                  </Button>
                </div>
              </Row>
            </Container>
          </div>
        </body>
        <footer>
          <Navbar bg="dark" variant="dark" sticky="bottom">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Copyright © 2019 HCDE 498</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </footer>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAWIgRoSnkMs-IfdnB3vIvwaW35bkqb7bc"
})(AirInsight);
