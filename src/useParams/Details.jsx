import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {
    const[show, setShow]=useState('');
    const [output,setOutput]=useState();
    const{id}=useParams();
    console.log(id);
    useEffect(() => {
        if (id) {
          const handleApi = async () => {
            try {
              let response = await fetch(
                `https://dummyjson.com/products/${id}`
              );
              let data = await response.json();
              
              setOutput(data);
            } catch (error) {
              console.error(error);
            }
          }
            const delayTimer = setTimeout(() => {
                handleApi();
            }, 200);
            return () => clearTimeout(delayTimer);
        }
        
    }, [id]);
    console.log(output);
  return (
    <>{output?.brand}</>
  )
}
