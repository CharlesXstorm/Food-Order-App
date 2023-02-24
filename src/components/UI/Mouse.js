import React from 'react';
import Animarrow from './Animarrow';
import style from './Mouse.module.css';

function Mouse() {
    return (
        <div className={style.mouse}>
            <Animarrow/>
            <div className={style.mouse_header}>scroll to explore</div>
            <div className={style.mouse_png}>
                <div className={style.mouse_border}>
                    <div className={style.mouse_div}>
                        <div className={style.mouse_sd}></div>
                        <div className={style.mouse_sd}></div>
                    </div>
                    <div className={style.mouse_div}>
                        <div className={style.mouse_base}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mouse