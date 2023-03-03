import React, { useState, useContext, useEffect } from 'react';
import style from './ItemListing.module.css';
import Card from './UI/Card';
import { dataContext } from './Dependencies/dataContext';

function ItemListing(props) {

    const { state, setCart, setCartno } = useContext(dataContext)
    const [name, setName] = useState("")
    const [qty, setQty] = useState(0)


    useEffect(() => {

        if ((qty == 0) && (name == "")) {
            return

        } else {
            
            setCart(name, qty);
            //setCartno(qty)
            //console.log(state.cartno)
            //console.log(qty)
        }

    }, [qty])

    

    const addClickHandler = () => {
        setQty((prev) => prev + 1)
        setName(props.name)
        //setCartno(qty)

    }

    const subClickHandler = () => {

        if (qty > 0) {
            setQty((prev) => prev - 1)
            //setCartno(0 - 1)

        } else {
            setQty(0)

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