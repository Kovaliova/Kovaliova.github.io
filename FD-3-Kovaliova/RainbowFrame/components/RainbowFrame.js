"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired
    };

    getDiv = (color, i, children) => {
        return <div key={i} style={{ border: "solid 7px " + color, padding: "10px", textAlign:"center" }}>{children}</div>
    }

    render() {
        let divBlock = this.props.children;
        this.props.colors.forEach((color, i) => {
            divBlock = this.getDiv(color, i, divBlock)
        })
        return (
            <div className="DivBlock">
                {divBlock}
            </div>
        )
    }
}

export default RainbowFrame;