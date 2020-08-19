var MyIshop = React.createClass({

    displayName: 'MyIshop',
  
    render: function() {
  
      var answersCode=[];
      for ( var a=0; a<this.props.answers.length; a++ ) {
        var answer=this.props.answers[a];
        var answerCode=        
          React.DOM.div({key:answer.code,className:'Answer'},
            React.DOM.span({className:'Count'},answer.count),
            React.DOM.span({className:'Text'},answer.text),
            React.DOM.span({className:'Price'},answer.price),
            React.DOM.span({className:'Url'},answer.url),
          );
        answersCode.push(answerCode);
      }
      return React.DOM.div( {className:'VotesBlock'}, 
        React.DOM.div( {className:'Question'}, this.props.question ),
        React.DOM.div( {className:'Answers'}, answersCode ),
      );
    },
  
  });