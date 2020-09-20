"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import GoodsList from './components/ListComponent/ListComponent';

var tableName = 'Catalog AppleService';
var tableHeaders = require('./data/theadtable.json');
var goodsArray = require('./data/items.json');
var question = 'Do you want to delete this row?';

ReactDOM.render(
  <GoodsList
    tableName={tableName}
    tableHeaders={tableHeaders}
    goodsArray={goodsArray}
    question={question}
  />, document.getElementById('container')
)