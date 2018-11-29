import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
class IpAddress extends Component {
  setIP = (e) =>{
    this.props.setState(e.target.value)
  }
  render() {
    return (
      <div className="components" key="ipAddress"> 
        <Typography>Ip Address</Typography>
        <Input key="ipAddress" defaultValue={this.props.getState} fullWidth={true} onChange={this.setIP}/>
      </div>
    )
  }
}
export default IpAddress;