import React, { useContext } from 'react';
import CounterContext from './countercontext';
//import { CounterContext } from './countercontext';

export default function CounterDecrements() {
    const { decrement } = useContext(CounterContext);

    return (
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}
