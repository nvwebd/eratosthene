import React, {Component, PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

const axios = require('axios');

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxLimit: '',
      from: '',
      to: '',
      specNumber: ''
    };
  }

  handleClick(event) {
    const apiBaseUrl = "http://localhost:8888";
    const self = this;

    const payload = [this.state.maxLimit, this.state.from, this.state.to, this.state.specNumber];

    axios.post(apiBaseUrl , payload).then((response) => {
      if (response.data.code == 200) {
        console.log('DATA: ', data);
      }
    }).catch((error) => {
      console.error('ERROR: ', error);
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Eratosthene Prime Numbers Search"/>
            <TextField
              floatingLabelText="Max Limit"
              onChange= {(event,newValue) => this.setState({maxLimit:newValue})}
            />
            <br/>
            <TextField
              floatingLabelText="From"
              onChange= {(event,newValue) => this.setState({from:newValue})}
            />
            <TextField
              floatingLabelText="To"
              onChange= {(event,newValue) => this.setState({to:newValue})}
            />
            <br/>
            <TextField
              floatingLabelText="Specific Number"
              onChange= {(event,newValue) => this.setState({specNumber:newValue})}
            />
            <br/>
            <RaisedButton label="Find Prime Numbers" primary={true} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
