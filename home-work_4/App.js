"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';
import RainbowFrameWrapper from './components/RainbowFrameWrapper';

let text = "первый<br>второй<br/>третий<br />последний";

let colors = ["red", "blue", "yellow", "green"];

ReactDOM.render (
    React.createElement(BR2JSX, {text}),
    document.getElementById('container_1')
);

ReactDOM.render (
    React.createElement(RainbowFrameWrapper, {colors}),
    document.getElementById('container_2')
);