import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <ul className='navBar'>
        <li>
        <Link to="/">Main Page</Link>
        </li>
        <li>
        <Link to="/posts">Posts Page</Link>
        </li>
      </ul> 
    </>
  )
}
