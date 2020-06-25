"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import ButtonsBlock from './components/ButtonsBlock';

let colors = ["red", "blue", "yellow", "green"];

ReactDOM.render (
    React.createElement(ButtonsBlock, {colors}),
    document.getElementById('container')
);