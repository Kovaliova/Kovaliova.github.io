"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ListComponent from './components/ListComponent/ListComponent';

var tableName = 'Catalog AppleService';
var tableHeaders = require('./data/theadtable.json');
var itemList = require('./data/items.json');
var question = 'Do you want to delete this row?';

ReactDOM.render(
  <ListComponent
    tableName={tableName}
    tableHeaders={tableHeaders}
    itemList={itemList}
    question={question}
  />, document.getElementById('container')
)