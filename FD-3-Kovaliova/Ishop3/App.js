import React from 'react';
import ReactDOM from 'react-dom';

import Catalogue from './components/Catalogue.js';

let products = require('./productsList.json');

ReactDOM.render(
    <Catalogue
        products ={products}
    />,
    document.getElementById('container')
);