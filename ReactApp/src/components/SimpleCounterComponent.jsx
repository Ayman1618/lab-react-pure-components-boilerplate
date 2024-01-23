import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {

    constructor() {
        super();
        this.state = {
            toggle: false,
            count: 0
        }
    }

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    }

    handleCount = () => {
        if (this.state.toggle) {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.toggle)
        }
    }

    render() {
       
        console.log("This is Simple Component");
        
        return (
            
            <>
                <div>
                    <h1>Simple Components</h1>
                    <h4>{this.state.count}</h4>
                    <div className='button'>
                        <button onClick={this.handleToggle} style={{ backgroundColor: this.state.toggle ? 'Purple' : 'blue' }}>Toggle</button>
                        <button onClick={this.handleCount}>Counter</button>
                    </div>
                </div>
            </>
        );
    }
}
