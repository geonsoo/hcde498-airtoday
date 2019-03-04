import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import Button from "@material-ui/core/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import {
  Nav,
  Navbar,
  Col,
  Container,
  Row,
  ButtonToolbar,
  Buttons,
  Overlays,
  Card
} from "react-bootstrap";
// import AirInsight from './AirInsight';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numClicks: 0
    };
  }

  render() {
    return (
      <div className="App">
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
              <Nav.Link href="AirInsight.js">Air Insight</Nav.Link>
              <Nav.Link href="#take_action">Take Action</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <body>
          <div className="wrapper scene_one">
            <Container className="first main_page">
              <Row>
                <Col>
                  <span class="section_one_text">
                    The air around you is changing. Will you help to stop it?
                  </span>
                </Col>
              </Row>

              <Row>
                <div class="button_row">
                  <Button variant="info" size="lg" class="button_scene_one">
                    Button
                  </Button>
                </div>
              </Row>
            </Container>
          </div>
          <div className="wrapper scene_two">
            <Container className="second">
              <Row>
                <Col>
                  <h2 class="scene_two_title">
                    What and how does air pollution happen?
                  </h2>
                  <p class="scene_two_text">
                    Air pollution can be defined as the presence of toxic
                    chemicals or compounds in the air, at levels that pose a
                    health risk and cause detrimental changes to the earth such
                    as damaging of the ozone layer or causing global warming.{" "}
                  </p>

                  <p class="scene_two_text">
                    Most often, pollution is caused by human causes such as
                    factories, cars and airplanes and cigarrettes. Some types of
                    air pollution, are caused form natural sources such as smoke
                    from wildfires or ash from volcanoes.
                  </p>
                </Col>
              </Row>

              <Row>
                <div class="scene_image">
                  <img src="img/factories.jpg" alt="factories" />
                  <img src="img/veihcles.jpg" alt="vehicles" />
                  <img src="img/cigarette.jpg" alt="cigarette" />
                  <img src="img/volcanos.jpg" alt="volcanos" />
                </div>
              </Row>
            </Container>
          </div>

          <div className="wrapper scene_three">
            <Container className="third">
              <Row>
                <Col>
                  <div class="scene_three_wrap">
                    <h1 class="scene_three_title">What are the effects? </h1>

                    <p class="scene_three_text">
                      People experience a wide range of health effects from
                      being exposed to air pollution. Effects can be broken down
                      into short-term effects and long-term effects.{" "}
                    </p>
                    <br />
                    <p class="scene_three_text">
                      <strong>Short-term effects,</strong> which are temporary
                      and cause discomfort such as irritation to the nose,
                      throat, eyes, or skin. Air pollution can also cause
                      headaches, dizziness, and nausea.{" "}
                    </p>
                    <br />

                    <p class="scene_three_text">
                      <strong>Long-term effects</strong> of air pollution can
                      last for years or for an entire lifetime. Nearly{" "}
                      <strong>2.5 million people die worldwide</strong> each
                      year from the effects of outdoor or indoor air pollution.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="wrapper scene_four">
            <Container className="fourth">
              <Row>
                <h2>What can you do to take action?</h2>

                <div class="fourth_wrap">
                  <a href="#">
                    <div class="img_left"> </div>
                  </a>

                  <a href="#">
                    <div class="img_right"> </div>
                  </a>
                </div>
              </Row>
            </Container>
          </div>
        </body>
        <footer>
          <Navbar bg="dark" variant="dark" sticky="bottom">
            {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Copyright © 2019 HCDE 498</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </footer>

        {/* Take action daily version here */}
        <div className="wrapper whole_page">
          <h1 class="header_text">
            <b>Actions You Can Take to Reduce Air Pollution</b>
          </h1>
          <h2 class="sub_text">
            What will you do to help make your air cleaner?
          </h2>
          <Container>
            <Row>
              <div class="takeaction_button">
                <img src="img/daily_daily.jpg" alt="daily" />
                <img src="img/daily_campaign.jpg" alt="campaigns" />
              </div>
              <Jumbotron>
                <h1 class="oncard_header">
                  <strong>Tips for reducing air pollution every day</strong>
                </h1>
                <p class="oncard_text">
                  Every time we drive to school, use our heater or air
                  conditioner, clean our windows, or even style our hair, we
                  make choices that affect air pollution. These steps, as well
                  as many others, are things we all can do to help reduce air
                  pollution.
                </p>
                <div class="item_type">
                  <img src="img/daily00_car.jpg" alt="car" />
                  <img src="img/daily01_energy.jpg" alt="energy" />
                  <img src="img/daily02_trash.jpg" alt="trash" />
                  <img src="img/daily04_house.jpg" alt="house" />
                </div>

                <div class="card_list flex-row flex-wrap">
                  {/* Single Card */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily1_turnoff.png"
                      alt="turn off"
                    />
                    <Card.Body>
                      <Card.Title>Turn Off</Card.Title>
                      <Card.Text>
                        Turn off lights, computers, and electric appliances when
                        not in use
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 2 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily2_energystar.png"
                      alt="energy star"
                    />
                    <Card.Body>
                      <Card.Title>Energy Star label</Card.Title>
                      <Card.Text>
                        Purchase items with the energy star label
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 3 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily3_lightbulb.png"
                      alt="lightbulb"
                    />
                    <Card.Body>
                      <Card.Title>Energy Efficient Lightbulb</Card.Title>
                      <Card.Text>
                        Use energy efficient lightbulb and appliances
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 4  */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily4_publictransportation.png"
                      alt="bus"
                    />
                    <Card.Body>
                      <Card.Title>Public Transportation</Card.Title>
                      <Card.Text>
                        Use Carpool, use public transportation, bike, or walk
                        whenever possible
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 5 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily5_maintain.png"
                      alt="tool box"
                    />
                    <Card.Body>
                      <Card.Title>Maintain</Card.Title>
                      <Card.Text>
                        Keep your automobile well tuned and maintained
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 6 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily6_idling.png"
                      alt="blue car"
                    />
                    <Card.Body>
                      <Card.Title>Avoid idling</Card.Title>
                      <Card.Text>
                        Avoid excessive idling of your automobile
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 7 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily7_compost.png"
                      alt="compost"
                    />
                    <Card.Body>
                      <Card.Title>Compost</Card.Title>
                      <Card.Text>
                        Mulch or compost leaves and yard waste
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 8 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily8_safepaints.png"
                      alt="paint with brush"
                    />
                    <Card.Body>
                      <Card.Title>Safe Paints</Card.Title>
                      <Card.Text>
                        Use environmentally safe paints and cleaning products
                        whenever possible
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 9 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily9_waittofill.png"
                      alt="dishwasher"
                    />
                    <Card.Body>
                      <Card.Title>Wait to Fill</Card.Title>
                      <Card.Text>
                        Run dishwashers and clothes washers only when full
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 10 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily10_errands.png"
                      alt="compost"
                    />
                    <Card.Body>
                      <Card.Title>Errands</Card.Title>
                      <Card.Text>Combine errands for fewer trips</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Jumbotron>
              ;
            </Row>
          </Container>
        </div>

        {/* Take action  daily version end */}

        {/* Take Action Campaign version start from here */}
        <div className="wrapper whole_page">
          <h1 class="header_text">
            <b>Actions You Can Take to Reduce Air Pollution</b>
          </h1>
          <h2 class="sub_text">
            What will you do to help make your air cleaner?
          </h2>
          <Container>
            <Row>
              <div class="takeaction_button">
                <img src="img/campaign_daily.jpg" alt="daily" />
                <img src="img/campaign_campaign.jpg" alt="campaigns" />
              </div>
              <Jumbotron>
                <h1 class="oncard_header">
                  <strong>Make an impact through Campaigns</strong>
                </h1>
                <p class="oncard_text">
                  Want to find an community that supports taking action to
                  reduce air pollution? Want to take action in an larger scale?
                  Join a campaign now and find your community while being
                  friendly to the earth and everyone who lives here.
                </p>

                <div class="card_list flex-row flex-wrap">
                  {/* Single Card */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/campaign1_breathlife.jpg"
                      alt="breathlife"
                    />
                    <Card.Body>
                      <Card.Title>Breathelife</Card.Title>
                      <Card.Text class="card-text-campaign">
                        BreatheLife is a joint campaign led by the World Health
                        Organization (WHO) and the Climate & Clean Air Coalition
                        (CCAC) to mobilize cities and individuals to protect our
                        health and planet from the effects of air pollution.
                      </Card.Text>
                      <Button class="card-button variant-outline-dark">
                        Dark
                      </Button>
                    </Card.Body>
                  </Card>

                  {/* Card 2 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily2_energystar.png"
                      alt="energy star"
                    />
                    <Card.Body>
                      <Card.Title>Energy Star label</Card.Title>
                      <Card.Text>
                        Purchase items with the energy star label
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 3 */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily3_lightbulb.png"
                      alt="lightbulb"
                    />
                    <Card.Body>
                      <Card.Title>Energy Efficient Lightbulb</Card.Title>
                      <Card.Text>
                        Use energy efficient lightbulb and appliances
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* Card 4  */}
                  <Card class="card shadow-sm border-light">
                    <img
                      class="card-image"
                      src="/img/daily4_publictransportation.png"
                      alt="bus"
                    />
                    <Card.Body>
                      <Card.Title>Public Transportation</Card.Title>
                      <Card.Text>
                        Use Carpool, use public transportation, bike, or walk
                        whenever possible
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Jumbotron>
              ;
            </Row>
          </Container>
        </div>
        {/* Take Action Campaign version end here */}
      </div>
    );
  }
}

export default App;
