import React from 'react';
import ReactDOM from 'react-dom';
import TypeForm from './components/TypeForm';
import { formPopulation } from './utils/typeform-utils';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(
    <TypeForm formPopulation={formPopulation}/>, 
    document.getElementById('app')
);
