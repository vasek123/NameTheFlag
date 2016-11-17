import React, { Component } from 'react';

import Button from '../components/Button.js';


class Win extends Component {
  render() {
    return (
      <div className="win view">
        <p>Win view</p>
        <p>Congratulations! You answered correctly all the {this.props.flags.length} flags!</p>
        <p>Do you want to try again?</p>
        <Button value="Start quiz" onClick={() => { this.props.clearAll(); this.props.changeView(this.props.views.quiz); }} />
      </div>
    )
  }
}

export default Win;
