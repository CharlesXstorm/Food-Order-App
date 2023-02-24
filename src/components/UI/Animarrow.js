import React from 'react';
import style from './Animarrow.module.css';

/*
<div className={style.arrow1}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
      </div>
      <div className={style.arrow2}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
      </div>
      <div className={style.arrow3}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
      </div>
*/

function Animarrow() {
  return (
    <div className={style.animarrow}>
      <span className={`material-symbols-outlined ${style.chev}`}>
        keyboard_double_arrow_down
      </span>

    </div>
  )
}

export default Animarrow