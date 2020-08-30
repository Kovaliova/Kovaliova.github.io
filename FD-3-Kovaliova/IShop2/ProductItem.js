var ProductItem = React.createClass({

    displayName: 'ProductItem',
  
    getDefaultProps: function() {
      return {deleteBtn: 'Удалить'}
    },
  
    propTypes: {
      code: React.PropTypes.string.isRequired,
      nameProduct: React.PropTypes.string.isRequired,
      priceProduct: React.PropTypes.number.isRequired,
      urlProduct: React.PropTypes.string.isRequired,
      countProduct: React.PropTypes.number.isRequired,
      selectedProduct: React.PropTypes.string,
      highlightProduct: React.PropTypes.func,
      deleteProduct: React.PropTypes.func
    },
  
    deleteProduct: function(e) {
       e.stopPropagation();
       this.props.cbDeleted(this.props);
    },
  
    highlightProduct: function() {
      this.props.cbSelected(this.props.id);
    },
  
    render: function () {

        return React.DOM.tr({className: `product_item ${this.props.id === this.props.selectedProduct ? `highlight` : ``}`, onClick: this.highlightProduct},
          React.DOM.td({className: 'URL'},
            React.DOM.img({src: `img/${this.props.urlProduct}`, alt: this.props.name})
          ),
          React.DOM.td({className: 'name'}, this.props.nameProduct),
          React.DOM.td({className: 'price'}, this.props.priceProduct),
          React.DOM.td({className: 'count'}, this.props.countProduct),
          React.DOM.td({className: 'delete'},
            React.DOM.button({className: 'btn delete-btn', onClick: this.deleteProduct}, this.props.deleteBtn)
          )
        )
      }
    });