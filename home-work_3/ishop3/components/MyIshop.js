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
    };

    changeIsChoose = (code) => {

        if(!!this.state.contentName || !!this.state.contentPrice || !!this.state.contentURL || !!this.state.contentQuantity) {
            return
        } else {
            
            if(this.state.mode != 1) {

                this.setState({
                    code: code,
                    mode: 1,
                });

            } else {

                this.setState({
                    code: code,
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

    showEditCard = (code) => {

        if(this.state.mode != 2) {
            this.setState({
                mode: 2,
                code: code,
            });
        } else {
            this.setState({
                code: code,
            });
        }
    };

    showNewCard = () => {

        if (!!this.state.contentName || !!this.state.contentPrice || !!this.state.contentURL || !!this.state.contentQuantity) {
            return
        } else {
            if(this.state.mode != 3) {
                this.setState ({
                    mode: 3,
                    code: this.state.productInfo.length + 1,
                });
            } else {
                this.setState ({
                    code: this.state.productInfo.length + 1,
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
        });
    };

    createProduct = (code) => {

        let product = {};

        product.code = code;
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
        });
    }

    resetCodeValue = () => {
        this.setState({
            code: null,
            contentName: '',
            contentPrice: null,
            contentURL: '',
            contentQuantity: null,
        });
    };

    render() {

        let productInfoCode = this.state.productInfo.slice().map( elem =>
            < Product key={elem.code}
                className={this.state.code === elem.code ? 'product-row product-row__colored' : 'product-row'}
                productName={elem.productName}
                code={elem.code}
                cost={elem.cost}
                picture={elem.picture}
                balance={elem.balance}
                cbChangeIsChoose={this.changeIsChoose}
                cbChangeIsExist={this.changeIsExist}
                cbShowEditCard={this.showEditCard}
                isValidName={!!this.state.contentName}
                isValidPrice={!!this.state.contentPrice}
                isValidURL={!!this.state.contentURL}
                isValidQuantity={!!this.state.contentQuantity}
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
                    code={this.state.productInfo[this.state.code - 1].code}
                    productName={this.state.productInfo[this.state.code - 1].productName}
                    cost={this.state.productInfo[this.state.code - 1].cost}
                    picture={this.state.productInfo[this.state.code - 1].picture}
                    balance={this.state.productInfo[this.state.code - 1].balance}
                    mode={this.state.mode}
                    cbPutInputValue={this.putInputValue}
                    cbResetCodeValue={this.resetCodeValue}
                    cbEditProduct={this.editProduct}
                    isValidName={!!this.state.contentName}
                    isValidPrice={!!this.state.contentPrice}
                    isValidURL={!!this.state.contentURL}
                    isValidQuantity={!!this.state.contentQuantity}
                 />}
                 {this.state.code && this.state.mode === 3 && < ProductCard
                    code={this.state.code}
                    mode={this.state.mode}
                    cbPutInputValue={this.putInputValue}
                    cbResetCodeValue={this.resetCodeValue}
                    cbCreateProduct={this.createProduct}
                    isValidName={!!this.state.contentName}
                    isValidPrice={!!this.state.contentPrice}
                    isValidURL={!!this.state.contentURL}
                    isValidQuantity={!!this.state.contentQuantity}
                 />} 
            </div>
        );
    }
}

export default MyIshop;
