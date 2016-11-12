import React, { Component } from 'react';

import Button from '../components/Button.js';

class Menu extends Component {
  render() {
    return (
      <div className="menu view">
        <p>Menu view</p>
        <Button value="Start quiz" onClick={() => this.props.changeView(this.props.views.quiz)} />
      </div>
    )
  }
}

export default Menu;
