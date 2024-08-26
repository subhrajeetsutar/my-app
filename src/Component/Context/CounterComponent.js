import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const DisplayCounter = () => {
  const { count } = useContext(CounterContext);
  return <h1>Counter: {count}</h1>;
};

const IncreaseCounter = () => {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase Count</button>;
};

export { DisplayCounter, IncreaseCounter };
