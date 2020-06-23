import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css'

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    
    showBorder = (iteration) => {

        if(iteration >= 0) {

            return (
                <div className="RainbowFrame" style={{border:"5px solid "+this.props.colors[iteration]}} key={iteration}>
                    {this.showBorder(iteration-1)}
                </div> 
            );
        }

        return this.props.children;
 
    }

    componentDidMount() {
        console.log(this.props.children);
    }

    render() {
        return this.showBorder(this.props.colors.length);
    }
}

export default RainbowFrame