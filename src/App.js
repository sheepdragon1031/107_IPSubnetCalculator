import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import HetWorkClass from './components/networkclass';
import SubNet from './components/subnet';
import IpAddress from './components/ipaddress';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state  = {
        maskIPVal: '255.255.255.255',
        netWorkClass: 'Any',
        ipAddress: '0.0.0.0'
    };
  }
  
  stateHetWorkClass = (val) =>{
    this.setState({netWorkClass: val})
  }
  stateSubNet = (val) =>{
    this.setState({maskIPVal: val})
  }
  stateIpAddress = (val) =>{
    this.setState({ipAddress: val})
  }
  render() {
    // const subnet = {0: 256, 128: 128, 192: 64, 224: 32, 240: 16, 248: 8, 252: 4, 254: 2, 255: 0};
    const justDoit = (e) =>{
      console.log(this.state)
    }
    this.setState.PropTypes = {
      maskIPVal: PropTypes.string.isRequired,
      netWorkClass: PropTypes.string.isRequired,
      ipAddress: PropTypes.string.isRequired,
    }
    return (
      <div className="App" key="App">
        <HetWorkClass setState={this.stateHetWorkClass}/>
        <SubNet setState={this.stateSubNet}/>
        <IpAddress setState={this.stateIpAddress} getState={this.state.ipAddress} />
        <div className="components">
          <input type="button" value="Just do it!" onClick={justDoit}></input>
        </div>
      </div>
    )
  }
}

export default App;
