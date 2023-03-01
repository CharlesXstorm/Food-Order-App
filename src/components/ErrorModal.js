import React from 'react';
import style from './ErrorModal.module.css';

function ErrorModal() {
  return (
    <div className={style.error}>
        <p>Sorry, this food is not available yet. Please check back next time or contact us for special orders. <br/> Thank you.</p>
    </div>
  )
}

export default ErrorModal