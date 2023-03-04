import React, { useContext, useState } from 'react';
import { dataContext } from './Dependencies/dataContext';
import style from './Section.module.css';
import SectLogo from './UI/SectLogo';

function Section() {

    const { state } = useContext(dataContext)
    const [isexpanded, setIsexpanded] = useState(true)

    const onClickHandler = () => {
        setIsexpanded((prev) => !prev)
    }

    return (
        <div className={style.wrapper} style={{ top: `${state.staticNav + 50}px` }}>
            <div className={style.sectionheader}>
                <SectLogo />
                <div>Sections</div>
            </div>
            <div className={style.sectionbody}>

                <div className={style.bodystatic}>Top Sellers</div>
                <div className={`${style.bodystatic} ${style.staticbtn}`}>Menu
                    <button className={style.btn} onClick={onClickHandler}>
                        {isexpanded && <span className="material-symbols-outlined">expand_more</span>}
                        {!isexpanded && <span className="material-symbols-outlined">expand_less</span>}
                    </button>
                </div>

                <div className={`${style.bodycollapse} ${!isexpanded && style.bodyshrink}`}>
                    <div className={style.bodycollapse_item}><a href="#10">Rice</a></div>
                    <div className={style.bodycollapse_item}><a href="#20">Soups</a></div>
                    <div className={style.bodycollapse_item}><a href="#30">Pasta</a></div>
                    <div className={style.bodycollapse_item}><a href="#40">Side</a></div>
                    <div className={style.bodycollapse_item}><a href="#50">Swallow</a></div>
                    <div className={style.bodycollapse_item}><a href="#60">Protiens</a></div>
                    <div className={style.bodycollapse_item}><a href="#70">Soft Drinks</a></div>
                </div>
            </div>

        </div>
    )
}

export default Section