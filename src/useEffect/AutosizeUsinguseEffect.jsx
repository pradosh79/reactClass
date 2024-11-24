import React,{ useEffect, useState } from 'react'

export default function AutosizeUsinguseEffect() {
    const[counter,setCount] = useState(window.innerWidth + " x "+ window.innerHeight);
    
    window.addEventListener("resize" , e => setCount(window.innerWidth + " x "+ window.innerHeight))
    useEffect( () => {
    
        
        setCount(window.innerWidth + " x "+ window.innerHeight);
            
    }, [counter]);

  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}
