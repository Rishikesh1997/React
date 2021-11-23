import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {

    state = {
        balance : 0,
    };

    onProfit = () => {
        this.setState({balance: this.state.balance + 1})
    };

    onExpense = () => {
        if(this.state.balance === 0) {
            return ;   
        }
        this.setState({balance: this.state.balance - 1})
    };

    render () {
        const {name, balance} = this.props;
        return ( <>
        <h1>Family : {this.state.balance}</h1>
        <button onClick = {this.onProfit}>Profit</button>
        <button onClick = {this.onExpense}>Expense</button>
        <ChildComponent onProfit = {this.onProfit} onExpense = {this.onExpense} name = {"Rishii"} />
        <ChildComponent onProfit = {this.onProfit} onExpense = {this.onExpense}  name = {"Ritika"} />
        </>
        );
    }
}

export default ParentComponent;