import React, { Component } from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';


const maskIP = [
  { label: '255.255.255.255'} ,
  { label: '255.255.255.254'} ,
  { label: '255.255.255.252'} ,
  { label: '255.255.255.248'} ,
  { label: '255.255.255.240'} ,
  { label: '255.255.255.224'} ,
  { label: '255.255.255.192'} ,
  { label: '255.255.255.128'} ,
  { label: '255.255.255.0'} ,
  { label: '255.255.254.0'} ,
  { label: '255.255.252.0'} ,
  { label: '255.255.248.0'} ,
  { label: '255.255.240.0'} ,
  { label: '255.255.224.0'} ,
  { label: '255.255.192.0'} ,
  { label: '255.255.128.0'} ,
  { label:  '255.255.0.0'} ,
  { label: '255.254.0.0'} ,
  { label: '255.252.0.0'} ,
  { label: '255.248.0.0'} ,
  { label: '255.240.0.0'} ,
  { label: '255.224.0.0'} ,
  { label: '255.192.0.0'} ,
  { label: '255.128.0.0'} ,
  { label: '255.0.0.0'} ,
  { label: '254.0.0.0'} ,
  { label: '252.0.0.0'} ,
  { label: '248.0.0.0'} ,
  { label: '240.0.0.0'} ,
  { label: '224.0.0.0'} ,
  { label: '192.0.0.0'} ,
  { label: '128.0.0.0'} ,
].map( (element) => ({
  value: element.label,
  label: element.label,
}));

const styles = theme => ({
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
});

let inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
}

let Control = (props) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
    />
  );
}

let Option = (props) => {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

let Placeholder = (props) =>{
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}
const components = {
  Option,
  Control,
  Placeholder,
};
class SubNet extends Component {
  state = {
    maskIPVal: this.props.getState
  }
  
  setIPVal = (element) => {
    this.props.setState(element.value)
    this.setState({maskIPVal: element})
  };
  render() {

    const { classes } = this.props
    // const subnetVal  = this.props.maskIPVal;
    return (
      <div className="components" key="subNet">
        <span className="title">SubNet</span>
        <Select
            classes={classes}
            options={maskIP}
            components={components}
            value={this.state.maskIPVal}
            onChange={this.setIPVal}
            placeholder="Select a network mask"
          />
        {/* <Select onChange={this.setIPVal} components={components}  options={maskIP} value={maskIP} placeholder="Select mask subNet" />          */}
        {/* {MaskIP.map((element) =>
           <option key={element.toString()}>{element}</option>
         )} */}
      </div>
    )
  }
}
export default withStyles(styles)(SubNet);