import React, { useState, useEffect } from "react";

const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.title = `you have clicked ${count} times`
  })

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}> I've been clicked {count} times</button>

      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        alt='FlashLight icons'
        onClick={toggleLight}
        style={{
          height: "50px",
          width: "50px",
        }}
      />
    </>
  );
};

export default AppFunction;
