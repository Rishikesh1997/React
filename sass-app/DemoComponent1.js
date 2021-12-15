import React from "react";
import Increment from "./Increment";
import Incrementer from "./Incrementer";

export default () => {
  //   return (
  //
  //       <Incrementer
  //         render={(value, onClickHandler) => {
  //           return (
  //             <>
  //               <Increment value={value} onClickHandler={onClickHandler} />
  //             </>
  //           );
  //         }}
  //       />
  //
  //   );

  // return React.createElement(
  //   "div",
  //   " render={(value, onclickHandler)}",
  //   <Increment />,
  //   React.createElement(
  //     "div",
  //     React.createElement("div", " render={(onclickHandler)}", <Incrementer />)
  //   )
  // );

  return React.createElement(
    <Incrementer />,
    " render={(value, onclickHandler)}",
    null
  );
};
