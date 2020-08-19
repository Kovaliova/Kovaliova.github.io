var MyIshop = React.createClass({

    displayName: 'MyIshop',
  
    render: function() {
  
      var propertyProduct=[];
      propertyProduct.forEach(myFunction);
      function myFunction() {
        var propertyProducts=        
          React.DOM.div({key:propertyProduct,className:'Answer'},
            React.DOM.span({className:'Text'},answer.text),
            React.DOM.span({className:'Price'},answer.price),
            React.DOM.span({className:'Url'},answer.url),
            React.DOM.span({className:'Count'},answer.count),
          );
        propertyProduct.push(propertyProducts);
      }
      return React.DOM.div( {className:'MyIshop'}, 
        React.DOM.div( {className:'Question'}, this.props.question ),
        React.DOM.div( {className:'Characteristic'}, 
            React.DOM.span( {className:'Name'}, this.props.name ),
            React.DOM.span( {className:'Price'}, this.props.price ),
            React.DOM.span( {className:'Url'}, this.props.url ),
            React.DOM.span( {className:'Count'}, this.props.count ),
        this.props.characteristic ),
        React.DOM.div( {className:'Answers'}, propertyProduct ),
      );
    },
  
  });