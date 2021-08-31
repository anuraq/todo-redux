import React from 'react'
import style from './Todo.module.css'
import { remove, todoStr } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { toggleStatus } from '../../redux/todoSlice'

const Todo = ({todo}: {todo : todoStr}) => {
    const dispatch = useDispatch()
    return (
        <div className={style.todoCon}>
            <span>{todo.data}</span>
            <div className={style.btns}>
                {
                    todo.status == 'on' ?
                (<>
                <div onClick={() => {
                    dispatch(toggleStatus(todo.id))
                }} >Done</div>
                <div onClick={() => {
                    dispatch(remove(todo.id))
                }}>Delete</div>
                </>) :
                (<div className={style.redoBtn}
                    onClick={() => {
                    dispatch(toggleStatus(todo.id))
                }}>
                    Redo
                </div>)
                }
            </div>
        </div>
    )
}

export default Todo
