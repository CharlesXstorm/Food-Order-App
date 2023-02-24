import React from 'react';
import style from './Input.module.css'

function Input() {
  return (
    <div className={style.input}>
        <div className={style.span}><span className={`material-symbols-outlined ${style.search}`}>search</span></div> <input type='text' placeholder='Search in Food Menu' />
    </div>
  )
}

export default Input