import React from 'react'
import { useParams } from 'react-router-dom'

export default function Child() {
    const{id}=useParams();
    console.log(id);
  return (
    <>
    {id==1?"Hello One":''}
    {id==2?"Hello two":''}
    {id==3?"Hello three":''}
    </>
  )
}
