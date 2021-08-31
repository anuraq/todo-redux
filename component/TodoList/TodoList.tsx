import React from 'react'
import style from './TodoList.module.css'
import Todo from '../Todo/Todo'
import {todoStr} from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'

interface TodoListInterface {
    title: String,
    todos: Array<todoStr>
}

const TodoList = (props: TodoListInterface) => {
    console.log(props.todos)
    return props.todos.length != 0 ? (
        <div className={style.conCen}>
            <div>
                {props.title} :
            </div>
            <div>
            {props.todos?.map(todo => <Todo todo={todo} />)}
            </div>
        </div>
    ) : <></>
}

export default TodoList
