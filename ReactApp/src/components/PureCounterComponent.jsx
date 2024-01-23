import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false,
            count: 0,
        };
    }

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    handleCount = () => {
        if (this.state.toggle) {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.toggle)

        }
    };

    

    render() {

        console.log("This is Pure Component");

        return (
            <div>
                <h1>Pure Components</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleToggle}  style={{ backgroundColor: this.state.toggle ? 'Purple' : 'blue' }} >Toggle</button>
                <button onClick={this.handleCount}>Counter</button>
            </div>
        );
    }
}

export default PureCounterComponent;
