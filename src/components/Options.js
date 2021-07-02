import React from 'react'
import '../styles/app.css'

const Options = (props) => {
    const {isDark} = props
    return (
        <div className={'options-container '+(isDark && 'dark-card')}>
            <h3 className='filter'>All</h3>
            <h3 className='filter'>Active</h3>
            <h3 className='filter'>Completed</h3>
        </div>
    )
}

export default Options
