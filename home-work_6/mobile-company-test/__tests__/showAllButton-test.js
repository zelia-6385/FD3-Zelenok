"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа showAllButton', () => {

    const component = renderer.create(
        <MobileCompany />
    );

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const showAllButton = component.root.find( el => {
        if(el.props.value === 'Все') {
            console.log(el.props);
        }
        
        return el.props.value === 'Все';
    });
    
    showAllButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

});