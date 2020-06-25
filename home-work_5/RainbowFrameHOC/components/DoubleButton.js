import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired,
    };

    newButtonRef_1 = null;
    newButtonRef_2 = null;

    setNewButtonRef_1 = (ref) => {
       this.newButtonRef_1 = ref;
    }

    setNewButtonRef_2 = (ref) => {
        this.newButtonRef_2 = ref;
     }

    showButtonText_1 = () => {

        let buttonInnerText = this.newButtonRef_1.innerText; 
        this.props.cbPressed(buttonInnerText);
    }

    showButtonText_2 = () => {

        let buttonInnerText = this.newButtonRef_2.innerText; 
        this.props.cbPressed(buttonInnerText);
    }

    render() {
        return (
            <div className='DoubleButton'>
                <button type="button" className="Button" onClick={this.showButtonText_1} ref={this.setNewButtonRef_1}>
                    {this.props.caption1}
                </button>
                {this.props.children}
                <button type="button" className="Button" onClick={this.showButtonText_2} ref={this.setNewButtonRef_2}>
                    {this.props.caption2}
                </button>
            </div>
        );
    };
}

export default DoubleButton;