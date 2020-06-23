import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';

class RainbowFrameWrapper extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {

        return (
            <div>

                <RainbowFrame colors={this.props.colors}>
                    Hello!
                </RainbowFrame>
            </div>
        );
    }
}

export default RainbowFrameWrapper