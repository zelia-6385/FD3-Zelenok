import React from 'react';
import PropTypes from 'prop-types';

import {clientEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        info: PropTypes.shape({
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    deleteClicked = () => {
        clientEvents.emit('EDeleteClicked', this.props.id);
    };

    editClicked = () => {
        clientEvents.emit('EEditeClicked', this.props.id);
    };

    render() {

        console.log("MobileClient id = "+this.props.id+" render");

        return (
            <tr>
                <td>{this.props.info.fam}</td>
                <td>{this.props.info.im}</td>
                <td>{this.props.info.otch}</td>
                <td>{this.props.info.balance}</td>
           

                <td className={(this.props.info.balance > 0) ? "MobileClient_green" : "MobileClient_red"}>
                    {
                        (this.props.info.balance > 0) ? "active" : "not active"  
                    }
                </td>
                
                <td>
                    <input
                        type="button"
                        value="Редактировать"
                        onClick={this.editClicked}
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="Удалить"
                        onClick={this.deleteClicked}
                    />
                </td>
            </tr>
        );
    }
}

export default MobileClient;