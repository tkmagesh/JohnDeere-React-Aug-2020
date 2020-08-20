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
}
export default addNew;