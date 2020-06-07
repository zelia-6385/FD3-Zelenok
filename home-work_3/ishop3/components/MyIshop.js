import React from 'react';
import PropTypes from 'prop-types';

import './MyIshop.css';

import Product from './Product';
import ProductCard from './ProductCard';

class MyIshop extends React.Component {

    static propTypes = {
        shopName: PropTypes.string.isRequired,
        productInfo: PropTypes.array.isRequired,
    };

    state = {
        productInfo: this.props.productInfo,
        code: null,
        mode: 2,
        contentName: '',
        contentPrice: null,
        contentURL: '',
        contentQuantity: null,

        comparedName: '',
        comparedPrice: null,
        comparedURL: '',
        comparedQuantity: null,

        isEditCard: false,
        isNewCard: false,
        isURL: false,
    };

    changeIsChoose = (code) => {

        if(!this.compareFields()) {
            return
        } else {
            
            if(this.state.mode != 1) {

                this.setState({
                    code: code,
                    mode: 1,
                    isEditCard: false,
                    isNewCard: false,
                });

            } else {

                this.setState({
                    code: code,
                    isEditCard: false,
                    isNewCard: false,
                });
            }
        }

    };

    showCode = () => {
        console.log(this.state.code);
    };

    changeIsExist = (code) => {

        let confirmation = confirm("Вы действительно хотите удалить строку?")

        if (confirmation) {
            
            this.setState({
                productInfo: this.state.productInfo.filter(elem => elem.code !== code),
                code: null,
            });
            
        } else {
            return
        }

    };

    showEditCard = (code, productName, cost, picture, balance) => {

        if(this.state.mode != 2) {
            this.setState({
                mode: 2,
                code: code,
                contentName: productName,
                contentPrice: +cost,
                contentURL: picture,
                contentQuantity: +balance,
                isEditCard: !this.state.isEditCard,
            }, this.saveFields);
        } else {
            this.setState({
                code: code,
                contentName: productName,
                contentPrice: +cost,
                contentURL: picture,
                contentQuantity: +balance,
                isEditCard: !this.state.isEditCard,
            }, this.saveFields);
        }
    };

    showNewCard = () => {

        console.log(this.state.productInfo);
        console.log(this.state.productInfo.length);

        if (this.state.isEditCard || this.state.isNewCard) {
            return
        } else {
            if(this.state.mode != 3) {
                this.setState ({
                    mode: 3,
                    code: this.state.productInfo.length + 1,
                    contentName: '',
                    contentPrice: null,
                    contentURL: '',
                    contentQuantity: null,
                    isEditCard: false,
                    isNewCard: !this.state.isNewCard,
                    isURL: false,
                });
            } else {
                this.setState ({
                    code: this.state.productInfo.length + 1,
                    contentName: '',
                    contentPrice: null,
                    contentURL: '',
                    contentQuantity: null,
                    isEditCard: false,
                    isNewCard: !this.state.isNewCard,
                    isURL: false,
                });
            }
        }
    }

    putInputValue = (inputVal, inputId) => {

        if (inputId === "product-name") {
            this.setState({
                contentName: inputVal,
            });
        }

        if (inputId === "product-price") {
            this.setState({
                contentPrice: inputVal,
            });
        }

        if (inputId === "product-url") {
            this.setState({
                contentURL: inputVal,
            });
        }

        if (inputId === "product-quantity") {
            this.setState({
                contentQuantity: inputVal,
            });
        }

    };

    editProduct = (code) => {
        let product = this.state.productInfo.find((elem) => elem.code === code);

        product.code = code;
        product.productName = this.state.contentName;
        product.cost = +this.state.contentPrice;
        product.picture = this.state.contentURL;
        product.balance = +this.state.contentQuantity;

        this.setState({
            productInfo: this.state.productInfo,
            code: null,
            contentName: '',
            contentPrice: null,
            contentURL: '',
            contentQuantity: null,
            isEditCard: !this.state.isEditCard,
        }, this.saveFields);
    };

    createProduct = () => {

        if (this.checkRegularURL()) {
            
            let product = {};

            product.code = this.state.productInfo[this.state.productInfo.length - 1].code + 1;
            product.productName = this.state.contentName;
            product.cost = +this.state.contentPrice;
            product.picture = this.state.contentURL;
            product.balance = +this.state.contentQuantity;

            this.state.productInfo.push(product);

            this.setState({
                productInfo: this.state.productInfo,
                code: null,
                contentName: '',
                contentPrice: null,
                contentURL: '',
                contentQuantity: null,
                isNewCard: !this.state.isNewCard,
                isURL: true,
            }, this.saveFields);
        }
    };

    resetCodeValue = () => {
        this.setState({
            code: null,
            contentName: '',
            contentPrice: null,
            contentURL: '',
            contentQuantity: null,
            isEditCard: false,
            isNewCard: false,
        }, this.saveFields);
    };

    checkValid = () => {
        let checkResult;

        if (this.state.contentName && this.state.contentPrice && this.state.contentURL && this.state.contentQuantity) {
            checkResult = true;
        } else {
            checkResult = false;
        }

        return checkResult;
    };

    checkRegularURL = () => {
        let regexp = /^((http|https|ftp):\/\/)(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)\//i;

        let val = this.state.contentURL;

        console.log(val);
        console.log(regexp.test(val));

        return regexp.test(val);
    } 

    saveFields = () => {
        this.setState({
            comparedName: this.state.contentName,
            comparedPrice: this.state.contentPrice,
            comparedURL: this.state.contentURL,
            comparedQuantity: this.state.contentQuantity,
        })
    };

    compareFields = () => {
        if (this.state.contentName === this.state.comparedName && this.state.contentPrice === this.state.comparedPrice && this.state.contentURL === this.state.comparedURL && this.state.contentQuantity === this.state.comparedQuantity) {
            return true;
        } else {
            return false;
        }
    }

    render() {

        let productInfoCode = this.state.productInfo.slice().map( elem =>
            < Product key={elem.code}
                className={this.state.code === elem.code ? 'product-row product-row__colored' : 'product-row'}
                productName={elem.productName}
                code={elem.code}
                cost={elem.cost}
                picture={elem.picture}
                balance={elem.balance}
                isEditCard={this.state.isEditCard}
                isNewCard={this.state.isNewCard}
                cbChangeIsChoose={this.changeIsChoose}
                cbChangeIsExist={this.changeIsExist}
                cbShowEditCard={this.showEditCard}
                cbCheckValid={this.checkValid}
                cbCompareFields={this.compareFields}
            /> 
        );

        return (
            <div className="my-ishop">
                <div className="my-ishop__name">{this.props.shopName}</div>
                <table className="my-ishop__product-info-table">
                    <tbody className="my-ishop__product-info-tbody">
                        <tr className="my-ishop__header">
                            <th>{"Name"}</th>
                            <th>{"Price"}</th>
                            <th>{"Photo"}</th>
                            <th>{"Quantity"}</th>
                            <th colSpan={2}>{"Controls"}</th>
                        </tr>
                        {productInfoCode}
                    </tbody>
                </table>
                <button className="my-ishop__new-product"
                    type="button"
                    onClick={this.showNewCard}>
                    NewProduct
                </button>
                {this.state.code && (this.state.mode === 1 || this.state.mode === 2) && < ProductCard
                    code={this.state.productInfo.find( (elem) => {
                        return (elem.code === this.state.code)
                    }).code}
                    productName={this.state.productInfo.find( (elem) => {
                        return (elem.code === this.state.code)
                    }).productName}
                    cost={this.state.productInfo.find( (elem) => {
                        return (elem.code === this.state.code)
                    }).cost}
                    picture={this.state.productInfo.find( (elem) => {
                        return (elem.code === this.state.code)
                    }).picture}
                    balance={this.state.productInfo.find( (elem) => {
                        return (elem.code === this.state.code)
                    }).balance}
                    mode={this.state.mode}
                    cbPutInputValue={this.putInputValue}
                    cbResetCodeValue={this.resetCodeValue}
                    cbEditProduct={this.editProduct}
                    cbCheckValid={this.checkValid}
                    isURL={this.state.isURL}

                    contentName={this.state.contentName}
                    contentPrice={+this.state.contentPrice}
                    contentURL={this.state.contentURL}
                    contentQuantity={+this.state.contentQuantity}
                 />}
                 {this.state.code && this.state.mode === 3 && < ProductCard
                    code={this.state.code}
                    mode={this.state.mode}
                    cbPutInputValue={this.putInputValue}
                    cbResetCodeValue={this.resetCodeValue}
                    cbCreateProduct={this.createProduct}
                    cbCheckValid={this.checkValid}
                    isURL={this.state.isURL}

                    contentName={this.state.contentName}
                    contentPrice={+this.state.contentPrice}
                    contentURL={this.state.contentURL}
                    contentQuantity={+this.state.contentQuantity}
                 />} 
            </div>
        );
    }
}

export default MyIshop;
