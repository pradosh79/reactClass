import React,{useState} from 'react'

    
export default function ColorChanger() {
    const [color, setColor] = useState('blue'); // Initial color is 'blue'
  
    const changeColor = () => {
      setColor(color === 'blue' ? 'red' : 'blue'); // Toggles between blue and red
    };
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          margin: '20px auto'
        }}
      >
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}
