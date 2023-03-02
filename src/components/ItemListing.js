import React, { useState, useContext } from 'react';
import style from './ItemListing.module.css';
import Card from './UI/Card';
import { dataContext } from './Dependencies/dataContext';

function ItemListing(props) {

    const {setCart} = useContext(dataContext)
    const [name, setName] = useState('')
    const [qty, setQty] = useState(0)

    const addClickHandler = () => {
        setQty((prev) => prev + 1)
        setName(props.name)
        setCart(name,qty)
    }

    const subClickHandler = () => {
        if (qty > 0) {
            setQty((prev) => prev - 1)
            setName(props.name)
            setCart(name,qty)
        } else {
            return
        }
    }

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
                <div className={style.ord}><button className={style.btn} onClick={addClickHandler}><span className={`material-symbols-outlined ${style.add}`}>add</span></button>
                    <button className={style.btn} onClick={subClickHandler}><span className={`material-symbols-outlined ${style.add}`}>remove</span></button></div>
            </div>

        </div>

    )
}

export default ItemListing