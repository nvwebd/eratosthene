import React, { Component, PropTypes } from 'react';
const axios = require('axios');

import Form from './Form';

export default class App extends Component {
  handleSubmit(event) {
   alert('An essay was submitted: ' + this.state.value);
   event.preventDefault();
  }

  render(){
    return(
      <div className="main-container">
        <Form />
      </div>
    );
  }
}
