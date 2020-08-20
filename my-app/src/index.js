import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import bugActionCreators from './bugTracker/actions';
import appStore from './store';
import BugTracker from './bugTracker';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp() {
  const bugs = appStore.getState();
  ReactDOM.render(
    <BugTracker bugs={bugs} {...bugActionDispatchers} />
    , document.getElementById('root'))
}
renderApp();
appStore.subscribe(renderApp);



/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
import * as calc from './calc';
console.log(calc);
*/

/*
import { add } from './calc';
console.log(add(10,20));
*/

/*
//importing the default export
import calc from './calc';
console.log(calc.add(100,200));
*/