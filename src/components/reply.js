
import React, { Component } from 'react';
class reply extends Component {
  render() {
    const setState = this.props.getState;
    let type = ''
    let responsive = ''
    let onLine = ''
    if(setState.responsive.type !== 'null')
      type = <span>{setState.responsive.type}</span>
    if(setState.responsive !== null)
      responsive = <span>{setState.responsive.responsive}</span>
    onLine = <span>可使用的IP數量{setState.data.online}個</span>
    return (
        <div className="components" key="reply">
          {type}
          {responsive}
          {onLine}
        </div>    
      )
  }
}
export default reply;