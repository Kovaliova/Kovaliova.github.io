var ProductItem = React.createClass({

    displayName: 'ProductItem',
  
    propTypes: {
      code: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
      selectedProduct: React.PropTypes.string,
      highlightProduct: React.PropTypes.func,
      deleteProduct: React.PropTypes.func
    },
  
    selectedItemCode: function(){
        this.props.cbSelectedItemCode(this.props.code);
    },
    delete: function(EO){
        this.props.cbDelete(this.props.code,EO);
    },
  
    render: function() {
        return React.DOM.div({
                className: 'Article',
                onClick:this.selectedItemCode,
                style:this.props.isSelected?({backgroundColor:'#ff7f50'}):null
            },
            React.DOM.div({className:'Name'},this.props.nameProduct),
            React.DOM.div({className:'URL'},this.props.urlProduct),
            React.DOM.div({className:'Count'},this.props.countProduct),
            React.DOM.div({className:'Price'},this.props.priceProduct),
            React.DOM.div({className:'Delete'},
                React.DOM.input({type:'button',value:'Delete',onClick:this.delete})
            ),
        )
    },
})