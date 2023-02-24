import React from 'react';
import style from './Cart.module.css';

function Cart() {
    return (
        <React.Fragment>
            <div className={style.cartheader}><h2>Your Food</h2></div>
            <div className={style.cartbody}>
                {true && <div className={style.bag}>
                    <span  className={`material-symbols-outlined ${style.shopping}`}>shopping_bag</span>
                </div>}
                {false && <div>
                    Cartlist
                </div>}
            </div>
            <div className={style.cartdesc}>
                {true && <p className={style.para}>You've not added any food yet. When you do, you'll see them here!</p>}
                {false && <button>Order btn</button>}
            </div>
        </React.Fragment>
    )
}

export default Cart