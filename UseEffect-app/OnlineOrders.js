import { useState } from "react";
import OnlineOrderChild from "./OnlineOrderChild";



 const OnlineOrders = () => {
   
    const status = [ "Order Placed", "Pending", "Preparing", "Out for Delivery", "Delivered", ];

    const [ value, setValue] = useState(0);

    const onClickHandler = () => {
        setValue(value + 1);
    };

    return (
        <>
        <h1>Online Orders</h1>
        <div>Current Status: {status[value]}</div>
        <button onClick={onClickHandler}>Next Button</button>
        <OnlineOrderChild onClickHandler={onClickHandler} />
        </>
    );
};


export default OnlineOrders;
