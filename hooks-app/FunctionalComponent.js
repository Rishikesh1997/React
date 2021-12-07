import { useState } from "react";

export default () => {
    //const stateArr = useState(0);
    //const [value, setValue] = stateArr;

    const [value, setValue] = useState(0);  //same as above 2 lines
    
    const onIncrementClickHandler = () => {
        setValue( value + 1 );
    };

    const onDecrementClickHandler = () => {
        setValue( value - 1 );
    };

    return (
        <>
        <h1>Value: {value}</h1>
        <button onClick={onIncrementClickHandler}>Increment</button>
        <button onClick={onDecrementClickHandler}>Decrement</button>
        </>
    );
};