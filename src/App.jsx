import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0); // [stateVariable, setterFunction]

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello!</h1>
      <div>This is amazing!</div>
      <button onClick={handleBtnClick} className="btn-secondary">
        Click Me!
      </button>
      <div>Count: {count}</div>
    </>
  );
};
