import { FC, useState } from "react";

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Increment <span data-testid="counter">{counter}</span>
    </button>
  );
};

export default Counter;
