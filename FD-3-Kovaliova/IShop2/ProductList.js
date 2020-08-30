var ProductList = React.createClass({
  
    displayName: 'ProductList',
  
    getDefaultProps: function() {
      return {
        headName: 'AppleService',
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
      nameShop: React.PropTypes.string.isRequired,
      propductList: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.string.isRequired,
          nameProduct: React.PropTypes.string.isRequired,
          priceProduct: React.PropTypes.number.isRequired,
          urlProduct: React.PropTypes.string.isRequired,
          countProduct: React.PropTypes.number.isRequired,
          selectedProduct: React.PropTypes.string
        })
      )
    },
    
    render: function () {
  
      return React.DOM.div({className: 'product'},
        React.DOM.h1({className: 'headName'}, this.props.headName),
        React.DOM.table({className: 'product__table'},
          React.DOM.tbody(null,
            this.state.productList.length ?
            this.state.productList.map((prod) => {
              return React.createElement(ProductItem, {
                key: prod.id,
                сode: prod.code,
                nameProduct: prod.nameProduct,
                priceProduct: prod.priceProduct,
                urlProduct: prod.urlProduct,
                countProduct: prod.countProduct,
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