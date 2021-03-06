import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelsList from './components/ChannelsList/ChannelsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-intro">Welcome to Apollo</h2>
        </div>
        <ChannelsList/>
      </div>
    );
  }
}

export default App;
