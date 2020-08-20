import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import spinnerActionCreators from "./actions";

class Spinner extends React.Component {
    state = {
        delta: 0
    };
    render() {
        const { value, up, down, doubleUp, doubleDown, applyFilter } = this.props;
        const { delta } = this.state;
        return (
            <div>
                <h3>Spinner</h3>
                <hr />
                <label>Delta : </label>
                <input type="number" value={delta} onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="DOUBLE DOWN" onClick={doubleDown} />
                <input type="button" value="DOWN" onClick={() => down(delta)} />
                <span> [ {value} ] </span>
                <input type="button" value="UP" onClick={() => up(delta)} />
                <input type="button" value="DOUBLE UP" onClick={doubleUp} />
                <hr/>
                <label>Apply Filter : </label>
                <input type="checkbox" onChange={ evt => applyFilter(evt.target.checked)} />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const value = storeState.spinnerData;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);