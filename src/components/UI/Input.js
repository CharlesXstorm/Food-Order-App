import React, { useRef, useContext } from 'react';
import { dataContext } from '../Dependencies/dataContext';

import style from './Input.module.css'

function Input() {

  const inputRef = useRef();
  const { setInput } = useContext(dataContext)

  const submitHandler = (event) => {
    event.preventDefault();
    //props.refs(inputRef.current.value)
    setInput(inputRef.current.value)
    inputRef.current.value = "";
    inputRef.current.blur();

  }

  return (
    <form className={style.input} onSubmit={submitHandler}>
      <div className={style.span}><span className={`material-symbols-outlined ${style.search}`}>search</span></div> <input ref={inputRef} type='text' placeholder='Search in Food Menu' />
    </form>
  )
}

export default Input