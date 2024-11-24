import React,{ useState } from 'react'
import CounterIncrement from './CounterIncrement';
import Counterdecrements from './counterdecrements';
import CounterContext from './countercontext';

export default function CounterParents(props) {
    const [count, setCount] = useState(0);

// Functions to update the count
const increment = () => setCount(prevCount => prevCount + 1);
const decrement = () => setCount(prevCount => prevCount - 1);
  return (
    <>
    <CounterContext.Provider value={{ count, increment, decrement }}>
    {props.children}
    </CounterContext.Provider>
   
    </>
  )
}
