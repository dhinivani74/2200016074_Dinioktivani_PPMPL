import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button data-testid="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button data-testid="reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
