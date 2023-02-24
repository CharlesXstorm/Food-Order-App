import React, { useState, useContext } from 'react';
import { dataContext } from './Dependencies/dataContext';
import Body from './Body';
import style from './Home.module.css';
import Nav from './Nav'
import StaticNav from './StaticNav';

function Home() {

    const { state } = useContext(dataContext);


    //console.log(bodyHeight)

    return (
        <div className={style.home}>
            <Nav />
            {true && <StaticNav IsStatic={state.bodyHeight < -150 ? true : false} />}
            <Body />
        </div>
    )
}

export default Home