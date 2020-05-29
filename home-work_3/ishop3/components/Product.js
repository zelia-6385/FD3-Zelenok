import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        cost: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        cbChangeIsChoose: PropTypes.func.isRequired,
        cbChangeIsExist: PropTypes.func.isRequired,
    }

    highlightRow = () => {
        this.props.cbChangeIsChoose(this.props.code);
    };

    deleteRow =  (EO) => {
        EO.stopPropagation();
        this.props.cbChangeIsExist(this.props.code);
    };

    render() {

        return (
            <tr className={this.props.className}
                onClick={this.highlightRow}>
                <td className='product-row__product-name'>
                    {this.props.productName}
                </td>
                <td className='product-row__cost'>
                    {this.props.cost  + ' ' + 'руб.'}
                </td>
                <td className='product-row__picture'>
                    <img src={this.props.picture}/>
                </td>
                <td className='product-row__balance'>
                    {this.props.balance + ' ' + 'шт.'}
                </td>
                <td className='product-row__button'>
                    <button type="button">
                        {'Edit'}
                    </button>
                </td>
                <td className='product-row__button'>
                    <button type='button'
                        onClick={this.deleteRow}>
                        {'Delete'}
                    </button>
                </td>
            </tr> 
        );
    }
}

export default Product;
