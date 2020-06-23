import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css'

class RainbowFrame extends React.Component {

    static propTypes = {
        color: PropTypes.string.isRequired,
    };

    componentDidMount() {
        console.log(this.props.children);
    }

    render() {
        return (
            <div className="RainbowFrame" style={{border:"5px solid "+this.props.color}}>
                {this.props.children}
            </div>
        );
    }
}

export default RainbowFrame