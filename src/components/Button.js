import React, { Component } from 'react';

let Button = (props) => (
  <button className="button" onClick={props.onClick ? props.onClick : ''}>
    {props.value}
  </button>
)

export default Button;
