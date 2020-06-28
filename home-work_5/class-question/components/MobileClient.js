import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';

class MobileClient extends React.Component {

    static propTypes = {
        // id: PropTypes.number.isRequired,
        // fio: PropTypes.string.isRequired,
        // balance: PropTypes.number.isRequired,
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    state = {
        balance: this.props.info.balance,
    };

    componentWillReceiveProps = (newProps) => {
        console.log("MobileClient id = "+this.props.info.id+" componentWillReceiveProps");
        this.setState({balance: newProps.info.balance});
    };

    shouldComponentUpdate = (newProps, newState) => {
        // return (newProps.fio != this.props.fio || newState.balance != this.state.balance);
        let oldActive = this.state.balance >= 0;
        let newActive = newState.balance >= 0;
        return (newProps.fio != this.props.fio) || (oldActive != newActive); 
    }

    render() {
        console.log("MobileClient id = "+this.props.info.id+" render");

        return (
            <div className='MobileClient'>
                <span className='MobileClientFIO'>{this.props.info.fio}</span>
                <span className='MobileClientBalance'>{this.state.balance}</span>
            </div>
        );
    }
}

export default MobileClient;