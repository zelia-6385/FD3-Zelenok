var MyIshop = React.createClass({

    displayName: 'MyIshop',

    render: function() {

        var productRows=[];
        this.props.productInfo.forEach(elem => {
            var productRow = 
                React.DOM.tr({key: elem.code, className: 'product-row'},
                    React.DOM.td({className: 'product-row__product-name'}, elem.productName),
                    React.DOM.td({className: 'product-row__cost'}, elem.cost + ' ' + 'руб.'),
                    React.DOM.td({className: 'product-row__picture'},
                        React.DOM.img({src: elem.picture})
                    ),
                    React.DOM.td({className: 'product-row__balance'}, elem.balance + ' ' + 'шт.')
                );
            productRows.push(productRow);
        });
        return React.DOM.div({className: 'my-ishop'},
            React.DOM.div({className: 'my-ishop__name'}, this.props.shopName),
            React.DOM.table({className:'my-ishop__product-info-table'}, productRows)
        );
    }
})