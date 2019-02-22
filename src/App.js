import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Nav, Navbar } from 'react-bootstrap';


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
        
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
      
    
          </Navbar>
        
          <p>
            number of times pressed: {this.state.numClicks}
          </p>
       
            Hello There
          
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
