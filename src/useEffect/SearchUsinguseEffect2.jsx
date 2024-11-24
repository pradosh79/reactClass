import React, { useState, useEffect } from 'react';

export default function SearchUsinguseEffect2() {
    const[input, setInput]=useState('');
    const [output,setOutput]=useState();
    const[show, setShow]=useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
        .then(resp => resp.json())
        .then(res => setOutput(res.todos))
        .catch(error => console.error(error));

    }, []);


    useEffect(() => {
        if (show) {
          const handleApi = async () => {
            try {
              let response = await fetch(
                `https://dummyjson.com/todos/${show}`
              );
              let data = await response.json();
              
              setOutput([data]);
            } catch (error) {
              console.error(error);
            }
          }
            const delayTimer = setTimeout(() => {
                handleApi();
            }, 200);
            return () => clearTimeout(delayTimer);
        }
        
    }, [show]);

    const onSearch = e => {
        e.preventDefault();
        console.log(input);
        setShow(input);
    }
    console.log(setOutput);
    return (
      <>
          <input
              type='text'
              onInput={onSearch}
              onChange={e => setInput(e.target.value)}
              value={input}
              placeholder='search'
          />
          <button onClick={onSearch}>Search</button>
          <ul>
              {Array.isArray(output) && output.map((data, key) =>
                  <li key={key}>
                    ({data.id}) {data.todo} -- {data.userId}
                  </li>
              )}
          </ul>
      </>
  );
}

