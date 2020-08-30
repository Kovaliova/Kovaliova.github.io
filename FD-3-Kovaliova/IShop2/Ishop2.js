var Ishop2 = React.createClass({

    displayName: 'Ishop2',

    propTypes: {
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                nameProduct: React.PropTypes.string.isRequired,
                priceProduct: React.PropTypes.string.isRequired,
                countProduct: React.PropTypes.number.isRequired,
                urlProduct: React.PropTypes.string.isRequired
            })
        ),
    },
    getInitialState: function () {
        return {
            products:this.props.products,
            selected:null
        };
    },
    deleteItemFromList: function(id){
        let productsList = this.state.products;
        productsList = productsList.filter(item => item.id !== id);
        this.setState({products:productsList});
    },
    selectProduct:function(id){
        this.setState({selected: id});
    },
    render: function () {
        let productBlocks = this.state.products.map(item =>
            React.createElement(Product, {key: item.id, src: item.urlPictures,
                productName: item.productName, price: item.price, count: item.count,id:item.id,
                buttonFunct:this.deleteItemFromList,select:this.selectProduct,selectedLine:this.state.selected
            }),
        );
        return React.DOM.div({className: 'Ishop2'},
            React.DOM.table({className: 'ProductsTable'},
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        React.DOM.td(null,'Name'),
                        React.DOM.td(null, 'Price'),
                        React.DOM.td(null, 'URL'),
                        React.DOM.td(null, 'Count'),
                        React.DOM.td(null, 'Control'))),
                React.DOM.tbody(null,
            productBlocks)));
    },
});