import React, { useContext } from 'react'
import CounterContext from './countercontext';

export default function CounterShow() {
    const { count } = useContext(CounterContext);
  return (
    <>
    {count}
    </>
  )
}
