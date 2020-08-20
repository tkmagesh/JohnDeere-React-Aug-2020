import React from 'react';

const BugItem = ({ bug, toggle, remove }) => {
    const bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
    return (
        <li>
            <span
                className={bugStyle}
                onClick={() => toggle(bug)}
            >
                {bug.name} - <small>[{bug.id}]</small>
            </span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <input type="button" value="Remove" onClick={() => remove(bug)} />
        </li>
    )
};

export default BugItem;