import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {

    static propTypes = {

    }

    render() {

        return (
            <div className="product-card">
                <div className="product-card__title">
                    {'Product'}
                </div>
                <div className="product-card__row">
                    <span>{'Name:'}</span>
                    <span>{1}</span>
                </div>
                <div className="product-card__row">
                    <span>{'Price:'}</span>
                    <span>{2}</span>
                </div>
                <div className="product-card__row">
                    <span>{'URL:'}</span>
                    <span>{3}</span>
                </div>
                <div className="product-card__row">
                    <span>{'Quantity:'}</span>
                    <span>{4}</span>
                </div>
            </div>
        );
    }
}

export default ProductCard; 