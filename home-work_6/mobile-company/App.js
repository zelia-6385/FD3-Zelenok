"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName = 'Velcome';

let clientArr = [
    {id:101, info: {fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}},
    {id:102, info: {fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:230}},
    {id:103, info: {fam:"Петров", im:"Петр", otch:"Петрович", balance:180}},
    {id:104, info: {fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-280}},
];

ReactDOM.render (
    <MobileCompany
        name={companyName}
        clients={clientArr}
    />
    , document.getElementById('container')
);