import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';

class RainbowFrameWrapper extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    showBorder = (iteration) => {

        if(iteration >= 0) {

            return (
                <RainbowFrame color={this.props.colors[iteration]} key={iteration}>
                    {this.showBorder(iteration - 1)}
                </RainbowFrame> 
            );
        }

        return 'Hello'
 
    }

    render() {

        // function showBorder(iteration) {

        //     return (
        //         <RainbowFrame color={this.props.colors[0]}>
        //             {"Hello!"}
        //         </RainbowFrame> 
        //     );
        // }

        return (
            <div>
                {/* <RainbowFrame color={this.props.colors[3]} key={3}>
                    <RainbowFrame color={this.props.colors[2]} key={2}>
                        <RainbowFrame color={this.props.colors[1]} key={1}>
                            <RainbowFrame color={this.props.colors[0]} key={0}>
                                {"Hello!"}
                            </RainbowFrame>
                        </RainbowFrame>
                    </RainbowFrame>
                </RainbowFrame> */}

                {/* {showBorder.bind(this)} */}

                {this.showBorder(this.props.colors.length - 1)}
            </div>
        );
    }
}

export default RainbowFrameWrapper