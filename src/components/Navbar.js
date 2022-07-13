import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.scss'
import logo from '../logo.svg'
export default function Navbar(props) {
  return (
    <header className='header'>
        <Link to='/home' className='logo'>
            <img src={logo} />
        </Link>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/home'>React hook practice</Link>
                </li>
                <li>
                    <Link to='/todo'>Todo List</Link>
                </li>
                <li>
                    <Link to='/about'>React Advanced</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
