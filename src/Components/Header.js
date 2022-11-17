import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

export default function Header() {
  return (
    <div className='navbar'>
        <nav className='footnote'>
            <h1 className='header'>NewsApp</h1>
            <Link to='/Search'>
              <div className='search'>Search the News</div>
            </Link>
        </nav>
    </div>
  )
}
