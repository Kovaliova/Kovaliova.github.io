'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ListComponent from './components/ListComponent';

let textWithName = "Каталог товаров в интернет-магазине AppleService";
let titles = ['Тип','Марка телефона','Модель телефона','Общее время работы','URL изображения','Количество на складе, шт.','Цена, бел.руб.','Кнопки контроля'];
let items = require('./items.json');

ReactDOM.render(
    <ListComponent
        name={textWithName}
        head={titles}
        articles={items}
        startCardMode={0}
        startAddBtnMode={1}
    />,
    document.getElementById('container')
);