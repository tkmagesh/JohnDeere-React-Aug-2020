

//sync action
/* 
let _currentBugId = 0;
function addNew(bugName){
    const newBug = {
        id: ++_currentBugId,
        name: bugName,
        isClosed: false,
        createdAt: new Date()
    };
    const action = { type: 'ADD_NEW_BUG', payload: newBug };
    return action;
} */

import bugApi from '../services/bugApi';

function addNew(bugName){
    return async function(dispatch){
        const newBugData = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        const newBug = await bugApi.save(newBugData)
        const action = { type: 'ADD_NEW_BUG', payload: newBug };
        dispatch(action);
    }
}
export default addNew;