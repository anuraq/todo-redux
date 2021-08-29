import React from 'react'
import style from './Todo.module.css'

const Todo = ({todo}) => {
    return (
        <div className={style.todoCon}>
            <span>{todo}</span>
            <div className={style.btns}>
                
                <div>Done</div>
                <div>Delete</div>
            </div>
        </div>
    )
}

export default Todo
