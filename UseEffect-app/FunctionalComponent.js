import { useState } from "react";

export default () => {
    
    const [value, setValue] = useState(0);  
    const [newValue, setNewValue] = useState(0);  
    
    const onIncrementClickHandler = () => {
        setValue( value + 1 );
    };

    const onIncrementNewValueClickHandler = () => {
        setNewValue( newValue + 1 );
    };

    return (
        <>
        <h1>Value: {value}</h1>
        <h1>NewValue: {newValue}</h1>

        <button onClick={onIncrementClickHandler}>Increment</button>
        <button onClick={onIncrementNewValueClickHandler}>NewIncrement</button>
        </>
    );
};