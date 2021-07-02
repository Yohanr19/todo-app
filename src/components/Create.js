import React, {useState} from 'react'
import '../styles/app.css'

const Create = (props) => {
    const {isDark , createItem} = props
    const [value, setValue] = useState()
    const changeHandler = (e)=>{
        setValue(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        createItem(value);
        setValue('');
    }

    return (
    <form className={'create-todo card '+(isDark && 'dark-card')} onSubmit={(e)=> submitHandler(e)}>
        <button className='check'>   
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
         </button>
        <label htmlFor='new-todo'></label>
        <input style={{color: isDark && 'var(--DTdarkGrayishBlue)'}} onChange={(e)=>changeHandler(e)} value={value} type='text' id='new-todo' className='todo-input' required placeholder='Create a new todo...'></input>
    </form>
    )
}

export default Create
