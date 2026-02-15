import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    const { text ,isBottomBtn} = props;
  return (
    <div>
        <button className={isBottomBtn ? styles.bottom_btn : styles.top_btn}>{text}</button>
    </div>
  )
}

export default Button