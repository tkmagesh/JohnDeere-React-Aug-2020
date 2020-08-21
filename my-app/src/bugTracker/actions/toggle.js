/* 
function toggle(bugToToggle) {
    const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'REPLACE_BUG', payload: toggledBug };
    return action;
} 
*/
import bugApi from '../services/bugApi.js';

function toggle(bugToToggle) {
    return async function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        const toggledBug = await bugApi.save(toggledBugData);
        const action = { type: 'REPLACE_BUG', payload: toggledBug };
        dispatch(action);
    }
}


export default toggle;