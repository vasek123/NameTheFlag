import React, { Component } from 'react';

//Flags JSON
import * as flagsJSON from '../assets/flags.json';
let flags = [];
for (let key in Object.keys(flagsJSON)) {
  flags.push(flagsJSON[key]);
}

//Views
import Menu from './views/Menu.js';
import Quiz from './views/Quiz.js';
import Result from './views/Result.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.flags = flags;

    this.views = {
      'menu': 0,
      'quiz': 1,
      'result': 2
    }

    this.state = {
      view: this.views.quiz,
      availableFlags: flags,
      currentFlag: flags[Math.floor(Math.random() * flags.length)],
      correctAnswers: 0
    }

    this.changeView = this.changeView.bind(this);
    this.changeCurrentFlag = this.changeCurrentFlag.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentWillMount() {
    this.changeCurrentFlag();
  }

  changeCurrentFlag() {
    let availableFlags = [...this.state.availableFlags];
    availableFlags.splice(availableFlags.indexOf(this.state.currentFlag, 1));

    let index = Math.floor(Math.random() * availableFlags.length);
    let currentFlag = availableFlags[index];

    this.setState(Object.assign({}, this.state, { currentFlag: currentFlag }));
  }

  checkAnswer(input) {
    if (this.state.currentFlag.name != input.trim().toLowerCase()) {
      console.log('wrong name');
      return false;
    }

    //If the input si correct then continue

    //Generate new available flags
    let availableFlags = this.state.availableFlags.slice();
    availableFlags.splice(availableFlags.indexOf(this.state.currentFlag), 1);

    //Randomly pick one
    let currentFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];

    this.setState(Object.assign({}, this.state, {
      availableFlags: availableFlags,
      currentFlag: currentFlag,
      correctAnswers: this.state.correctAnswers + 1
    }));

    console.log(this.state);

    console.log('correct!');

    return true;
  }

  changeView(view) {
    this.setState(Object.assign({}, this.state, { view: view }));
  }

  renderView() {
    if (this.state.view === this.views.quiz) {
      return <Quiz flag={this.state.currentFlag} changeCurrentFlag={this.changeCurrentFlag} checkAnswer={this.checkAnswer}/>
    } else if (this.state.view === this.views.result) {
      return <Result />
    } else {
      return <Menu changeView={this.changeView} views={this.views} />
    }
  }

  render() {
    return (
      <div className="app">
        {this.renderView()}
      </div>
    )
  }
}
