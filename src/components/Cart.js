import React, { useContext, useState, useEffect } from 'react';
import style from './Cart.module.css';
import Cartlist from './Cartlist';
import { dataContext } from './Dependencies/dataContext';

function Cart(props) {

    const { state, setCartno } = useContext(dataContext);
    const [cartdata, setCartdata] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)


    let cart = { ...state.cart }
    let cartKeys = [...Object.keys(state.cart)]

    let filteredKeys = cartKeys.filter((kys) => cart[kys][1] != 0)
    let newdata = [...cartdata]
    let sum = 0


    useEffect(() => {

        filteredKeys.forEach((key, ind, arr) => {

            arr[ind] = { name: cart[key][0], qty: cart[key][1] }

        })


        setCartdata([...filteredKeys]);

        //props.cartno(sum)

    }, [state, setCartdata])



    if (cartdata.length > 0) {
        //setIsEmpty((prev) => !prev)
        newdata.forEach((key, ind, arr) => {
            arr[ind] = key.qty
        })


        for (let any of newdata) {
            sum += any

        }

        props.cartno(sum)
        //setIsEmpty((prev)=> !prev)

    } else {
        props.cartno(0)
        //setIsEmpty((prev)=> !prev)
    }



    return (
        <React.Fragment>
            <div className={style.cartheader}><h2>Your Food</h2></div>
            <div className={style.cartbody}>
                {false && <div className={style.bag}>
                    <span className={`material-symbols-outlined ${style.shopping}`}>shopping_bag</span>
                </div>}
                {true && <div className={style.cartlist}>
                    {
                        cartdata.map((item) => <Cartlist key={item.name} name={item.name} qty={item.qty} />)
                    }
                </div>}
            </div>
            <div className={style.cartdesc}>
                {false && <p className={style.para}>You've not added any food yet. When you do, you'll see them here!</p>}
                {true && <button className={style.btn}>Order Now</button>}
            </div>
        </React.Fragment>
    )
}

export default Cart