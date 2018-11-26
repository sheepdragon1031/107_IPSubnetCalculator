import React, { Component } from 'react';
class NetworkClass extends Component {
  setClass = (e) =>{
    this.props.setState(e.target.value)
  }
  render() {
    const netWorkClass = ['Any','A','B','C']
    return (
        <div className="components" key="netWorkClass">
          <span className="title">Network Class</span>
          <select onChange={this.setClass}>
            {netWorkClass.map((element,index)=>(
              <option key={element.toString()}>{element}</option>
            ))}
          </select>
        </div>
      )
  }
}
export default NetworkClass;