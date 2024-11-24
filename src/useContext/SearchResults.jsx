import React, { useContext } from 'react';
import NoteContex from './context2';

export default function SearchResults() {
  const data = useContext(NoteContex);
  console.log(data);
  return (
    <ul>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <li key={index}>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
          </li>
        ))
      ) : (
        <p>No search results available.</p>
      )}
    </ul>
  );
}
