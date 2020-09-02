var ItemComponent = React.createClass({
  displayName:'ItemComponent',
  propTypes:{
      code: React.PropTypes.string.isRequired,
      nameProduct: React.PropTypes.string.isRequired,
      urlProduct: React.PropTypes.any.isRequired,
      countProduct: React.PropTypes.number.isRequired,
      priceProduct: React.PropTypes.number.isRequired,
      isSelected: React.PropTypes.bool,
      cbSelectedItemCode: React.PropTypes.func.isRequired,
      cbDelete: React.PropTypes.func.isRequired
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
              style:this.props.isSelected?({backgroundColor:'#FFFF00'}):null
          },
          React.DOM.div({className:'Name'},this.props.nameProduct),
          React.DOM.div({className:'Url'},this.props.urlProduct),
          React.DOM.div({className:'Count'},this.props.countProduct),
          React.DOM.div({className:'Price'},this.props.priceProduct),
          React.DOM.div({className:'Delete'},
              React.DOM.input({type:'button',value:'Delete',onClick:this.delete})
          ),
      )
  },
})