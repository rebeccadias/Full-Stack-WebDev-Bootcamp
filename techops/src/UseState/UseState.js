import React, { useState } from "react";

const UseStateComp = () => {
  const [count, SetCount] = useState(0);

  const increaseCount = () => {
    SetCount((preState) => preState + 10);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Counter is {count} </h3>
      <button onClick={increaseCount}> Increase Count </button>
      <button onClick={() => SetCount((preState) => preState - 100)}>
        Decrease Count
      </button>
      <button onClick={() => SetCount(0)}> Reset Count </button>
      <div>testing</div>
    </div>
  );
};

export default UseStateComp;
