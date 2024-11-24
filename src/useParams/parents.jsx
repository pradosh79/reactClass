import React from 'react'
import { Link } from 'react-router-dom'


export default function Parents() {
  return (
    <>
     <Link to={`/details/1`}>Button1</Link>
     <Link to={`/details/2`}>Button2</Link>
     <Link to={`/details/3`}>Button3</Link>
    </>
  )
}
