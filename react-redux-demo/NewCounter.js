import React, {Component} from "react";
import {connect} from "react-redux";

class NewCounter extends Component {

    render () {
        return (
        <>
        <h1>NewCounter: {this.props.counter}</h1>
       <button onClick={this.props.increment}>Increment</button>
       <button onClick={this.props.decrement}>Decrement</button>
       </>
        );
    };
    
}

const newMapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const newMapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "increment"}),
        decrement: () => dispatch({ type: "decrement"}),
    };
};

export default connect(newMapStateToProps, newMapDispatchToProps)(NewCounter);
