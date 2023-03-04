import React from 'react';
import ItemListing from './ItemListing';
import style from './Items.module.css';
//import { foodApi } from './Dependencies/foodData';

function Items(props) {

    const category = props.category;
    const data = props.data

    return (
        <div className={style.items}>
            <div className={style.items_header} id={props.id}>{category}</div>
            <div className={style.items_body}>
                {data.map((item) => <ItemListing key={item.id} name={item.name} desc={item.desc} price={item.price} src={item.src} />)}

            </div>
        </div>
    )
}

export default Items