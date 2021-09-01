import React, { useRef, useState, useEffect } from 'react'
import style from './AddTodo.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {add} from '../../redux/todoSlice'
import { todoStr } from '../../redux/todoSlice'
import { RootState } from '../../redux/store'

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const idvalue = useRef(3);
    const inputBox = useRef<any>(null);
    const handleClick = () => {
        if(text == '') return;
        dispatch(add({id: idvalue.current, data: text, status: 'on',}))
        setText("");
        inputBox.current.value = '';
        idvalue.current += 1;
    }
    return (
        <div className={style.conCen}>
            <input ref={inputBox} className={style.inpBox} onChange={() => setText(inputBox.current.value)} onKeyUp={(e)=> (e.code == 'Enter') ? handleClick() : 0}></input>
            <div className={style.addBtn} onClick={handleClick}>ADD</div>
        </div>
    )
}

export default AddTodo
