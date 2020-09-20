import React from 'react';
import PropTypes from 'prop-types';

import './ViewComponent.css';

class ViewComponent extends React.Component {

    render() {
        const good = this.props.good;
        return (
            <div className='GoodBlock'>
                <h1>{good.name}</h1>
                <p><span>Code</span>: <span>{good.code}</span></p>
                <p><span>Link</span>: <span>{good.Url}</span></p>
                <p><span>Name</span>: <span>{good.name}</span></p>
                <p><span>Cost</span>: <span>{good.cost}</span> $</p>
                <p><span>Power</span>: <span>{good.power}</span></p>
                <p><span>Numbers</span>: <span>{good.numbers}</span></p>
            </div>
        )
    }
}

ViewComponent.propTypes = {
    good: PropTypes.object
}

export default ViewComponent;