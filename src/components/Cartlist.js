import React from 'react';
import style from './Cartlist.module.css';

function Cartlist(props) {

    //console.log(props)
    return (
        <React.Fragment>
            <div className={style.desc}><span className={style.spanbold}>{`${props.qty}X`}</span> <span className={style.spancart}>{`${props.name}`}</span></div>
        </React.Fragment>
    )
}

export default Cartlist