var Product = React.createClass({

    displayName: 'Product',

    propTypes: {
        className: React.PropTypes.string.isRequired,
        productName: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        cost: React.PropTypes.number.isRequired,
        picture: React.PropTypes.string.isRequired,
        balance: React.PropTypes.number.isRequired,
        cbChangeIsChoose: React.PropTypes.func.isRequired,
        cbChangeIsExist: React.PropTypes.func.isRequired,
    },

    changeColor: function() {
        this.props.cbChangeIsChoose(this.props.code);
    },

    deleteRow: function(EO) {
        EO.stopPropagation();
        this.props.cbChangeIsExist(this.props.code);
    },

    render: function() {

        return React.DOM.tr({className: this.props.className, onClick: this.changeColor},
            React.DOM.td({className: 'product-row__product-name'},
                this.props.productName
            ),
            React.DOM.td({className: 'product-row__cost'},
                this.props.cost + ' ' + 'руб.'
            ),
            React.DOM.td({className: 'product-row__picture'},
                React.DOM.img({src: this.props.picture})
            ),
            React.DOM.td({className: 'product-row__balance'},
                this.props.balance + ' ' + 'шт.'
            ),
            React.DOM.td({className: 'product-row__button'},
                React.DOM.button({type: 'button', onClick: this.deleteRow},
                    'Delete'
                )
            )
        );
    },

})