import React from 'react'
import style from './TodoList.module.css'
import Todo from '../Todo/Todo'

const TodoList = () => {
    let todos: Array<String> = ["Task 1", "Task 2", "Task 3"];
    return (
        <div className={style.conCen}>
            <div>
                Ongoing :
            </div>
            <div>
            {todos.map(todo => <Todo todo={todo}/>)}
            </div>
        </div>
    )
}

export default TodoList
