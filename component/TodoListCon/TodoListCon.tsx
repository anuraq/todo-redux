import React from 'react'
import TodoList from '../TodoList/TodoList'
import { useSelector, useDispatch } from 'react-redux';
import {todoStr} from '../../redux/todoSlice'

const TodoListCon = () => {
    const todo: Array<todoStr> = useSelector(state => state.value);
    const dispatch = useDispatch()
    return (
        <div>
            <TodoList title={"Done"} todos={todo?.filter(t => t.status == 0)}/>
            <TodoList title={"Ongoing"} todos={todo?.filter(t => t.status == 1)}/>
        </div>
    )
}

export default TodoListCon
