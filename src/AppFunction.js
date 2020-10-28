import React, { useState } from "react";

const AppFunction = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={incrementCount}> I've been clicked {count} times</button>
  );
};

export default AppFunction;
