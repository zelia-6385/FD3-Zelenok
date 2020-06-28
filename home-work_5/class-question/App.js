"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName = 'Velcome';

let clientArr = [
    {id:101, fio:"Иванов И.И.", balance:200},
    {id:105, fio:"Сидоров С.С.", balance:250},
    {id:110, fio:"Петров П.П.", balance:2},
    {id:120, fio:"Григорьев Г.Г.", balance:220},
];

ReactDOM.render (
    <MobileCompany
        name={companyName}
        clients={clientArr}
    />
    , document.getElementById('container')
);