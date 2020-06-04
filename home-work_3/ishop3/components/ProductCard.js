import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {

    static propTypes = {
        mode: PropTypes.number.isRequired,
        productName: PropTypes.string,
        code: PropTypes.number.isRequired,
        cost: PropTypes.number,
        picture: PropTypes.string,
        balance: PropTypes.number,
        cbPutInputValue: PropTypes.func.isRequired,
        cbResetCodeValue: PropTypes.func.isRequired,
        cbEditProduct: PropTypes.func,
        cbCreateProduct: PropTypes.func,
        isValidName: PropTypes.bool.isRequired,
        isValidPrice: PropTypes.bool.isRequired,
        isValidURL: PropTypes.bool.isRequired,
        isValidQuantity: PropTypes.bool.isRequired,
    }

    changeInput = (EO) => {
        this.props.cbPutInputValue(EO.target.value, EO.target.id);
    };

    checkIsValidCard = () => {
        return this.props.isValidName && this.props.isValidPrice && this.props.isValidURL && this.props.isValidQuantity
    };

    pushEditCard = () => {
        this.props.cbEditProduct(this.props.code);
    };

    onSubmit = (EO) => {
        EO.preventDefault();
        const form = EO.target;
        form.reset();
    }

    pushNewCard = () => {
        this.props.cbCreateProduct(this.props.code);
    }

    removeCard = () => {
        this.props.cbResetCodeValue()
    };

    render() {

        let result;

        if (this.props.mode == 1) {

            result = <div className="product-card">
                        <div className="product-card__title">
                            {'Product' + "\u00a0" + this.props.code}
                        </div>
                        <div className="product-card__row">
                            <span>{'Name:'}</span>
                            <span>{this.props.productName}</span>
                        </div>
                        <div className="product-card__row">
                            <span>{'Price:'}</span>
                            <span>{this.props.cost + ' ' + 'руб.'}</span>
                        </div>
                        <div className="product-card__row">
                            <span>{'URL:'}</span>
                            <span>{this.props.picture}</span>
                        </div>
                        <div className="product-card__row">
                            <span>{'Quantity:'}</span>
                            <span>{this.props.balance + ' ' + 'шт.'}</span>
                        </div>
                    </div>
        }

        if (this.props.mode == 2 || this.props.mode == 3) {

            let validField = <span className="product-card__validation">
                                {'Please, fill the field'}
                            </span>

            result = <form className="product-card"
                            onSubmit={this.onSubmit}>
                        <div className="product-card__title">
                            {this.props.mode == 2 ? 'Edit existing Product' + "\u00a0" + this.props.code : 'Add new Product' + "\u00a0" + this.props.code}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-name">
                                {'Name'}  
                            </label>
                            <input className="product-card__input"
                                id="product-name"
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.isValidName && validField}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-price">
                                {'Price'}  
                            </label>
                            <input className="product-card__input"
                                type="number"
                                id="product-price"
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.isValidPrice && validField}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-url">
                                {'URL'}  
                            </label>
                            <input className="product-card__input"
                                id="product-url"
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.isValidURL && validField}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-quantity">
                                {'Quantity'}  
                            </label>
                            <input className="product-card__input"
                                type="number"
                                id="product-quantity"
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.isValidQuantity && validField}
                        </div>
                        <div className="product-card__controls">
                            {this.props.mode == 2 ?
                                <button className={ !this.checkIsValidCard() ?
                                    'product-card__button-disabled' : 
                                    undefined }
                                    type="submit"
                                    onClick={this.pushEditCard}>
                                    {'Сохранить'}
                                </button> :
                                <button className={ !this.checkIsValidCard() ?
                                    'product-card__button-disabled' : 
                                    undefined }
                                    type="submit"
                                    onClick={this.pushNewCard}>
                                    {'Добавить'}
                                </button>
                            }
 
                            <button type="button"
                                onClick={this.removeCard}>
                                {'Отмена'}
                            </button>
                        </div>
                    </form>
        }

        return ( result );
    }
}

export default ProductCard; 