import React from 'react';
import style from './Nav.module.css';
import LogoNav from './UI/LogoNav';


function Nav() {
  return (
    <div className={style.navback}>
      <div className={style.nav}>
        <LogoNav theme={'#000000'} uten={"#000000"} stroke={'#000000'} />

        <div className={style.navitem}>
          <div className={style.item}>Lagos</div>
          <div className={style.item}>Contact</div>

        </div>

      </div>
    </div>
  )
}

export default Nav