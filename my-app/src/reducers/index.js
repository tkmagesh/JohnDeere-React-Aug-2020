import { combineReducers } from "redux";

import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    bugsData: bugsReducer,
    spinnerData: spinnerReducer,
    filterData : filterReducer
});

export default rootReducer;