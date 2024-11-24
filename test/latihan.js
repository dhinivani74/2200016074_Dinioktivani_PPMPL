import React, { useState } from 'react';

// Counter Component
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button
        data-testid="increment-button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        data-testid="decrement-button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </button>
      <button
        data-testid="reset-button"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

// Greeting Component
export const Greeting = ({ name }) => {
  if (!name) {
    console.error('Name is required for Greeting component.');
    return null;
  }

  return <h1 data-testid="greeting">Hello, {name}</h1>;
};

// AlertButton Component
export const AlertButton = ({ message }) => {
  const handleClick = () => {
    if (!message) {
      console.error('Message is required for AlertButton component.');
      return;
    }
    alert(message);
  };

  return (
    <button data-testid="alert-button" onClick={handleClick}>
      Show Alert
    </button>
  );
};
