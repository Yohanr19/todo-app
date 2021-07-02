import React from 'react'
import '../styles/app.css'

const Options = (props) => {
    const {isDark, filter, setFilter} = props
    return (
        <div className={'options-container '+(isDark && 'dark-card')}>
            <h3 style={{color: (filter==='all')?"var(--PrimaryBrightBlue)":'var(--LTdarkGrayishBlue)'}}  onClick={()=>setFilter('all')} className='filter'>All</h3>
            <h3 style={{color: (filter==='active')?"var(--PrimaryBrightBlue)":'var(--LTdarkGrayishBlue)'}}  onClick={()=>setFilter('active')} className='filter'>Active</h3>
            <h3 style={{color: (filter==='completed')?"var(--PrimaryBrightBlue)":'var(--LTdarkGrayishBlue)'}}  onClick={()=>setFilter('completed')} className='filter'>Completed</h3>
        </div>
    )
}

export default Options
