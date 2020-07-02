import React from 'react';
import PropTypes from 'prop-types';
import { clientEvents } from './events';

class MobileClientCard extends React.PureComponent {

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number,
            info: PropTypes.shape({
                fam: PropTypes.string.isRequired,
                im: PropTypes.string,
                otch: PropTypes.string,
                balance: PropTypes.number,
            }),
        }),
        mode: PropTypes.number.isRequired,
        lastId: PropTypes.number,
    };

    inputSurnameRef = null;
    inputNameRef = null;
    inputSecondNameRef = null;
    inputBalanceRef = null;

    componentDidUpdate = (prevProps) => {
        // console.log("MobileClient id = "+prevProps.client.id+" componentDidUpdate");
        // console.log("MobileClient id = "+this.props.client.id+" componentDidUpdate");
        // console.log(this.props.client.info.fam);

        // this.inputSurnameRef.value = this.inputSurnameRef.defaultValue;
        // this.inputNameRef.value = this.inputNameRef.defaultValue;
        // this.inputSecondNameRef.value = this.inputSecondNameRef.defaultValue;
        // this.inputBalanceRef.value = this.inputBalanceRef.defaultValue;

        // console.log(this.inputSurnameRef.defaultValue);
        // console.log(this.inputSurnameRef.value);
        // console.log(prevProps.client.info.fam);
        // console.log(this.inputSurnameRef);
    };

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps()");
    // }

    // componentDidMount = () => {
    //     console.log("componentDidMount");
    //     console.log(this.inputSurnameRef.defaultValue);
    //     clientEvents.addListener('EEditeClicked', this.putInputValue);
    // }

    // changeInput = (EO) => {
    //     this.inputSurnameRef = EO.target.value;
    //    console.log(EO.target.value); 
    // };

    // putInputValue = (EO) => {
    //     // this.inputSurnameRef = EO.target;
    //     console.log("Прослушивание клика по 'редактировать' ");
    //     // console.log(EO.target);
    //     // console.log(this.inputSurnameRef);
    //     if(this.inputSurnameRef) {
    //         this.inputSurnameRef.defaultValue = EO.target.value;
    //     }
    // }

    setInputSurnameRef = (ref) => {
        this.inputSurnameRef = ref;
        // console.log(this.inputSurnameRef);
        // console.log(this.inputSurnameRef.value);
    };

    setInputNameRef = (ref) => {
        this.inputNameRef = ref;
    };

    setInputSecondNameRef = (ref) => {
        this.inputSecondNameRef = ref;
    };

    setInputBalanceRef = (ref) => {
        this.inputBalanceRef = ref;
    }

    addClicked = () => {
        clientEvents.emit('EAddClicked', this.inputSurnameRef.value, this.inputNameRef.value,  this.inputSecondNameRef.value, +this.inputBalanceRef.value);
    }

    saveClicked = () => {
        clientEvents.emit('ESaveClicked', this.inputSurnameRef.value, this.inputNameRef.value,  this.inputSecondNameRef.value, +this.inputBalanceRef.value, this.props.client.id);
    };

    cancelClicked = () => {
        clientEvents.emit('ECancelClicked');
    };

    render() {

        console.log("MobileClientCard render");

        let result;

        if (this.props.mode == 1) {

            result = <div className="MobileClientCard">
                        <div className="MobileClientCard__title">
                            {'Edit existing Client' + "\u00a0" + this.props.client.id}
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-surname">
                                {"Surname: "}
                            </label>
                            <input
                                id="client-surname"
                                type="text"
                                defaultValue={this.props.client.info.fam}
                                ref={this.setInputSurnameRef}
                                // onChange={this.changeInput}
                            />
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-name">
                                {"Name: "}
                            </label>
                            <input
                                id="client-name"
                                type="text"
                                defaultValue={this.props.client.info.im}
                                ref={this.setInputNameRef}
                            />
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-second-name">
                                {"Second Name: "}
                            </label>
                            <input
                                id="client-second-name"
                                type="text"
                                defaultValue={this.props.client.info.otch}
                                ref={this.setInputSecondNameRef} 
                            />
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-balance">
                                {"Balance: "}
                            </label>
                            <input
                                id="client-balance"
                                type="text"
                                defaultValue={this.props.client.info.balance}
                                ref={this.setInputBalanceRef}
                            />
                        </div>
                        <div className="MobileClientCard__controls">
                            <button
                                type="button"
                                onClick={this.saveClicked}
                            >
                                {"Сохранить"}
                            </button>
                            <button
                                type="button"
                                onClick={this.cancelClicked}
                            >
                                {"Отмена"}
                            </button>
                        </div>
                    </div>
        }

        if (this.props.mode == 2) {

            result = <div className="MobileClientCard">
                        <div className="MobileClientCard__title">
                            {'Add new Client' + "\u00a0" + (this.props.lastId + 1)}
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-surname">
                                {"Surname: "}
                            </label>
                            <input
                                id="client-surname"
                                type="text"
                                ref={this.setInputSurnameRef}
                            />
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-name">
                                {"Name: "}
                            </label>
                            <input
                                id="client-name"
                                type="text"
                                ref={this.setInputNameRef} 
                            />
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-second-name">
                                {"Second Name: "}
                            </label>
                            <input
                                id="client-second-name"
                                type="text"
                                ref={this.setInputSecondNameRef} 
                            />
                        </div>
                        <div className="MobileClientCard__row">
                            <label htmlFor="client-balance">
                                {"Balance: "}
                            </label>
                            <input
                                id="client-balance"
                                type="text"
                                ref={this.setInputBalanceRef} 
                            />
                        </div>
                        <div className="MobileClientCard__controls">
                            <button
                                type="button"
                                onClick={this.addClicked}
                            >
                                {"Добавить"}
                            </button>
                            <button
                                type="button"
                                onClick={this.cancelClicked}
                            >
                                {"Отмена"}
                            </button>
                        </div>
                    </div>
        }

        return result;
    }
}

export default MobileClientCard;