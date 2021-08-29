import React from 'react'
import style from './NavBar.module.css'

const navBar = () => {
    return (
        <div className={style.navBar}>
            <div className={style.todoText}>
                Todo Web
            </div> 
        </div>
    )
}

export default navBar
