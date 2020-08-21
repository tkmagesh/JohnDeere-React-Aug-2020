/* function removeClosed(bugs) {
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', payload: bugsToRemove };
    return action;
} */

import bugApi from '../services/bugApi';

function removeClosed(bugs){
    return async function(dispatch){
        const closedBugs = bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(async closedBug => {
            await bugApi.remove(closedBug);
            const action = { type: 'REMOVE_BUG', payload: closedBug };
            dispatch(action);
        })
    }
}
export default removeClosed;