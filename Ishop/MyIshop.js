var MyIshop = React.createClass({

    displayName: 'MyIshop',
  
    render: function(){
  
      return React.DOM.div( {className:'MyIshopFrame'}, 
        React.DOM.h1( null, "Всем привет!" ),
        React.DOM.div( {className:'MyIshopText'}, "Начинаем изучение React!" ),
      );
    },
  
  });