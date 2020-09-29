import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <div className='nav-bar'>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/stocks'>
                    <li>Stocks</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav