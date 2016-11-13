import React, { Component } from 'react';

const Flag = (props) => (
  <div className="flag">
    <img src={props.flag.src || ''} />
  </div>
)

export default Flag;
