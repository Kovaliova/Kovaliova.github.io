var MyIshop = React.createClass({

    displayName: 'MyIshop',

    propTypes: {
      name: React.PropTypes.string.isRequired,
      products: React.PropTypes.array.isRequired,
  },

    render: function() {
  
      var productCode=[];
      this.props.products.forEach(function (item){ 
        var productsCode=        
          React.DOM.tr({key:item.code,className:'Table'},
            React.DOM.td({className:'Name'},item.nameProduct),
            React.DOM.td({className:'Price'},item.priceProduct),
            React.DOM.td({className:'Url'},item.urlProduct),
            React.DOM.td({className:'Count'},item.countProduct),
          );
        productCode.push(productsCode);
      });
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
