
import React from 'react'
import moonIcon from "./images/icon-moon.svg"
import sunIcon from "./images/icon-sun.svg"
import './styles/app.css'

function Header() {
    return (
        <header className='header'>
        <h1 className='title'>todo</h1>
        <img className='theme-icon' src={moonIcon} alt='theme'/>
        </header>
    )
}

export default Header
