"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа editClientButton', () => {

    let clientArr = [
        {id:101, info: {fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}},
        {id:102, info: {fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:230}},
        {id:103, info: {fam:"Петров", im:"Петр", otch:"Петрович", balance:180}},
        {id:104, info: {fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-280}},
    ];

    const component = renderer.create(
        <MobileCompany
        clients={clientArr}/>
    );

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const editClientButtons = component.root.findAll( el => el.props.value === 'Редактировать');

    // editClientButtons.forEach( elem => {
    //     elem.props.onClick();

    //     componentTree = component.toJSON();
    //     expect(componentTree).toMatchSnapshot();

    // });

    editClientButtons[0].props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
});