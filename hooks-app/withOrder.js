import { useState } from "react"

export default (WrappedComponent) => {
    // return TestComponent;
    return () => {
        const [value, setValue] = useState(0);

        const onClickHandler = () => {
            setValue(value + 1); 
        };

        return <WrappedComponent value={value} onClickHandler={onClickHandler} />;
    };
};

// const TestComponent = () => {
//     return (
//         <h1>I am in test Component</h1>
//     )
// };