import React, {useState} from 'react';
import { CounterContext } from './CounterContext';

const CounterProvider = ({ child }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {child}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
