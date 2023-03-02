import React, { createContext, useReducer } from 'react';
import { reducerFunction, InitialState } from './reducerFunction';
import { actionType } from './actionType';

export const dataContext = createContext();


export const DataContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducerFunction, InitialState)

    const setBodyHeight = (val) => {
        dispatch({ type: actionType.BODYHEIGHT, payload: val })
    }

    const setStaticNav = (val) => {
        dispatch({ type: actionType.STATICNAV, payload: val })
    }

    const setInput = (val) => {
        dispatch({ type: actionType.INPUT, payload: val })
    }

    const setCart = (name,qty) => {

        let val = {[name]: [name,qty]}
        dispatch({ type: actionType.CART, payload: val })
    }

    return (
        <dataContext.Provider value={{ state, setStaticNav, setBodyHeight, setInput, setCart }} >{props.children}</dataContext.Provider>
    )
}

