import React,{useContext} from 'react';
import { dataContext } from '../Dependencies/dataContext';
import style from './Card.module.css';

function Card(props) {

    const{state} = useContext(dataContext);
  const sticky = props.className;
    
  return (
    <div className={`${style.card} ${style[sticky]}`} style={{top:`${state.staticNav+50}px`}}> {props.children}</div>
  )
}

export default Card