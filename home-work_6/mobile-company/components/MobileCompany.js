import React from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';

import MobileClient from './MobileClient';
import MobileClientCard from './MobileClientCard';
import {clientEvents} from './events';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                info: PropTypes.shape({
                    fam: PropTypes.string.isRequired,
                    im: PropTypes.string.isRequired,
                    otch: PropTypes.string.isRequired,
                    balance: PropTypes.number.isRequired, 
                }),
            })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        clientsCopy: [],

        client: {},
        mode: null,
        lastId: null,

    };

    componentDidMount = () => {
        clientEvents.addListener('EDeleteClicked', this.deleteClient);
        clientEvents.addListener('EEditeClicked', this.showEditCard);
        clientEvents.addListener('ESaveClicked', this.editClient);
        clientEvents.addListener('ECancelClicked', this.hideCard);
        clientEvents.addListener('EAddClicked', this.createNewClient);
    };

    componentWillUnmount = () => {
        clientEvents.removeListener('EDeleteClicked', this.deleteClient);
        clientEvents.removeListener('EEditeClicked', this.showEditCard);
        clientEvents.removeListener('ESaveClicked', this.editClient);
        clientEvents.removeListener('ECancelClicked', this.hideCard);
        clientEvents.removeListener('EAddClicked', this.createNewClient);
    }

    createNewClient = (inputSurnameRefVal, inputNameRefVal, inputSecondNameRefVal, inputBalanceRefVal) => {

        let newClients = [...this.state.clients];
        
        let client = {};
        client.info = {};
        
        client.id = (this.state.lastId + 1);
        client.info.fam = inputSurnameRefVal;
        client.info.im = inputNameRefVal;
        client.info.otch = inputSecondNameRefVal;
        client.info.balance = inputBalanceRefVal;

        newClients.push(client);

        this.setState({
            clients: newClients,
            lastId: client.id,
        });
    }

    showNewCard = () => {
        let clientsArr = this.state.clients;
        let maxId = clientsArr[0].id;

        clientsArr.forEach( (el) => {
            if (el.id > maxId) maxId = el.id;
        });

        if(this.state.mode != 2) {
            this.setState({
                mode: 2,
                lastId: maxId,
                client: {},
            });
        }
    };

    editClient = (inputSurnameRefVal, inputNameRefVal, inputSecondNameRefVal, inputBalanceRefVal, id) => {

        let newClients = [...this.state.clients];
        newClients = newClients.forEach( (client, index) => {

            if(client.id === id) {

                let newClient = {...client};
                let newClientInfo = {...client.info};
                newClientInfo.fam = inputSurnameRefVal;
                newClientInfo.im = inputNameRefVal;
                newClientInfo.otch = inputSecondNameRefVal;
                newClientInfo.balance = inputBalanceRefVal;
                newClient.info = newClientInfo;
                newClients[index] = newClient;
            }

            this.setState({clients: newClients});

        })
    };
    
    hideCard = () => {
        this.setState({
            mode: null,
            client: {},
        });
    };

    showEditCard = (id) => {
        console.log("showEditCard сработала");
        let newClients = [...this.state.clients];
        let lookClient = newClients.filter( client => {
            return client.id === id;
        });

        lookClient = [...lookClient][0];

        if(this.state.mode != 1) {

            this.setState({
                clients: newClients,
                mode: 1,
                client: lookClient,
            });

        } else {

            this.setState({
                clients: newClients,
                client: lookClient,
            });
            
        }
    };

    deleteClient = (id) => {

        let newClients = [...this.state.clients];
        newClients.forEach((client, index) => {
            if (client.id === id) {
                newClients.splice(index, 1);
            }
        } );

        let maxId;

        if (newClients.length) {
            
            maxId = newClients[0].id;

        } else {

            maxId = 100;

        }

        newClients.forEach( (el) => {
            if (el.id > maxId) maxId = el.id;
        });

        this.setState({
            clients: newClients,
            lastId: maxId,
        });
    };

    setName_1 = () => {
        this.setState({name: 'Velcome'});
    };

    setName_2 = () => {
        this.setState({name: 'MTC'});
    };

    showActive = () => {
        let newClients; 
        let activeClients;

        if (!this.state.clientsCopy.length) {
            newClients = [...this.state.clients];
        } else {
            newClients = [...this.state.clientsCopy];
        }

        activeClients = newClients.filter(client => {
            return client.info.balance > 0;
        });

        this.setState({
            clients: activeClients,
            clientsCopy: newClients,
        });
    }

    showAll = () => {
        this.setState({
            clients: this.state.clientsCopy,
            clientsCopy: [],
        })
    }

    showNotActive = () => {
        let newClients; 
        let activeClients;
        
        if (!this.state.clientsCopy.length) {
            newClients = [...this.state.clients];
        } else {
            newClients = [...this.state.clientsCopy];
        }

        activeClients = newClients.filter(client => {
            return client.info.balance <= 0;
        });

        this.setState({
            clients: activeClients,
            clientsCopy: newClients,
        });
    }

    render() {
        console.log("MobileCompany render");

        let clientsCode = this.state.clients.map( client => {
            return <MobileClient key={client.id} id={client.id} info={client.info}/>
        });

        return (
            <div className="MobileCompany">
                <input type="button" value="Velcome" onClick={this.setName_1} />
                <input type="button" value="MTC" onClick={this.setName_2} />
                <div>
                    Компания: {this.state.name}
                </div>
                <input type="button" value="Все" onClick={this.showAll}/>
                <input type="button" value="Активные" onClick={this.showActive}/>
                <input type="button" value="Заблокированные" onClick={this.showNotActive}/>
                <table className="MobileCompany__table">
                    <tbody>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                        {clientsCode}
                    </tbody>
                </table>
                <input
                    type="button"
                    value="Добавить клиента"
                    onClick={this.showNewCard}
                />
                {
                    (this.state.mode == 1) &&
                    <MobileClientCard 
                        mode={this.state.mode}
                        client={this.state.client}
                        key={this.state.client.id}
                    />
                }
                {
                    (this.state.mode == 2) &&
                    <MobileClientCard 
                        mode={this.state.mode}
                        lastId={this.state.lastId}
                        key={this.state.lastId + 1}
                    />
                }
            </div>
        );
    }
}

export default MobileCompany;