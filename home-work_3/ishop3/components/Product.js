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
        cbShowEditCard: PropTypes.func.isRequired,
        isValidName: PropTypes.bool.isRequired,
        isValidPrice: PropTypes.bool.isRequired,
        isValidURL: PropTypes.bool.isRequired,
        isValidQuantity: PropTypes.bool.isRequired,
    }

    highlightRow = () => {
        this.props.cbChangeIsChoose(this.props.code);
    };

    deleteRow =  (EO) => {
        EO.stopPropagation();
        if (this.checkIsFinishEditCard()) {
            return
        } else {
            this.props.cbChangeIsExist(this.props.code);
        }  
    };

    editCard = (EO) => {
        EO.stopPropagation();
        if (this.checkIsFinishEditCard()) {
            return
        } else {
            this.props.cbShowEditCard(this.props.code);
        } 
    };

    checkIsFinishEditCard = () => {
        return this.props.isValidName || this.props.isValidPrice || this.props.isValidURL || this.props.isValidQuantity
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
                    <button type="button"
                        onClick={this.editCard}>
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
