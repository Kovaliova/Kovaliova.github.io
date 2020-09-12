import React from 'react';
import PropTypes from 'prop-types';

class ErrorText extends React.Component{
    static propTypes={
        text:PropTypes.string.isRequired
    };
    render(){
        return(
            <span style={{color:"red", marginLeft:"5px"}}>{this.props.text}</span>
        )
    }
}
export default ErrorText;