import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NoteContext } from './parent2';


export default function ProductDetails() {
  const [show, setShow] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(null);
  const products = useContext(NoteContext);
  console.log(products);
  const { id } = useParams();

  // Handle undefined or empty products gracefully
  if (products || products.length === 0) {
    return <p>Loading product details...</p>; // Show a loading or fallback message
  }
  
  //useEffect(() => {
    //if (show) {
      const fetchSearchResults = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(
            `https://dummyjson.com/products/${id}`
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
   //}
  //}, [show, navigate]);
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}