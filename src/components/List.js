import React from 'react'
import iconClose from '../images/icon-cross.svg'
import '../styles/app.css'

const List = (props) => {
    const {isActiveHandler, data, isDark, filter, deleteHandler, clearClickHandler} = props;
    const filteredData = data.filter((elem)=>{
        if (filter === 'completed') return !elem.isActive 
        else if (filter === 'active') return elem.isActive
        return true
     })

    return (
        <section className={'todo-list card '+(isDark && 'dark-card')}>
            <>
           {filteredData.map((item)=>{
               return (
                <div key={item._id} className='todo-item container'>
                    <div onClick={()=> isActiveHandler(item._id)} className={'check '+(item.isActive || "checked")}>   
                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke={item.isActive?"none":"#FFF"} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                    </div>
                    <p style={{color:(isDark && 'var(--DTlightGrayishBlue)')}} className={"todo-text "+(item.isActive || 'non-active')}>{item.text}</p>
                    <img onClick={()=> deleteHandler(item._id)} src={iconClose} className='close' alt='close'/>
                </div>)
           })}
            </>
            <div className='list-end'> 
            <p className='items-left'>{data.filter((elem)=> elem.isActive).length} items left</p>
            <p onClick={()=> clearClickHandler()} className='clear-items'>Clear Completed</p>
            </div>
        </section>
    )
}

export default List
