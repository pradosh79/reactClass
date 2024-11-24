import React from 'react'
import NoteContex from './context';

export default function Parent(props) {
    const state={name:'Pradosh',age:39,address:'Katwa'};
   
  return (
    <>
     <NoteContex.Provider value={state}>{props.children}</NoteContex.Provider>
    
    </>
  )
}
