import React, { Component } from 'react';

import Flag from '../components/Flag.js';
import Button from '../components/Button.js';
import ScoreCounter from '../components/ScoreCounter.js';

//Rewrite so that currentFlag, availableFlags are contained in Quiz view state and not in App

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      availableFlags: this.props.flags,
      currentFlag: this.props.flags[Math.floor(Math.random() * this.props.flags.length)]
    }

    this.inputOnChange = this.inputOnChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.changeCurrentFlag = this.changeCurrentFlag.bind(this);
  }

  componentWillMount() {
    this.props.updateScoreAndFlag(0, this.state.currentFlag);
  }

  changeCurrentFlag() {
    let availableFlags = [...this.state.availableFlags];
    availableFlags.splice(availableFlags.indexOf(this.state.currentFlag), 1);
    let currentFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];
    this.setState(Object.assign({}, this.state, { currentFlag: currentFlag }));
  }

  checkAnswer() {
    if (this.state.currentFlag.name === this.state.input.trim().toLowerCase()) {

      let availableFlags = this.state.availableFlags.slice();
      availableFlags.splice(availableFlags.indexOf(this.state.currentFlag), 1);
      let currentFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];

      this.setState(Object.assign({}, this.state, { availableFlags: availableFlags, currentFlag: currentFlag, input: '' }));
      this.props.updateScoreAndFlag(this.props.score + 1, this.state.currentFlag);

      return true;

    } else {

      this.props.changeView(this.props.views.result);

    }
  }

  inputOnChange(event) {
    this.setState(Object.assign({}, { input: event.target.value }));
  }

  onKeyDown(event) {
    //check which key has been pressed
    let key = event.key;
    if (key === "Enter") this.checkAnswer(this.state.input);

    if (key === "ArrowUp") {
      let availableFlags = [...this.state.availableFlags];
      availableFlags.splice(availableFlags.indexOf(this.state.currentFlag), 1);
      let currentFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];
      this.setState(Object.assign({}, this.state, { currentFlag: currentFlag, input: '' }));
    }
  }

  render() {
    return (
      <div className="quiz view" onKeyDown={this.onKeyDown}>
        <p>Quiz view</p>
        <Flag flag={this.state.currentFlag} />
        <input type="text" ref={(input) => this.textInput = input} value={this.state.input} onChange={this.inputOnChange} />
        <Button value="Check my answer" onClick={() => { this.checkAnswer(this.state.input) }} />
        {/*<Button value="Change flag" onClick={this.changeCurrentFlag} />*/}
        <ScoreCounter score={this.props.score} max={this.props.flags.length} />
      </div>
    )
  }
}

export default Quiz;
