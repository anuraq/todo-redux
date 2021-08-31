import React from 'react'
import TodoList from '../TodoList/TodoList'
import { useSelector, useDispatch } from 'react-redux';
import { todoStr } from '../../redux/todoSlice'
import { RootState } from '../../redux/store'

const TodoListCon = () => {
    // const todo: todoStr[] = useSelector((state: RootState) => state.todos.values)
    const todo : todoStr[] = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch()
    console.log(todo)
    return (
        <div>
            <TodoList title={"Done"} todos={todo?.filter(t => t.status == 'done')}/>
            <TodoList title={"Ongoing"} todos={todo?.filter(t => t.status == 'on')}/>
        </div>
    )
}

export default TodoListCon
