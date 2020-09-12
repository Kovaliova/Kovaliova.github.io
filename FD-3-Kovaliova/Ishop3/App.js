"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import GoodsList from './components/GoodList/GoodsList';

var tableName = 'Goods catalog';
var tableHeaders = require('./data/headers.json');
var goodsArray = require('./data/catalog.json');
var question = 'Do you want to delete this row?';

ReactDOM.render(
  <GoodsList
    tableName={tableName}
    tableHeaders={tableHeaders}
    goodsArray={goodsArray}
    question={question}
  />, document.getElementById('container')
)