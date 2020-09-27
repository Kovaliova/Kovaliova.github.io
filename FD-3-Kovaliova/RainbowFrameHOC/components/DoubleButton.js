import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton  extends React.Component {  
  
  static propTypes = { 
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
  }; 
  
  pressCaption1 = (EO) => {
    this.props.cbPressed(EO.target.value);
  }
  
  pressCaption2 = (EO) => {
    this.props.cbPressed(EO.target.value);
  }

  render() {          
      return (
        <div className="DoubleButton">
          <input type="button" value={this.props.caption1} onClick={this.pressCaption1}/>
          {this.props.children}        
          <input type="button" value={this.props.caption2} onClick={this.pressCaption2}/> 
        </div>     
      );   
    
  }

}


export default DoubleButton;