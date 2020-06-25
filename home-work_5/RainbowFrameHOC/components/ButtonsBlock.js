import React from 'react';
import PropTypes from 'prop-types';

import DoubleButton from './DoubleButton';
import {withRainbowFrame} from './withRainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton); 

class ButtonsBlock extends React.Component {

    render() {
        return (
            <div>
                <DoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)}>
                {"в студеную зимнюю пору"} 
                </DoubleButton>
                <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>
                    {"вышел, был сильный"}
                </FramedDoubleButton>
            </div>
        );
    };
}

export default ButtonsBlock;