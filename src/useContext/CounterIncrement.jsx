import React, { useContext } from 'react';
import CounterContext from './countercontext';
//import { CounterContext } from './countercontext';

export default function CounterIncrement() {
    const { increment } = useContext(CounterContext);

    return (
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    );
}