import React from 'react';
class ChildClass extends React.Component {

   
    render(){
        const {name, incrementalBalance} = this.props;
        return <>
        <h1>
        <button onClick = {this.onProfitClickHandler}>Ankur</button>
        </h1>
        <h1>
        <button onClick = {this.onProfitClickHandler}>Ankit</button>
        </h1>
        </>
    }
}

export default ChildClass;