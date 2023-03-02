import React, { useContext } from 'react';
import style from './Cart.module.css';
import Cartlist from './Cartlist';
import { dataContext } from './Dependencies/dataContext';

function Cart(props) {

    const { state } = useContext(dataContext)

    //console.log(state.cart)

    return (
        <React.Fragment>
            <div className={style.cartheader}><h2>Your Food</h2></div>
            <div className={style.cartbody}>
                {false && <div className={style.bag}>
                    <span className={`material-symbols-outlined ${style.shopping}`}>shopping_bag</span>
                </div>}
                {true && <div className={style.cartlist}>
                    <Cartlist qty={'2'} desc={'Egusi Soup'} />
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