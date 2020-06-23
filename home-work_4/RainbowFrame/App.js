"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameWrapper from './components/RainbowFrameWrapper';

let text = "первый<br>второй<br/>третий<br />последний";

let colors = ["red", "blue", "yellow", "green"];

ReactDOM.render (
    React.createElement(RainbowFrameWrapper, {colors}),
    document.getElementById('container')
);