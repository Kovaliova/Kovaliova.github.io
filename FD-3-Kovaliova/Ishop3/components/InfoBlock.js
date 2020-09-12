import React from 'react';

import './infoBlock.css';

class InfoBlock extends React.Component{
    render(){
        return(
        <div className="infoBlock" >
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
            <p>{this.props.price}</p>
        </div>
        )
    }
}
export default InfoBlock;