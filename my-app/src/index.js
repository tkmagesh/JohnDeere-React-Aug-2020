import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import appStore from './store';

import BugTracker from './bugTracker';
import Spinner from './spinner';
import TimerContainer from "./timer";

const Home = () => (
  <div><TimerContainer /></div>
);

ReactDOM.render(
    <Provider store={appStore}>
      <div>
        <h1>My App</h1>
        <Router>
          <div>
            <span> [ <Link to="/">Home</Link> ] </span>
            <span> [ <Link to="/spinner">Spinner</Link> ] </span>
            <span> [ <Link to="/bugs">Bug Tracker</Link> ] </span>
            <Switch>
              <Route path="/spinner">
                <Spinner />
              </Route>
              <Route path="/bugs">
                <BugTracker />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
    , document.getElementById('root'));


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