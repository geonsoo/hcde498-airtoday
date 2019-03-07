import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";


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

import "./App.css";
import "./TakeAction.css";
import axios from "axios";


import test from "./img/daily00_car.jpg";
const API_PATH = "http://localhost:3000/api/contact/index.php";

// import AirInsight from './AirInsight';

class TakeAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numClicks: 0
    };
  }

  render() {
    return (
 
        <body>
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
                  <img src="./img/daily_daily.jpg" alt="daily" />
                  <img src="./img/daily_campaign.jpg" alt="campaigns" />
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
                    <img src={test} alt="car" />
                    <img src="./img/daily01_energy.jpg" alt="energy" />
                    <img src="./img/daily02_trash.jpg" alt="trash" />
                    <img src="./img/daily04_house.jpg" alt="house" />
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
                          Turn off lights, computers, and electric appliances
                          when not in use
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    {/* Card 2 */}
                    <Card class="card shadow-sm border-light">
                      <img
                        class="card-image"
                        src="./img/daily2_energystar.png"
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
                        src="./img/daily3_lightbulb.png"
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
                    reduce air pollution? Want to take action in an larger
                    scale? Join a campaign now and find your community while
                    being friendly to the earth and everyone who lives here.
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
                          BreatheLife is a joint campaign led by the World
                          Health Organization (WHO) and the Climate & Clean Air
                          Coalition (CCAC) to mobilize cities and individuals to
                          protect our health and planet from the effects of air
                          pollution.
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

          <footer>
            <Navbar bg="dark" variant="dark" sticky="bottom">
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>Copyright © 2019 HCDE 498</Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </footer>
        </body>

    );
  }
}

export default TakeAction;
