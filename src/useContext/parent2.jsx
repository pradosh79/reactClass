import React, { useEffect, useState, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NoteContext = createContext();

export default function Parent2(props) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [show, setShow] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setOutput(data.products);
      } catch (err) {
        setError('Failed to fetch initial products.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialProducts();
  }, []);

  useEffect(() => {
    if (show) {
      const fetchSearchResults = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(
            `https://dummyjson.com/products/search?q=${show}`
          );
          const data = await response.json();
          setOutput(data.products || []);
          navigate('/search-results');
        } catch (err) {
          setError('Failed to fetch search results.');
        } finally {
          setIsLoading(false);
        }
      };

      const delayTimer = setTimeout(() => {
        fetchSearchResults();
      }, 300);

      return () => clearTimeout(delayTimer);
    }
  }, [show, navigate]);

  const onSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setShow(input.trim());
    } else {
      setShow('');
    }
  };

  return (
    <NoteContext.Provider value={output}>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search"
        />
        <button onClick={onSearch}>Search</button>

        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <ul>
          {Array.isArray(output) && output.length > 0 ? (
            output.map((data) => (
              <li key={data.id}>
                <Link to={`/product/${data.id}`}>{data.title}</Link>
              </li>
            ))
          ) : (
            !isLoading && <p>No results found.</p>
          )}
        </ul>
      </div>
      {props.children}
    </NoteContext.Provider>
  );
}