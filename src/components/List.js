import React from 'react'
import iconCheck from '../images/icon-check.svg'
import iconClose from '../images/icon-cross.svg'
import '../styles/app.css'

const List = (props) => {
    const {data} = props;
    return (
        <section className='todo-list card'>
            <>
           {data.map( (item)=>{
               return (
                <div key={item.id} className='todo-item container'>
                    <img src={iconCheck} className={'check'+" "+(item.isActive || "checked")} alt='check'/>
                    <p className={"todo-text"+" "+(item.isActive || 'non-active')}>{item.text}</p>
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
