import React from "react";

export default () => {
  //   return (
  //     <div>
  //       <h1 style={{ backgroundColor: "red" }}>In DemoComponent</h1>
  //       <h2>In DemoComponent</h2>
  //     </div>
  //   );

  //-------------------------//

  //   return (
  //     <>
  //       <div>
  //         <h1 style={{ backgroundColor: "red" }}>My Heading</h1>
  //         <h1 style={{ backgroundColor: "green" }}>My Sub-Heading</h1>
  //         <div style={{ backgroundColor: "yellow" }}>
  //           <p style={{ color: "orange" }}>This is my First Paragraph</p>
  //           <p style={{ color: "blue" }}>This is my Second Paragraph</p>
  //         </div>
  //       </div>
  //     </>
  //   );

  //------------------------------------//

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "My Heading"
    ),
    React.createElement(
      "h1",
      { style: { backgroundColor: "green" } },
      "My Sub-Heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement(
        "p",
        { style: { color: "orange" } },
        "This is my First Paragraph"
      ),
      React.createElement(
        "p",
        { style: { color: "blue" } },
        "This is my Second Paragraph"
      )
    )
  );

  //-------------------------------------//

  //   return React.createElement("h1", null, "In DemoComponent" );
  //passing inner html
  //------------------------------//
  //   return React.createElement(
  //     "h1",
  //     null,
  //     React.createElement("h1", null, "In DemoComponent")
  //   );
  //   //passing child nodes
  //------------------------------//
  //   return React.createElement(
  //     "h1",
  //     null,
  //     React.createElement(
  //       "h1",
  //       { style: { backgroundColor: "cyan" } },
  //       "In DemoComponent"
  //     ),
  //     React.createElement(
  //       "h2",
  //       { style: { backgroundColor: "red" } },
  //       "In DemoComponent"
  //     )
  //   );
  //------------------------------//
};
