import React, { Component  } from 'react';
import PropTypes from 'prop-types';
// import HetWorkClass from './components/networkclass';
import SubNet from './components/subnet';
import IpAddress from './components/ipaddress';
import Reply from './components/reply'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state  = {
        maskIPVal: '255.255.255.255',
        // netWorkClass: 'Any',
        ipAddress: '0.0.0.0',
        responsive : { type: 'null', responsive: null, data: { exp: 0}}
    };
  }
  
  // stateHetWorkClass = (val) =>{
  //   this.setState({netWorkClass: val})
  // }
  stateSubNet = (val) =>{
    this.setState({maskIPVal: val})
  }
  stateIpAddress = (val) =>{
    this.setState({ipAddress: val})
  }
 
  render() {
    let resetResponsive = () =>{
      responsive.data.exp = 0
      responsive.type = 'null'
      responsive.responsive = null
    }
    const responsive = this.state.responsive;
    const subnet = ['255','254','252','248','240','224','192','128','0'];
    const justDoit = (e) =>{
      let mask = this.state.maskIPVal.split('.')
      resetResponsive()
      mask.forEach((val,index)=>{
        if(subnet.indexOf(val) === -1){
          responsive.responsive = '網路遮罩格式錯誤，請依照指定計算數值填寫'
          responsive.type = 'error'
        }
        if(index !== 3){
          responsive.responsive = '網路遮罩格式錯誤，請依照指定數值填寫長度'
          responsive.type = 'error'
        }
        responsive.data.exp += subnet.indexOf(val)
      })
      console.log('???');
    }
    this.setState.PropTypes = {
      maskIPVal: PropTypes.string.isRequired,
      netWorkClass: PropTypes.string.isRequired,
      ipAddress: PropTypes.string.isRequired,
    }
    return (
      <div className="App" key="App">
        {/* <HetWorkClass setState={this.stateHetWorkClass}/> */}
        <SubNet setState={this.stateSubNet}/>
        <IpAddress setState={this.stateIpAddress} getState={this.state.ipAddress} />
        <div className="components">
          <input type="button" value="Just do it!" onClick={justDoit}></input>
        </div>
        <Reply getState={this.state.responsive}/>
      </div>
    )
  }
}

export default App;
