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
        mode: PropTypes.number.isRequired,
        isEditCard: PropTypes.bool.isRequired,
        isNewCard: PropTypes.bool.isRequired,
        cbChangeIsChoose: PropTypes.func.isRequired,
        cbChangeIsExist: PropTypes.func.isRequired,
        cbShowEditCard: PropTypes.func.isRequired,
        cbCompareFields: PropTypes.func.isRequired,
    }

    highlightRow = () => {
        this.props.cbChangeIsChoose(this.props.code);
    };

    deleteRow =  (EO) => {
        EO.stopPropagation();
        if (this.props.isEditCard || this.props.isNewCard) {
            console.log(1);
            return
        } else {
            this.props.cbChangeIsExist(this.props.code);
        }  
    };

    editCard = (EO) => {
        EO.stopPropagation();
        if (!this.checkIfChangeEditCard() || this.props.isNewCard) {
            return
        } else {
            this.props.cbShowEditCard(this.props.code, this.props.productName, this.props.cost, this.props.picture, this.props.balance);
        } 
    };

    checkIfChangeEditCard = () => {
        return this.props.cbCompareFields();
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
                    <button className={
                        this.props.mode == 3 ? 'product-card__button-disabled' :
                        undefined
                    }
                        type="button"
                        onClick={this.editCard}>
                        {'Edit'}
                    </button>
                </td>
                <td className='product-row__button'>
                    <button className={
                        this.props.mode == 3 || this.props.mode == 2 ? 'product-card__button-disabled' :
                        undefined
                    }
                        type='button'
                        onClick={this.deleteRow}>
                        {'Delete'}
                    </button>
                </td>
            </tr> 
        );
    }
}

export default Product;
