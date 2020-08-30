var ListIshop2 = React.createClass({
  
    displayName: 'ListIshop2',
  
    getDefaultProps: function() {
      return {
        shopName: 'iShop',
        emptyFallbackPhrase: 'Товаров больше не осталось'
      }
    },
  
    getInitialState: function() {
      return {
        productList: this.props.productList,
        selectedProduct: null
      }
    },
  
    userConfirmation: function(prodToDelete) {
      return confirm(`Вы действительно хотите удалить ${prodToDelete.name}`);
    },
  
    onProductDelete: function(prodToDelete) {
      if (!this.userConfirmation(prodToDelete)) {
        return false;
      }
      const filteredLis = this.state.productList.filter((product) => {
        return prodToDelete.id !== product.id
      });
  
      this.setState({productList: filteredLis});
    },
  
    onProductClick: function(productId) {
      this.setState({selectedProduct: productId})
    },
  
    propTypes: {
      shopName: React.PropTypes.string.isRequired,
      propductList: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          id: React.PropTypes.string.isRequired,
          name: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          Url: React.PropTypes.string.isRequired,
          Count: React.PropTypes.number.isRequired,
          selectedProduct: React.PropTypes.string
        })
      )
    },
    
    render: function () {
  
      return React.DOM.div({className: 'product'},
        React.DOM.h1({className: 'shopName'}, this.props.shopName),
        React.DOM.table({className: 'product__table'},
          React.DOM.tbody(null,
            this.state.productList.length ?
            this.state.productList.map((prod) => {
              return React.createElement(ProductItem, {
                key: prod.id,
                id: prod.id,
                name: prod.name,
                price: prod.price,
                Url: prod.picUrl,
                Count: prod.balance,
                cbSelected: this.onProductClick,
                selectedProduct: this.state.selectedProduct,
                cbDeleted: this.onProductDelete
              })
            })
            : React.DOM.tr({className: 'product__item product__item--empty'},
              React.DOM.td({}, this.props.emptyFallbackPhrase)
              )
          )
        )
      )
    }
  });