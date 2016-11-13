import React, { Component } from 'react';

import Flag from '../components/Flag.js';
import Button from '../components/Button.js';

//Rewrite so that currentFlag, availableFlags are contained in Quiz view state and not in App

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.inputOnChange = this.inputOnChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  inputOnChange(event) {
    this.setState(Object.assign({}, { input: event.target.value }));
  }

  onKeyDown(event) {
    //check which key has been pressed
    let key = event.key;
    if (key === "Enter") this.clearInput(this.props.checkAnswer(this.state.input));

    if (key === "ArrowUp") {
      this.props.changeCurrentFlag();
      this.clearInput(true);
    }
  }

  clearInput(clear) {
    if (!clear) return;

    this.setState(Object.assign({}, this.state, { input: '' }));
    this.textInput.focus();
  }

  render() {
    return (
      <div className="quiz view" onKeyDown={this.onKeyDown}>
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
