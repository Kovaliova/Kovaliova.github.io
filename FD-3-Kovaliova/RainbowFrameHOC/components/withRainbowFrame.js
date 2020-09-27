import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {       
        return props => {                
            let elem = <Component {...props} />;
            colors.forEach(col => 
                elem=<div style={{border: "solid 7px" + col, padding:"10px"}}>{elem}</div> 
            );
            return elem;
        }  
    }
}

export { withRainbowFrame };