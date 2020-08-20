import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import appStore from './store';

import spinnerActionCreators from './spinner/actions';
import bugActionCreators from './bugTracker/actions';

import BugTracker from './bugTracker';
import Spinner from './spinner';

const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);
const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp() {
  const storeState = appStore.getState();
  const value = storeState.spinnerData;
  const bugs = storeState.bugsData;

  ReactDOM.render(
    <div>
      <h1>My App</h1>
      <Spinner value={value} {...spinnerActionDispatchers} />
      <hr/>
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </div>
    , document.getElementById('root'));
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