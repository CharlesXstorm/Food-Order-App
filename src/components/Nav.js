import React, { useContext, useEffect } from 'react';
import style from './Nav.module.css';
import LogoNav from './UI/LogoNav';
import { dataContext } from './Dependencies/dataContext';


function Nav() {

  const { setInput } = useContext(dataContext)

  const submitHandler = () => {
    setInput("")
    //console.log('reload')
  }

 



  return (
    <div className={style.navback}>
      <div className={style.nav}>
        <LogoNav theme={'#000000'} uten={"#000000"} stroke={'#000000'} onClick={submitHandler} />

        <div className={style.navitem}>
          <div className={style.item}>Lagos</div>
          <div className={style.item}>Contact</div>

        </div>

      </div>
    </div>
  )
}

export default Nav