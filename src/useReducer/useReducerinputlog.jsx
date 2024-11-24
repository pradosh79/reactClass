 import React, { useReducer } from "react";

const initialState = {
  input: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return {...state, input: action.payload };
    default:
      return state;
  }
}

export default function UseReducerInput() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state,"j")
  const inputHandle = (e) => {
    dispatch({ type: 'SET_INPUT', payload: e.target.value });
  };

  return (
    <>
      <input value={state.input} onChange={inputHandle} />
      <p>Name: {state.input}</p>
    </>
  );
}