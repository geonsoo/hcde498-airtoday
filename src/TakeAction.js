import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

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

//import all the images
import car from "./img/Car.png";
import energy from "./img/Energy.png";
import house from "./img/House.png";
import trash from "./img/Trash.png";
//image for cards
import turnoff from "./img/daily1_turnoff.png";
import energystar from "./img/daily2_energystar.png";
import lightbulb from "./img/daily3_lightbulb.png";
import transportation from "./img/daily4_transportation.png";
import maintain from "./img/daily5_maintain.png";
import idling from "./img/daily6_idling.png";
import compost from "./img/daily7_compost.png";
import safepaints from "./img/daily8_safepaints.png";
import waittofill from "./img/daily9_waittofill.png";
import errands from "./img/daily10_errands.png";
//image for campaigns
import cam1 from "./img/campaign1_breathlife.jpg";
import cam2 from "./img/campaign2_friendsoftheearth.png";
import cam3 from "./img/campaign3_earthjustice.png";
import cam4 from "./img/campaign4_theglobeprogram.png";
import cam5 from "./img/campaign5_cleanairday.png";

const API_PATH = "http://localhost:3000/api/contact/index.php";

class TakeAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "daily"
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
              <Tabs
                id="uncontrolled-tab-example"
                defaultActiveKey="daily"
                transition={false}
              >
                <Tab eventKey="daily" title="Learn about what you can do Daily">
                  {/* daily tab here */}
                  <Jumbotron>
                    <h1 class="oncard_header">
                      <strong>Tips for reducing air pollution every day</strong>
                    </h1>
                    <p class="oncard_text">
                      Every time we drive to school, use our heater or air
                      conditioner, clean our windows, or even style our hair, we
                      make choices that affect air pollution. These steps, as
                      well as many others, are things we all can do to help
                      reduce air pollution.
                    </p>
                    <div class="item_type">
                      <img src={car} alt="car" />
                      <img src={energy} alt="energy" />
                      <img src={house} alt="house" />
                      <img src={trash} alt="trash" />
                    </div>

                    <div class="card_list flex-row flex-wrap">
                      {/* Single Card */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={turnoff}
                              alt="turn off"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Turn Off</Card.Title>
                              <Card.Text>
                                Turn off lights, computers, and electric
                                appliances when not in use
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 2 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={energystar}
                              alt="energy star"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Energy Star label</Card.Title>
                              <Card.Text>
                                Purchase items with the energy star label
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 3 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={lightbulb}
                              alt="lightbulb"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>
                                Energy Efficient Lightbulb
                              </Card.Title>
                              <Card.Text>
                                Use energy efficient lightbulb and appliances
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 4  */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={transportation}
                              alt="bus"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Public Transportation</Card.Title>
                              <Card.Text>
                                Use Carpool, use public transportation, bike, or
                                walk whenever possible
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 5 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={maintain}
                              alt="tool box"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Maintain</Card.Title>
                              <Card.Text>
                                Keep your automobile well tuned and maintained
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 6 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={idling}
                              alt="blue car"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Avoid idling</Card.Title>
                              <Card.Text>
                                Avoid excessive idling of your automobile
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 7 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={compost}
                              alt="compost"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Compost</Card.Title>
                              <Card.Text>
                                Mulch or compost leaves and yard waste
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 8 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={safepaints}
                              alt="paint with brush"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Safe Paints</Card.Title>
                              <Card.Text>
                                Use environmentally safe paints and cleaning
                                products whenever possible
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 9 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={waittofill}
                              alt="dishwasher"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Wait to Fill</Card.Title>
                              <Card.Text>
                                Run dishwashers and clothes washers only when
                                full
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 10 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image"
                              src={errands}
                              alt="compost"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Errands</Card.Title>
                              <Card.Text>
                                Combine errands for fewer trips
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </Jumbotron>
                </Tab>
                <Tab eventKey="campaign" title="Find a Campaign to join">
                  {/* campaign tab here */}
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
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image-campaign"
                              src={cam1}
                              alt="campaign breath the life"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Breaththelife</Card.Title>
                              <div class="card-text-campaign">
                                BreatheLife is a joint campaign led by the World
                                Health Organization (WHO) and the Climate &
                                Clean Air Coalition (CCAC) to mobilize cities
                                and individuals to protect our health and planet
                                from the effects of air pollution.
                              </div>
                              <Button variant="outline-dark" size="sm">
                                <Link
                                  class="button-word"
                                  target="blank"
                                  to="http://breathelife2030.org/"
                                >
                                  Visit Campaign Website
                                </Link>
                              </Button>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 2 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image-campaign"
                              src={cam2}
                              alt="campaign friends of the earth"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Friends of the Earth</Card.Title>
                              <div class="card-text-campaign">
                                Friends of the Earth England, is the largest
                                grassroots environmental campaigning community
                                in the UK. Groups are run by thousands of
                                volunteers. Find out what your nearest group is
                                working on. If there isn't one, consider
                                starting a new one.
                              </div>
                              <Button variant="outline-dark" size="sm">
                                <Link
                                  class="button-word"
                                  target="blank"
                                  to="https://friendsoftheearth.uk/clean-air"
                                >
                                  Visit Campaign Website
                                </Link>
                              </Button>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 3 */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image-campaign"
                              src={cam3}
                              alt="Earthjustice"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Earthjustice</Card.Title>
                              <div class="card-text-campaign">
                                Smog causes asthma attacks, clogs our lungs and
                                threatens our health. Poor environmental
                                conditions aggravate many of these attacks. That
                                is why the Fight for Clean Air campaign is
                                telling the stories of those who are most
                                impacted by weak smog protections.
                              </div>
                              <Button variant="outline-dark" size="sm">
                                <Link
                                  class="button-word"
                                  target="blank"
                                  to="https://earthjustice.org/"
                                >
                                  Visit Campaign Website
                                </Link>
                              </Button>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 4  */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image-campaign"
                              src={cam4}
                              alt="The Globe program"
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>The Globe program</Card.Title>
                              <div class="card-text-campaign">
                                Have you ever wondered how clean the air is in
                                your area? Or how it compares to neighbouring
                                towns and countries? All GLOBE schools are
                                invited to study air quality and share their
                                data with the GLOBE community.
                              </div>
                              <Button variant="outline-dark" size="sm">
                                <Link
                                  class="button-word"
                                  target="blank"
                                  to="https://www.globe.gov/"
                                >
                                  Visit Campaign Website
                                </Link>
                              </Button>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>

                      {/* Card 5  */}
                      <Card class="card shadow-sm border-light">
                        <div class="row">
                          <div class="col-sm-4">
                            <img
                              class="card-image-campaign"
                              src={cam5}
                              alt="Clean Air Day "
                            />
                          </div>
                          <div class="col">
                            <Card.Body>
                              <Card.Title>Clean Air Day </Card.Title>
                              <div class="card-text-campaign">
                                Clean Air Day is coordinated by Global Action
                                Plan, on behalf of 200 Supporter organisations,
                                including royal medical colleges, NHS trusts,
                                local authorities, universities and health
                                charities.
                              </div>
                              <Button variant="outline-dark" size="sm">
                                <Link
                                  class="button-word"
                                  target="blank"
                                  to="https://www.gov.uk/government/case-studies/clean-air-day-2018-uks-largest-air-pollution-campaign"
                                >
                                  Visit Campaign Website
                                </Link>
                              </Button>
                            </Card.Body>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </Jumbotron>
                </Tab>
              </Tabs>
              ;
            </Row>
          </Container>
        </div>

        {/* Take action campaign end */}

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
