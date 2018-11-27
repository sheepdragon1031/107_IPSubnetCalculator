import React, { Component  } from 'react';
// import PropTypes from 'prop-types';
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
        responsive : { type: 'null', responsive: null},
        data: { exp: 0, online: 0}
    };
  }
  componentDidUpdate(prevProps){
    // if(this.props !== prevProps){
    //   this.fetchData(this.props);
    // }
    console.log(this.state.data)
    // this.state.data
  }
  stateSubNet = (val) =>{
    this.setState({maskIPVal: val})
  }
  stateIpAddress = (val) =>{
    this.setState({ipAddress: val})
  }
  // stateOnline = (val) =>{
  //   setState={this.stateOnline}
  // }
  render() {
    const subnet = ['255','254','252','248','240','224','192','128','0'];
    let resetResponsive = () =>{
      this.setState({responsive: { type: 'null', responsive: null},data:{ exp: 0, online: 0}})
    }
    let justDoit = (e) =>{
      resetResponsive()
      let mask = this.state.maskIPVal.split('.')
      mask.forEach((val,index)=>{
        if(subnet.indexOf(val) === -1){
          this.setState({responsive: { 
            type: 'error',
            responsive: '網路遮罩格式錯誤，請依照指定計算數值填寫'
          }})

        }
        
        if(index > 3 && index < 0){
          this.setState({responsive: { 
            type: 'error',
            responsive: '網路遮罩格式錯誤，請依照指定數值填寫長度'
          }})
        }
       
        this.setState(prevState => ({
          data:{
            exp:  prevState.data.exp +  subnet.indexOf(val),
            online: 0
          }
        }));
      })
      this.setState(prevState => ({
        data:{
          exp:  prevState.data.exp,
          online: (Math.pow(2, prevState.data.exp) - 2) < 0 ? 0 : (Math.pow(2, prevState.data.exp) - 2)
        }
      }));
      
    }
    return (
      <div className="App" key="App">
        {/* <HetWorkClass setState={this.stateHetWorkClass}/> */}
        <SubNet setState={this.stateSubNet}/>
        <IpAddress setState={this.stateIpAddress} getState={this.state.ipAddress} />
        <div className="components">
          <input type="button" value="Just do it!" onClick={justDoit}></input>
        </div>
        <Reply  getState={this.state} wait="500"/>
      </div>
    )
  }
}

export default App;
