import { useEffect } from "react"

export default (value) => {
    //useEffect
    useEffect(() => {
        console.log(value);
        // we can make API call here
    }, [value]);
};