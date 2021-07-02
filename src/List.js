import React from 'react'
import iconCheck from './images/icon-check.svg'
import iconClose from './images/icon-cross.svg'
import './styles/app.css'

const data = [
     {
     id: 1,
     text: 'Do this, do that',
     isActive: true} ,
     {
      id: 2,
     text: 'Do that and grind, then do that',
     isActive: true} ,
     {
      id: 1,
     text: 'Grind. grind grind',
     isActive: true} ,
     {
     id: 1,
     text: 'You know, grind',
    isActive: true} ,
]
const List = () => {
    return (
        <section className='todo-list card'>
            <>
           {data.map( (item)=>{
               return (
                <div className='todo-item container'>
                    <img src={iconCheck} className='check' alt='check'/>
                    <p className="todo-text">{item.text}</p>
                    <img src={iconClose} className='close' alt='close'/>
                </div>)
           })}
            </>
            <div className='list-end'> 
            <p className='items-left'>{data.filter((elem)=> elem.isActive).length} items left</p>
            <p className='clear-items'>Clear Completed</p>
            </div>
        </section>
    )
}

export default List
