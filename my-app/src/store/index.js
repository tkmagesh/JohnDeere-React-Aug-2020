import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.group('Before');
            console.log(store.getState());
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('After');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
}

*/

/* const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('Before');
    console.log(store.getState());
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('After');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
};

const asyncMiddleware = store => next => action => {
    if(typeof action === 'function'){
        return action(next);
    }
    return next(action);
}

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware)); */

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const promiseMiddleware = store => next => action => {
    if (action instanceof Promise) {
        action.then(actionObj => store.dispatch(actionObj));
    } else {
        return next(action);
    }
}

const appStore = createStore(rootReducer, applyMiddleware(logger, thunk, promiseMiddleware));
export default appStore;