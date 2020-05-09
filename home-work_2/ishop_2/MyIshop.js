var MyIshop = React.createClass({

    displayName: 'MyIshop',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        productInfo: React.PropTypes.array.isRequired,
    },

    changeIsChoose: function(code) {
        this.setState({
            code: code,
        });
    },

    ChangeIsExist: function(code) {

        let confirmation = confirm("Вы действительно хотите удалить строку?")

        if (confirmation) {
            
            this.setState({
                productInfo: this.state.productInfo.slice().filter(elem => elem.code !== code),
                code: null,
            });
            
        } else {
            return
        }

    },

    getInitialState: function() {
        return {
            productInfo: this.props.productInfo,
            code: null,
        }
    },

    render: function() {

        var productInfoCode = this.state.productInfo.slice().map( elem => 
                React.createElement(Product, {
                    key: elem.code,
                    className: this.state.code === elem.code ? 'product-row product-row__colored' : 'product-row',
                    productName: elem.productName,
                    code: elem.code,
                    cost: elem.cost,
                    picture: elem.picture,
                    balance: elem.balance,
                    cbChangeIsChoose: this.changeIsChoose,
                    cbChangeIsExist: this.ChangeIsExist,
                })
            );

        return React.DOM.div({className: 'my-ishop'},
            React.DOM.div({className: 'my-ishop__name'}, this.props.shopName),
            React.DOM.table({className: 'my-ishop__product-info-table'},
                React.DOM.tbody({className: 'my-ishop__product-info-tbody'},
                    productInfoCode
                )
            )
        );  
    }
})