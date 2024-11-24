import React, { useReducer } from "react";

// Reducer function
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       if (state.count < 10) {
//         return { count: state.count + 1 };
//       }

//       break;
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    if (state?.count < 10) {
      return { count: state?.count + 1 };
    } else {
      return state;
    }
  } else if (action.type === "DECREMENT") {
    return { count: (state?.count || 0) - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else {
    return state;
  }
};

export default function Counter() {
  // Initial state
  const initialState = {
    count: 0,
  };

  // State and dispatch using useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);

  console.log(dispatch);

  console.log(state);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}