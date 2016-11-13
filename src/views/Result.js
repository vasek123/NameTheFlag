import React, { Component } from 'react';

import Button from '../components/Button.js';
import Label from '../components/Label.js';

class Result extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="result view">
        <p>Result view</p>
        <Label>
          Good job! Your final score is {this.props.score}! The last flag was {this.props.flag.name}!
        </Label>
        <Button value="Try again" onClick={() => { this.props.clearAll(); this.props.changeView(this.props.views.quiz); }} />
      </div>
    )
  }
}

export default Result;
