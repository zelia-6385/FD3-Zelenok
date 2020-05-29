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
    };

    changeIsChoose = (code) => {
        this.setState({
            code: code,
        });
    };

    ChangeIsExist = (code) => {

        let confirmation = confirm("Вы действительно хотите удалить строку?")

        if (confirmation) {
            
            this.setState({
                productInfo: this.state.productInfo.slice().filter(elem => elem.code !== code),
                code: null,
            });
            
        } else {
            return
        }

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
                cbChangeIsExist={this.ChangeIsExist}
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
                < ProductCard/>
            </div>
        );
    }
}

export default MyIshop;
