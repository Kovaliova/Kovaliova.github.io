var ListIshop2 = React.createClass({
    displayName:'ListIshop2',
    clickDelete:function(e){
        if(e.target === e.currentTarget) {
            this.props.buttonFunct(this.props.id);
        }
    },
    clickOnLine:function(e){
        if(e.target !== e.currentTarget) {
            this.props.select(this.props.id);
        }
    },
     render:function() {
         return React.DOM.tr({className:(this.props.selectedLine === this.props.id)
                 ?'selected'
                 :null,
                 id:this.props.id, onClick: this.clickOnLine},
             React.DOM.td(null, this.props.productName),
             React.DOM.td(null, this.props.price),
             React.DOM.td(null, this.props.src),
             React.DOM.td(null, this.props.count),
             React.DOM.td(null,
             React.DOM.input({type:'button',value:'Delete',data:this.props.id, onClick:this.clickDelete})),
         )},

});