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
        data: { exp: 0, online: 0},
        countData: { index: null , data: []}
    };
  }
  componentDidUpdate(prevProps){
    // console.log(this.state.data)
  }
  stateSubNet = (val) =>{
    this.setState({maskIPVal: val})
  }
  stateIpAddress = (val) =>{
    this.setState({ipAddress: val})
  }
  render() {
    const subnet = ['255','254','252','248','240','224','192','128','0']
    const reSubnet = ['0','128','192','224','240','248','252','254']
    let resetResponsive = () =>{
      this.setState({responsive: { type: 'null', responsive: null},data:{ exp: 0, online: 0}})
    }
    let saveResponsive = ( isType, textResponsive) =>{
      this.setState({responsive: { 
        type: isType,
        responsive: textResponsive
      }})

    }
    let justDoit = (e) =>{
      resetResponsive()
      let mask = this.state.maskIPVal.split('.')
      mask.forEach((val,index)=>{
        if(subnet.indexOf(val) === -1){
          saveResponsive('error','網路遮罩格式錯誤，請依照指定計算數值填寫')
        }
        
        if(index > 3 && index < 0){
          saveResponsive('error','網路遮罩格式錯誤，請依照指定數值填寫長度')
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
      }),()=>{
        outdata(mask);
      });
     
    }
    let outdata = (mask) => {
      let ip = this.state.ipAddress.split('.')
      let tempData = { index: null , data: []};
      let isRepeat = false
      let casePrint = (max, val) => {
        tempData['index'] = val
        let expNumber = Math.pow(2, this.state.data.exp % 8)
        for(let i = 0; i < max ; i++){
          let iExpNumber = i * expNumber;
          let iExpNumberS = (i + 1) * expNumber - 1;
          let startVal = `${val === 0 ? iExpNumber : ip[0]}.` +
          `${val === 1 ? iExpNumber : val > 1 ? ip[1]: 0}.` +
          `${val === 2 ? iExpNumber : val > 2 ? ip[2]: 0}.` +
          `${val === 3 ? iExpNumber : 0}`
          let endVal = `${val === 0 ? iExpNumberS : ip[0]}.` +
          `${val === 1 ? iExpNumberS : val > 1 ? ip[1]: 255}.` +
          `${val === 2 ? iExpNumberS : val > 2 ? ip[2]: 255}.` +
          `${val === 3 ? iExpNumberS : 255}`

          tempData['data'].push(startVal)
          tempData['data'].push(endVal)
        }
        saveData()
      }
      let casePrints = ( val) => {
        tempData['index'] = val
        let startVal = `${ val === 0 ? 0 : ip[0]}`
        let endVal = `${val === 0 ? 255 : ip[1]}`
        for(let i = 1 ; i < 4 ; i++){
          startVal +=  `.${ i > val ? 0 : ip[i]}`
          endVal +=  `.${ i > val ? 255 : ip[i]}`
        }
        tempData['data'].push(startVal)
        tempData['data'].push(endVal)
        saveData()
      }
      let saveData = () =>{
        this.setState({
          countData : tempData
        })
      }
      mask.forEach((val,index)=>{
          if(reSubnet.indexOf(val) !== 0){
            let max = Math.pow(2, reSubnet.indexOf(val))
              if(val !== '255'){
                
                  casePrint(max, index)
                
                }
              else{
                if(!isRepeat){
                  if(val === '255' && mask[(index + 1) < 4 ? (index + 1) : 3] === '0'){
                    casePrints(index)  
                  }
                }
                
              }
           }
      })
      //
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
