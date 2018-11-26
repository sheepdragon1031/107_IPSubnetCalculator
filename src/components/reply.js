
import React, { Component } from 'react';
class reply extends Component {
  render() {
    const getState = this.props.getState;
    let type
    let responsive
    if(getState.type != 'null')
      type = <span>{getState.type}</span>
    if(getState.responsive)
      responsive = <span>{getState.responsive}</span>

    return (
        <div className="components" key="reply">
          <span>{type}</span>
          <span>{responsive}</span>
          <span>可用IP數量{Math.pow(2, getState.data.exp)}個</span>
        </div>    
      )
  }
}
export default reply;