var spinnerActionCreators = {
    down(delta) {
        const down_action = { type: 'DOWN', payload: delta };
        return down_action;
    },
    up(delta) {
        const up_action = { type: 'UP', payload: delta };
        return up_action;
    },
    doubleUp() {
        const action = { type: 'DOUBLE_UP' };
        return action;
    },
    doubleDown() {
        const action = { type: 'DOUBLE_DOWN' };
        return action;
    }
}

export default spinnerActionCreators;