import React, {useContext} from 'react';
import { dataContext } from './Dependencies/dataContext';
import style from './Section.module.css';
import SectLogo from './UI/SectLogo';

function Section() {

    const {state} = useContext(dataContext)

    return (
        <div className={style.wrapper} style={{top:`${state.staticNav+50}px`}}>
            <div className={style.sectionheader}>
                <SectLogo />
                <div>Sections</div>
            </div>
            <div className={style.sectionbody}>

                <div className={style.bodystatic}>Top Sellers</div>
                <div className={`${style.bodystatic} ${style.staticbtn}`}>Menu <button className={style.btn}> <span className="material-symbols-outlined">expand_more</span></button>
                </div>

                <div className={style.bodycollapse}>
                    <div className={style.bodycollapse_item}>Rice</div>
                    <div className={style.bodycollapse_item}>Soups</div>
                    <div className={style.bodycollapse_item}>Pasta</div>
                    <div className={style.bodycollapse_item}>Side</div>
                    <div className={style.bodycollapse_item}>Swallow</div>
                    <div className={style.bodycollapse_item}>Protiens</div>
                    <div className={style.bodycollapse_item}>Soft Drinks</div>
                </div>
            </div>

        </div>
    )
}

export default Section