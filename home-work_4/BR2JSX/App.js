"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';

let text = "первый<br>второй<br/>третий<br />последний";

ReactDOM.render (
    React.createElement(BR2JSX, {text}),
    document.getElementById('container')
);
