import { useEffect, useState } from "react"
import useMyLog from "./useMyLog";
import useUserStatus from "./useUserStatus";

export default () => {
    const [ value, setValue] = useState(0);
    const [ newValue, setNewValue] = useState(0);

    //-------------------------//

    // useMyLog(value);      // use custome hook useMyLog
    // useMyLog(newValue);   // use custome hook useMyLog
    
    //------------------------------//

    const userStatus = useUserStatus(value);
    const userNewStatus = useUserStatus(newValue);

    //-----------------------------------//

    const onClickHandler = () => {
        setValue(value + 1);
    };

    const onNewvalueClickHandler = () => {
        setNewValue(newValue + 1);
    };

//------------------------------//

    // useEffect(() => {
    //     console.log("rendered");
    // });

//---------------------------//

    // useEffect(() => {
    //     console.log("rendered");
    // }, []);   //execute only once after component is rendered

//-----------------------------------//

    useEffect(() => {
        console.log("Value Updated");
        return () => {
            //clean up
            console.log("clean up");
        }
    }, [value]);   //execut only when value is updated

//--------------------------------------//

    // useEffect(() => {
    //     console.log("Value Updated");
    // }, [value, newValue]);   //execut only when value and newValue is updated

//-------------------------------------//

    return (
        <>
        <h1>In Use Effect Example</h1>
        
        <div>Value: {value}</div>
        <div>New Value: {newValue}</div>

        <div>User Status: {userStatus}</div>
        <div>New User Status: {userNewStatus}</div>

        <button onClick={onClickHandler}>Value :)</button>
        <button onClick={onNewvalueClickHandler}>New Value :)</button>
        </>
    )
}