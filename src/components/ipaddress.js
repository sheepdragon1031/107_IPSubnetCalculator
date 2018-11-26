import React, { Component } from 'react';
class IpAddress extends Component {
  setIP = (e) =>{
    this.props.setState(e.target.value)
  }
  render() {
    return (
      <div className="components" key="ipAddress"> 
        <span className="title">Ip Address</span>
        <input key="ipAddress" defaultValue={this.props.getState} onChange={this.setIP}/>
      </div>
    )
  }
}
export default IpAddress;