import React, { useRef, useContext, useEffect } from 'react';
import { dataContext } from './Dependencies/dataContext';
import style from './StaticNav.module.css';
import Input from './UI/Input';

function StaticNav(props) {

    const staticRef = useRef();
    const {setStaticNav } = useContext(dataContext);

    useEffect(() => {

        const staticNav = () => {
            setStaticNav(staticRef.current.getBoundingClientRect().height)
        }

        window.addEventListener('scroll', staticNav)
    }, [])

    const IsStatic = props.IsStatic;

    return (
        <div ref={staticRef} className={`${style.staticnav} ${IsStatic ? style.navgrow : ""}`}>
            <Input />
        </div>
    )
}

export default StaticNav