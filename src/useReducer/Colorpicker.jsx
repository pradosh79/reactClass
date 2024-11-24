import React,{ useReducer } from 'react'

const initialState = {
    input: 'blue'
  };

  function reducer(color, action) {
    switch (action.type) {
      case 'SET_INPUT':
        return {...color, input: action.payload };
      default:
        return color;
    }
  }
  
export default function Colorpicker() {

    const [color, dispatch] = useReducer(reducer, initialState);
  console.log(color,"j")
  const changeColor = (e) => {
    dispatch({ type: 'SET_INPUT', payload: 'blue' ? 'red' : 'blue' });
  };
  return (
    <>
    <div>
      <div
        style={{
          backgroundColor: color.input,
          width: '200px',
          height: '200px',
          margin: '20px auto'
        }}
      >
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
    </>
  )
}
