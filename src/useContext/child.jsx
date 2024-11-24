import React, { useContext } from 'react'
import NoteContex from './context';

export default function Child() {
    const data = useContext(NoteContex);
  return (
    <>
      {data.name}
      {data.age}
      {data.address}
    </>
  )
}
