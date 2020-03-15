import {createStore, combineReducers} from 'redux';


import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

import thunk from 'redux-thunk';
import {applyMiddleware, compose} from 'redux';

const initialState = {};

const middleware = [thunk];


const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
    //initial states
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, initialState, enhancer
    //compose(
    //    applyMiddleware(...middleware), 
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //(typeof window === 'object') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose
    //)
);

export default store;