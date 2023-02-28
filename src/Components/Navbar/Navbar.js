import React from 'react'
import { GoLocation } from "react-icons/go"
import "./Navbar.css"
function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <GoLocation className='navbar__locIcon' />
                <div>India</div>
            </div>
            <div className='navbar__right'>
                <input className='navbar__input' type="text" placeholder='Search for anything' />
                <img src="/" alt='User' className='navbar__image' />
            </div>
        </div>
    )
}

export default Navbar