import React, { Component } from 'react';

//Flags JSON
import * as flagsJSON from '../assets/flags.json';
let flags = [];
for (let key in Object.keys(flagsJSON)) {
  flags.push(flagsJSON[key]);
}
flags.splice(flags.length - 1, 1);

//Views
import Menu from './views/Menu.js';
import Quiz from './views/Quiz.js';
import Win from './views/Win.js';
import Result from './views/Result.js';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.flags = flags;

    this.views = {
      'menu': 0,
      'quiz': 1,
      'win': 2,
      'result': 3
    }

    this.state = {
      view: this.views.menu,
      score: 0,
      currentFlag: {}
    }

    this.changeView = this.changeView.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateScoreAndFlag = this.updateScoreAndFlag.bind(this);
  }

  clearAll() {
    this.setState(Object.assign({}, this.state, { score: 0, currentFlag: {} }));
  }

  updateScoreAndFlag(score, currentFlag) {
    this.setState(Object.assign({}, this.state, { score: score, currentFlag: currentFlag }));
  }

  updateScore(score) {
    this.setState(Object.assign({}, this.state, { score: score }));
  }

  changeView(view) {
    this.setState(Object.assign({}, this.state, { view: view }));
  }

  renderView() {
    if (this.state.view === this.views.quiz) {
      return <Quiz flags={this.flags} score={this.state.score} updateScoreAndFlag={this.updateScoreAndFlag} clearAll={this.clearAll} changeView={this.changeView} views={this.views} />
    } else if (this.state.view === this.views.win) {
      return <Win flags={this.flags} clearAll={this.clearAll} changeView={this.changeView} views={this.views} />
    } else if (this.state.view === this.views.result) {
      return <Result score={this.state.score} flag={this.state.currentFlag} clearAll={this.clearAll} changeView={this.changeView} views={this.views} />
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
