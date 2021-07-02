import React from 'react'
import iconClose from '../images/icon-cross.svg'
import '../styles/app.css'

const List = (props) => {
    const {isActiveHandler, data, isDark} = props;

    return (
        <section className={'todo-list card '+(isDark && 'dark-card')}>
            <>
           {data.map( (item)=>{
               return (
                <div key={item.id} className='todo-item container'>
                    <div onClick={()=> isActiveHandler(item.id)} className={'check '+(item.isActive || "checked")}>   
                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke={item.isActive?"none":"#FFF"} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                    </div>
                    <p style={{color:(isDark && 'var(--DTlightGrayishBlue)')}} className={"todo-text "+(item.isActive || 'non-active')}>{item.text}</p>
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
