var ProductList = React.createClass({

  displayName: 'ProductList',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    head: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    articles: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          code: React.PropTypes.string.isRequired,
          name: React.PropTypes.string.isRequired,
          url: React.PropTypes.any.isRequired,
          count: React.PropTypes.number.isRequired,
          price: React.PropTypes.number.isRequired
      })
  )
},

getInitialState: function(){
  return{
      selectedItem: null,
      itemsList: this.props.articles,
  }
},
selectedItemCode: function(code){
  this.setState({selectedItem:code});
},
delete: function(code,EO){
  if(confirm('Вы действительно хотите удалить этот товар?')) {
      this.setState({itemsList: this.state.itemsList.filter(item => item.code!= code)})
  } else {
      EO.preventDefault();
      EO.stopPropagation();
  }
},

  render: function() {

    var items = this.state.itemsList.map(item =>
      React.createElement(ProductItem,{
          key:item.code,
          code:item.code,
          name:item.nameProduct,
          url:item.urlProduct,
          count:item.count,
          price:item.priceProduct,
          isSelected:(this.state.selectedItem==item.code),
          cbSelectedItemCode: this.selectedItemCode,
          cbDelete: this.delete
      })
);
    return React.DOM.table( {className:'MyIshop'}, 
      React.DOM.caption( {className:'HeadName'}, this.props.name ),
      React.DOM.thead( {className:'CharacteristicHead'},
        React.DOM.tr( {className:'TableRow'},
          React.DOM.td( {className:'TableCell'}, "Name" ),
          React.DOM.td( {className:'TableCell'}, "Price" ),
          React.DOM.td( {className:'TableCell'}, "Url" ),
          React.DOM.td( {className:'TableCell'}, "Count" )
      )),
      React.DOM.tbody( {className:'Products'}, productCode ),
    );
  },

});