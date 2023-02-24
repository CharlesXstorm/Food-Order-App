import React from 'react';
import style from './Animarrow.module.css';

function Animarrow() {
  return (
    <div className={style.animarrow}>
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

    </div>
  )
}

export default Animarrow