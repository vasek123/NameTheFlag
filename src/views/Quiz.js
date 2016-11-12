import React, { Component } from 'react';

import Flag from '../components/Flag.js';
import Button from '../components/Button.js';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(e) {
    this.setState(Object.assign({}, { input: e.target.value }));
  }

  render() {
    return (
      <div className="quiz view">
        <p>Quiz view</p>
        <Flag flag={this.props.flag} />
        <input type="text" value={this.state.input} onChange={this.inputOnChange} />
        <Button value="Check my answer" onClick={() => this.props.checkAnswer(this.state.input)} />
        <Button value="Change flag" onClick={this.props.changeCurrentFlag} />
      </div>
    )
  }
}

export default Quiz;
