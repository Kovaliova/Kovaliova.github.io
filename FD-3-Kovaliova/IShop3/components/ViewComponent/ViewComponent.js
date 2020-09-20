import React from 'react';
import PropTypes from 'prop-types';

import './ViewComponent.css';

class ViewComponent extends React.Component {

    render() {
        const item = this.props.item;
        return (
            <div className='GoodBlock'>
                <h1>{item.name}</h1>
                <p><span>Code</span>: <span>{item.code}</span></p>
                <p><span>Link</span>: <span>{item.Url}</span></p>
                <p><span>Name</span>: <span>{item.name}</span></p>
                <p><span>Cost</span>: <span>{item.cost}</span> $</p>
                <p><span>Power</span>: <span>{item.power}</span></p>
                <p><span>Numbers</span>: <span>{item.numbers}</span></p>
            </div>
        )
    }
}

ViewComponent.propTypes = {
    item: PropTypes.object
}

export default ViewComponent;