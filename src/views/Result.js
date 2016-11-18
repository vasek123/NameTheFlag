import React, { Component } from 'react';

import Button from '../components/Button.js';


class Result extends Component {
  render() {
    let flagName = (this.props.flag.name).split(' ').map(function (str) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }).join(' ');

    return (
      <div className="result view">
        <h2>Good job!</h2>
        <p>Your final score is {this.props.score}! The last flag was the the flag of {flagName}!</p>
        <Button value="Try again" onClick={() => { this.props.clearAll(); this.props.changeView(this.props.views.quiz); }} />
      </div>
    )
  }
}

export default Result;
