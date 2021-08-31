import React, { useRef, useState, useEffect } from 'react'
import style from './AddTodo.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {add} from '../../redux/todoSlice'
import { todoStr } from '../../redux/todoSlice'
import { RootState } from '../../redux/store'

const AddTodo = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('');
    const idvalue = useRef(3);
    
    return (
        <div className={style.conCen}>
            <input className={style.inpBox} onChange={(e)=> setText(e.target.value)} ></input>
            <div className={style.addBtn} onClick={() => {dispatch(add({id: idvalue.current, data: text, status: 'on',}))
            setText("");
            idvalue.current += 1;
            console.log(text)}
            }>ADD</div>
        </div>
    )
}

export default AddTodo
