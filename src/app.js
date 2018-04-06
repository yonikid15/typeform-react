import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setupTypeForm } from './actions/typeform';
import TypeForm from './components/TypeForm';
import { formPopulation } from './utils/typeform-utils';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const currentQuestion = Object.keys( formPopulation )[0];

store.dispatch( setupTypeForm( currentQuestion ));

const jsx = (
    <Provider store={store}>
        <TypeForm formPopulation={formPopulation} />
    </Provider>
)

ReactDOM.render( jsx, document.getElementById('app') );
