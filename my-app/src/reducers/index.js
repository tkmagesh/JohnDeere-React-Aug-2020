import { combineReducers } from "redux";

import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';

const rootReducer = combineReducers({
    bugsData: bugsReducer,
    spinnerData: spinnerReducer
});

export default rootReducer;