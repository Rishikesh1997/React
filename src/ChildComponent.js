import { Component } from "react";

class ChildComponent extends Component {

    state = {
        balance : 0,
    };

    onChildProfit = () => {
        this.setState({balance: this.state.balance + 1})
    };

    onChildExpense = () => {
        if(this.state.balance === 0)
        {
            return;
        }
        this.setState({balance: this.state.balance - 1})
    };


    render () {
        const {name, onProfit, onExpense} = this.props;

        const onProfitClicked = () => {
            this.onChildProfit();
            onProfit();
        };

        const onExpenseClicked = () => {
            this.onChildExpense();
            onExpense();
        };

        return (
            <>
            
            <h1>{name} : {this.state.balance}</h1>
            <button onClick = {onProfitClicked}>Profit</button>
            <button onClick = {onExpenseClicked}>Expense</button>
            </>
        );
    }
}   

export default ChildComponent;