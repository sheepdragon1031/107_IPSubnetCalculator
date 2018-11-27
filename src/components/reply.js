
import React, { Component } from 'react';
class reply extends Component {
  // componentWillMount = ()=>{
  //   let the = this;
  //   setTimeout(()=>{
  //     console.log(the)
  //   },the.props.wait)
  // }
  componentWillReceiveProps(newProps) {
    // let data = this.props.getState.responsive
    // console.log(data,newProps.getState)
    // if(newProps.getState.responsive.online !== data.online){
      
    // .setState({...this.state.responsive.data, online: online})
    // }
  }
  setOnline = (e) =>{
    console.log(e);
    // console.log(e)
    // this.props.setState = e
  }
  render() {
    const setState = this.props.getState;
    let type = ''
    let responsive = ''
    let onLine = ''
    if(setState.type !== 'null')
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