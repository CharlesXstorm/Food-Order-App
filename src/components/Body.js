import React, { useRef, useState, useEffect, useContext } from 'react';
import { dataContext } from './Dependencies/dataContext';
import style from './Body.module.css';
import Cart from './Cart';
import Items from './Items';
import Section from './Section';
import Card from './UI/Card';
import Input from './UI/Input';
import { foodApi } from './Dependencies/foodData';
import ErrorModal from './ErrorModal';

function Body() {

    const { state, setBodyHeight } = useContext(dataContext);
    const bodyRef = useRef();
    //const [input, setInput] = useState('');
    const [api, setApi] = useState([...foodApi])
    const [isClicked, setIsClicked] = useState(false)
    const [totalqty, setTotalqty] = useState(0)

    const fixedBtnHandler = (event) => {
        event.stopPropagation();
        //console.log('hello')
        setIsClicked((prev) => !prev)
    }

    const cartnofun = (val) => {
        setTotalqty(val)
    }

    useEffect(() => {

        //cartnofun()

        const bodyfunc = () => {

            setBodyHeight(bodyRef.current.getBoundingClientRect().top);

        }

        window.addEventListener('scroll', bodyfunc)

        return (() => { window.removeEventListener('scroll', bodyfunc) })

    }, [setBodyHeight, cartnofun])



    if ((state.input.length !== 0)) {


        let filteredFood = []
        let filteredApi = []
        let IsError = false;


        for (let any of api) {
            let newdata = []

            for (let val of any.data) {
                if (val.name.toLowerCase().includes(state.input.trim().toLowerCase()) || (val.desc.toLowerCase().includes(state.input.trim().toLowerCase()))) {
                    newdata = [...newdata, val]

                }
            }

            filteredFood = [...filteredFood, { ...any, data: newdata }]

        }

        filteredApi = filteredFood.filter((val) => val.data.length !== 0)

        if (filteredApi.length == 0) {
            IsError = !IsError;
        }



        return (
            <div ref={bodyRef} className={style.body}>

                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.leftheader}>
                            <div><h1>Food Menu</h1></div>
                            <div className={style.deliv}><div><span className="material-symbols-outlined">Directions_Bike</span>&#8358;2000 </div> <div><span className="material-symbols-outlined">Thumb_up</span>98%</div></div>
                        </div>
                        <div className={style.leftbody}>
                            <div className={style.leftcat}>
                                <Section />

                            </div>
                            <div className={style.leftitems}>
                                <Input />
                                <div>
                                    {

                                        filteredApi.map((food) => <Items key={food.id} category={food.category} data={food.data} />)
                                    }
                                    {
                                        IsError && <ErrorModal />
                                    }
                                </div>

                                <div className={`${style.fixedbtn} ${isClicked && style.btnshrink}`} onClick={fixedBtnHandler}>
                                    <span className={style.label}>{totalqty}X</span><div>cart</div>
                                </div>

                                <div className={`${style.mobilecart} ${isClicked && style.cartgrow}`}>
                                    <Card className={'sticky'}> <Cart cartno={cartnofun} /></Card>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={style.right}>
                        <Card className={'sticky'}> <Cart cartno={cartnofun} /></Card>
                    </div>
                </div>
            </div>
        )

        //console.log(filteredFood)
    } else {

        return (
            <div ref={bodyRef} className={style.body}>

                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.leftheader}>
                            <div><h1>Food Menu</h1></div>
                            <div className={style.deliv}><div><span className="material-symbols-outlined">Directions_Bike</span>&#8358;2000 </div> <div><span className="material-symbols-outlined">Thumb_up</span>98%</div></div>
                        </div>

                        <div className={style.leftbody}>
                            <div className={style.leftcat}>
                                <Section />

                            </div>
                            <div className={style.leftitems}>
                                <Input />
                                <div>
                                    {

                                        foodApi.map((food) => <Items key={food.id} category={food.category} data={food.data} />)
                                    }
                                </div>

                                <div className={`${style.fixedbtn} ${isClicked && style.btnshrink}`} onClick={fixedBtnHandler}>
                                    <span className={style.label}>{totalqty}X</span><div>cart</div>
                                </div>

                                <div className={`${style.mobilecart} ${isClicked && style.cartgrow}`}>
                                    <Card className={'sticky'}> <Cart cartno={cartnofun} /></Card>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className={style.right}>
                        <Card className={'sticky'}> <Cart cartno={cartnofun} /></Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body