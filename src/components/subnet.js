import React, { Component } from 'react';
import MaskIP from './maskip';
class SubNet extends Component {
  setIPVal = (e) =>{
    this.props.setState(e.target.value);    
  }
  render() {
    // const subnetVal  = this.props.maskIPVal;
    return (
      <div className="components" key="subNet">
        <span className="title">SubNet</span>
        <select onChange={this.setIPVal}>
         {MaskIP.map((element) =>
           <option key={element.toString()}>{element}</option>
         )}
        </select>
      </div>
    )
  }
}
export default SubNet;