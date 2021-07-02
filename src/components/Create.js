import React from 'react'
import '../styles/app.css'

const Create = (props) => {
    const {isDark} = props
    return (
    <form className={'create-todo card '+(isDark && 'dark-card')}>
        <div className='check'>   
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
         </div>
        <label htmlFor='new-todo'></label>
        <input style={{color: isDark && 'var(--DTdarkGrayishBlue)'}} type='text' id='new-todo' className='todo-input' required placeholder='Create a new todo...'></input>
    </form>
    )
}

export default Create
