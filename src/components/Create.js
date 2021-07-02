import React from 'react'
import iconCheck from '../images/icon-check.svg'
import '../styles/app.css'

const Create = () => {
    return (
    <form className='create-todo card'>
        <img src={iconCheck} className='check' alt='check'/>
        <label for='new-todo'></label>
        <input type='text'  id='new-todo' className='todo-input' required placeholder='Create a new todo...'></input>
    </form>
    )
}

export default Create
