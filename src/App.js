import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from "@material-ui/core/Button";

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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            number of times pressed: {this.state.numClicks}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello There
          </a>
          
          <Button 
            variant="contained"
            color="primary"
           
            >

            Click Me
          </Button>

        </header>
      </div>
    );
  }
}

export default App;
