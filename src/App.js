import React, { Component } from 'react';
import HetWorkClass from './components/networkclass';
import SubNet from './components/subnet';
import IpAddress from './components/ipaddress';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HetWorkClass />
        <SubNet />
        <IpAddress />
      </div>
    );
  }
}

export default App;
