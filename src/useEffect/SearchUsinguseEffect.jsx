import React, { useEffect,  useState} from 'react'

export default function Search() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [show, setShow] = useState('');
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(resp => resp.json()).then(res => setOutput(res.products));

    }, []);

    useEffect(() => {
        if (show) {
          const handleApi = async () => {
            try {
              let response = await fetch(
                `https://dummyjson.com/products/search?q=${show}`
              );
              let data = await response.json();
              setOutput(data.products);
            } catch (error) {
              console.error(error);
            }
          }
            const delayTimer = setTimeout(() => {
                handleApi();
            }, 200);
        }
        
    }, [show]);

    const onSearch = e => {
        e.preventDefault();
        setShow(input);
    }
    console.log(output);
    
    return (
        <>  
            <input type='text' onInput={onSearch} onChange={e=> setInput(e.target.value)} value={input} placeholder='search'/>
            <button onClick={onSearch}>Search</button>
            <ul>
            {Array.isArray(output) && output.map( (data , key)=>
                <li key={key}>{data.title}</li>
            )}
            </ul>
        </>
    )
}