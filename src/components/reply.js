
import React, { Component } from 'react';
class reply extends Component {
  render() {
    const setState = this.props.getState;
    let type = ''
    let responsive = ''
    let onLine = ''
    if(setState.responsive.type !== 'null')
      type = <div>{setState.responsive.type}</div>
    if(setState.responsive !== null)
      responsive = <div>{setState.responsive.responsive}</div>
    onLine = <div>可使用的IP數量{setState.data.online}個</div>
    
    let max = setState.countData.data.length
    let data = Object.values(setState.countData.data)
    let div = []
    for(let i = 0; i < max ; i+=2){
      let temp = data[i].split('.')
      let temps = data[i + 1].split('.')
      temp[setState.countData.index] = temp[setState.countData.index] * 1 + 1
      temps[setState.countData.index] =temps[setState.countData.index] * 1 - 1
      temp = temp.join('.')
      temps = temps.join('.')
      div.push(
        <div className="tr" key={i.toString()}>
          <span>{data[i]}</span>
          <span>{temp} ~ {temps}</span>
          <span>{data[i+1]}</span>
        </div>
      )
    }
    return (
        <div className="components" key="reply">
          {type}
          {responsive}
          {onLine}
          <div className="tr">
            <span>Network Address</span>
            <span>Usable Host Rang</span>
            <span>Broadcast Address</span>
          </div>
          <div className="table">
            {div}
          </div>
        </div>    
      )
  }
}
export default reply;