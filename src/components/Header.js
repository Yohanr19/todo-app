
import React from 'react'
import moonIcon from "../images/icon-moon.svg"
import sunIcon from "../images/icon-sun.svg"
import '../styles/app.css'

function Header(props) {
    const {isDark, themeSwitcher} = props
    return (
        <header className='header' >
        <h1 className='title'>todo</h1>
        <img onClick= {()=> themeSwitcher(!isDark)} className='theme-icon' src={isDark?sunIcon:moonIcon} alt='theme'/>
        </header>
    )
}

export default Header
