import React from "react";

class Spinner extends React.Component {
    state = {
        delta: 0
    };
    render() {
        const { value, up, down, doubleUp, doubleDown } = this.props;
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
            </div>
        )
    }
}

export default Spinner;