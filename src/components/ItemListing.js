import React from 'react';
import style from './ItemListing.module.css';
import Card from './UI/Card';

function ItemListing(props) {


    return (

        <div className={style.itemlist}>
            <div className={style.desc}>
                <div><img className={style.img} src={props.src} alt={props.name} /> </div>
                <div>
                    <div className={style.food}>{props.name}</div>
                    <p className={style.paragh}>{props.desc}</p>
                </div>
            </div>

            <div className={style.base}>
                <div className={style.price}>&#8358;{props.price}</div>
                <button className={style.btn}><span className={`material-symbols-outlined ${style.add}`}>add</span></button>
            </div>

        </div>

    )
}

export default ItemListing