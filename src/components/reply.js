
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({

});
class reply extends Component {
  
  render() {
    const setState = this.props.getState;
    let type = ''
    let responsive = ''
    let onLine = ''
    if(setState.responsive.type !== 'null')
      type = <Typography className="title">{setState.responsive.type}</Typography>
    if(setState.responsive !== null)
      responsive = <Typography className="title">{setState.responsive.responsive}</Typography>
    onLine = <Typography variant="subtitle1" gutterBottom className="title">Number of Usable Hosts {setState.data.online}</Typography>
    
    let max = setState.countData.data.length
    let data = Object.values(setState.countData.data)
    let div = []
    for(let i = 0; i < max ; i+=2){
      let temp = data[i].split('.')
      let temps = data[i + 1].split('.')
      temp[3] = temp[3] * 1 + 1
      temps[3] =temps[3] * 1 - 1
      temp = temp.join('.')
      temps = temps.join('.')
      div.push(
        <Grid container key={i} className="item">
            <Grid item xs={4} sm={4}><Typography variant="body1" gutterBottom>{data[i]}</Typography></Grid>
            <Grid item xs={4} sm={4}><Typography variant="body1" gutterBottom>{temp} ~ {temps}</Typography></Grid>
            <Grid item xs={4} sm={4}><Typography variant="body1" gutterBottom>{data[i+1]}</Typography></Grid>
        </Grid>
      )
      
    }
    
    return (
        <div className="components" key="reply">
          {type}
          {responsive}
          {onLine}
          <Grid container className="itemBar item">
            <Grid item xs={4} sm={4}>
              <Typography variant="subtitle1" >Network Address</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="subtitle1" >Usable Host IP Range</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="subtitle1" >Broadcast Address</Typography>
            </Grid>
          </Grid>
          
            {div}
          
        </div>
      )
  }
}
export default withStyles(styles)(reply);