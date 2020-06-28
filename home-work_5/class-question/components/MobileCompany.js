import React from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fio: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
    };

    // shouldComponentUpdate = (newProps, newState) => {
    //     return !(deepEqual(newProps, this.props) && deepEqual(newState, this.state));
    // };

    shouldComponentUpdate = (newProps, newState) => {
        if(newState.name != this.state.name) {
            console.log(this.state.name);
            console.log(newState.name);
            console.log(3);
            return true;
        }
        if(newState.clients.length != this.state.clients.length) {
            return true;
        }
        let clientsChanged = false;
        newState.clients.forEach( (newClient, i) => {
            let oldClient = this.state.clients[i];
            console.log(oldClient.balance);
            console.log(newClient.balance);
            if (oldClient.fio != newClient.fio) {
                clientsChanged = true;
            }
            // if(oldClient.balance != newClient.balance) {
            //     console.log(1);
            //     clientsChanged = true;
            // }
            let oldActive = oldClient.balance >= 0;
            let newActive = newClient.balance >= 0;
            if(oldActive != newActive) {
                clientChanged = true;
            }
        });
        if(clientsChanged) {
            console.log(2);
            return true;
        }
        return false; 
    }

    setName1 = () => {
        this.setState({name: 'MTC'});
    };

    setName2 = () => {
        this.setState({name: 'Velcome'});
    };

    setBalance = (clientId, newBalance) => {
        let newClients = [...this.state.clients];// копия массива клиентов
        newClients.forEach( (c, i) => {
            if (c.id == clientId) {
                // c.balance = newBalance;
                let newClient = {...c};//копия хэша изменившегося клиента
                newClient.balance = newBalance;
                newClients[i] = newClient
            }
        });
        this.setState({clients: newClients});
    };

    setBalance1 = () => {
        this.setBalance(105, 230);
    };

    setBalance2 = () => {
        this.setBalance(105, 250);
    };

    updateBalance = (clientId, delta) => {
        let newClients = this.state.clients;
        newClients.map( c => {
            if(c.id == clientId) {
                c.balance += delta;
            }
        });
        console.log(newClients);
        this.setState({clients: newClients});
    };

    updateBalance1 = () => {
        this.updateBalance(110, -1);
    };

    updateBalance2 = () => {
        this.updateBalance(110, 1);
    };

    render() {

        console.log("MobileCompany render");

        // let clientsCode = this.state.clients.map( c => 
        //     <MobileClient key={c.id} id={c.id} fio={c.fio} balance={c.balance}/>
        // );

        let clientsCode = this.state.clients.map( client => 
            <MobileClient key={client.id} info={client}/>
        );

        return (
            <div className='MobileCompany'>
                <input type="button" value="=MTC" onClick={this.setName1} />
                <input type="button" value="=Velcome" onClick={this.setName2} />
                <div className='MobileCompanyName'>
                    Компания &laquo;{this.state.name}&raquo;
                </div>
                <div className='MobileCompanyClients'>
                    {clientsCode}
                </div>
                <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
                <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
                <input type="button" value="Петров--" onClick={this.updateBalance1} />
                <input type="button" value="Петров++" onClick={this.updateBalance2} />
            </div>
        );
    }
}

export default MobileCompany;