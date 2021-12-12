import { useState } from "react";

export default () => {
  const [myArr, setMyArr] = useState(["a", "b", "c", "d"]);

  const addElementHandler = () => {
    setMyArr(["e", ...myArr]);
  };

  return (
    <>
      <h1>In Reconciliation1</h1>
      <>
        {myArr.map((element) => {
          return <div key={element}>{element}</div>;
        })}
      </>
      <button onClick={addElementHandler}>Add Element</button>
    </>
  );
};
