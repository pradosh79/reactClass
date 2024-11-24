import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Fetchdata() {
    const[input, setInput]=useState('');
    const [output,setOutput]=useState();
    const[show, setShow]=useState('');

    useEffect(() => {
        fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {
            setOutput(data.products);
          });
      }, []);
  console.log(output,'aaaa');

    

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
                    <Link to={`/details/${data.id}`}>({data.id}) {data.products}</Link>
                  </li>
              )}
          </ul>
      </>
  );
}

