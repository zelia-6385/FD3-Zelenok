"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import MyIshop from './components/MyIshop';

import productInfoArr from './product.json';

const shopName = 'Гиппо';

ReactDOM.render (
    React.createElement(MyIshop, {
        shopName: shopName,
        productInfo: productInfoArr,
    }),
    document.getElementById('app_ishop')
);