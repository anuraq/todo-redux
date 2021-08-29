import React from 'react'
import style from './AddTodo.module.css'

const AddTodo = () => {
    return (
        <div className={style.conCen}>
            <input className={style.inpBox}></input>
            <div className={style.addBtn}>ADD</div>
        </div>
    )
}

export default AddTodo
