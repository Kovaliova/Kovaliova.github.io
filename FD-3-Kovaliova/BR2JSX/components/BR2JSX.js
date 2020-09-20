"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css'

class BR2JSX extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

   splitText = (text) => {
        const regExp = /(<br\s*\/?>)/ig;
        const stringArr = text.split(regExp);
        return stringArr.map((word, i) => {
          if (regExp.test(word)) {
            word = <br key={i}/>;
          }
          return word;
        });
      };
      render(){
        return (
        <div className="BrComponent">
            {this.splitText(this.props.text)}
        </div>
        )
    }
}

export default BR2JSX;
