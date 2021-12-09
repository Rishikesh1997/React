import React from "react";
import RefChild from "./RefChild";

export default()=>{
  const inputRef = React.createRef();
  const OnButtonClickHandler =()=>{
      console.log(inputRef);
      inputRef.current.focus();
 };
 return(
     <>
     <h1>In RefParent</h1>
     
     <input 
     ref={inputRef} 
    //  {/* <RefChild ref={inputRef} /> */}
     className="my-custom-class"/>
    <button onClick= {OnButtonClickHandler}>Click Me</button>
     </>
 );
};