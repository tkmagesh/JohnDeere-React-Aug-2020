import React from 'react';
import './index.css';

import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugStats from './components/bugStats';
import BugList from './components/bugList';


class BugTracker extends React.Component {
    render() {
        const { bugs, addNew, toggle, remove, removeClosed } = this.props;
        return (
            <>
                <h1>Bug Tracker</h1>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, remove, removeClosed }} />
            </>
        )
    }
}

export default BugTracker;