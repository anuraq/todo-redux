import React, { useRef } from 'react'
import style from './AddTodo.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {add} from '../../redux/todoSlice'

const AddTodo = () => {
    const todo = useSelector(state => state.value)
    const dispatch = useDispatch()
    const ref = useRef();
    return (
        <div className={style.conCen}>
            <input ref={ref} className={style.inpBox}></input>
            <div className={style.addBtn} onClick={() => dispatch(add({data: ref.value, status: 0}))}>ADD</div>
        </div>
    )
}

export default AddTodo
