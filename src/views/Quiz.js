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
    this.clearInput = this.clearInput.bind(this);
  }

  inputOnChange(e) {
    this.setState(Object.assign({}, { input: e.target.value }));
  }

  clearInput(b) {
    if (!b) return;

    this.setState(Object.assign({}, this.state, { input: '' }));
    this.textInput.focus();
  }

  render() {
    return (
      <div className="quiz view">
        <p>Quiz view</p>
        <Flag flag={this.props.flag} />
        <input type="text" ref={(input) => this.textInput = input} value={this.state.input} onChange={this.inputOnChange} />
        <Button value="Check my answer" onClick={() => { this.clearInput(this.props.checkAnswer(this.state.input)) }} />
        <Button value="Change flag" onClick={this.props.changeCurrentFlag} />
      </div>
    )
  }
}

export default Quiz;
