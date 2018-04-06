import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import typeformReducer from '../reducers/typeformReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            typeform: typeformReducer
        }),

        composeEnhancers(applyMiddleware(thunk))
        
    );

    return store;
}