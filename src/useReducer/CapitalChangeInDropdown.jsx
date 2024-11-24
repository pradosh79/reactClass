import React, { useReducer } from 'react';

const initialState = {
  input: 'New Delhi', // Default value to match the value in the options
};

function reducer(capital, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...capital, input: action.payload };
    default:
      return capital;
  }
}

export default function CapitalChangeInDropdown() {
  const [capital, dispatch] = useReducer(reducer, initialState);

  const capitals = [
    { label: "India", value: "New Delhi" },
    { label: "Bangladesh", value: "Dhaka" },
    { label: "China", value: "Beijing" },
    { label: "Pakistan", value: "Islamabad" },
  ];

  const onChangeFun = (e) => {
    dispatch({ type: 'SET_INPUT', payload: e.target.value });
  };

  return (
    <>
      <select value={capital.input} onChange={onChangeFun}>
        {capitals.map((capitalOption) => (
          <option key={capitalOption.value} value={capitalOption.value}>
            {capitalOption.label}
          </option>
        ))}
      </select>
      <div>{capital.input}</div>
    </>
  );
}

