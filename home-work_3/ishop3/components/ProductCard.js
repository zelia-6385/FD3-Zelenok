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
        cbCheckValid: PropTypes.func,
        cbCheckRegularURL: PropTypes.func,
        // isURL: PropTypes.bool,

        contentName: PropTypes.string.isRequired,
        contentPrice: PropTypes.number.isRequired,
        contentURL: PropTypes.string.isRequired,
        contentQuantity: PropTypes.number.isRequired,
    }

    changeInput = (EO) => {
        this.props.cbPutInputValue(EO.target.value, EO.target.id);
    };

    checkIsValidCard = () => {
        return this.props.cbCheckValid();
    };

    checkIsValidURL = () => {
        return this.props.cbCheckRegularURL();
    };

    pushEditCard = () => {
        this.props.cbEditProduct(this.props.code);
    };

    pushNewCard = (EO) => {
        EO.preventDefault();
        this.props.cbCreateProduct();
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

            result = <div className="product-card">
                        <div className="product-card__title">
                            {this.props.mode == 2 ? 'Edit existing Product' + "\u00a0" + this.props.code : 'Add new Product' + "\u00a0" + this.props.code}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-name">
                                {'Name'}  
                            </label>
                            <input className="product-card__input"
                                id="product-name"
                                type="text"
                                value={this.props.contentName}
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.contentName && validField}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-price">
                                {'Price'}  
                            </label>
                            <input className="product-card__input"
                                id="product-price"
                                type="number"
                                value={this.props.contentPrice}
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.contentPrice && validField}
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-url">
                                {'URL'}  
                            </label>
                            <input className="product-card__input"
                                id="product-url"
                                type="url"
                                pattern="/^((http|https|ftp):\/\/)(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)\//i"
                                placeholder="https://yandex.ru/"
                                value={this.props.contentURL}
                                onChange={this.changeInput}/>
                            <div className="product-card__validation_url">
                                {/* Сообщение о валидации */}
                                {!this.props.contentURL && validField}
                                {!this.checkIsValidURL() && ' ' + 'CORRECTLY ONLY!'}
                            </div>
                        </div>
                        <div className="product-card__row">
                            <label htmlFor="product-quantity">
                                {'Quantity'}  
                            </label>
                            <input className="product-card__input"
                                id="product-quantity"
                                type="number"
                                value={this.props.contentQuantity}
                                onChange={this.changeInput}/>
                            {/* Сообщение о валидации */}
                            {!this.props.contentQuantity && validField}
                        </div>
                        <div className="product-card__controls">
                            {this.props.mode == 2 ?
                                <button className={ !this.checkIsValidCard() ?
                                    'product-card__button-disabled' : 
                                    undefined }
                                    type="button"
                                    onClick={this.pushEditCard}>
                                    {'Сохранить'}
                                </button> :
                                <button className={ !this.checkIsValidCard() ?
                                    'product-card__button-disabled' : 
                                    undefined }
                                    type="button"
                                    onClick={this.pushNewCard}>
                                    {'Добавить'}
                                </button>
                            }
 
                            <button type="button"
                                onClick={this.removeCard}>
                                {'Отмена'}
                            </button>
                        </div>
                    </div>
        }

        return ( result );
    }
}

export default ProductCard; 