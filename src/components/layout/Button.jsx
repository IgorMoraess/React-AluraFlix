import React from 'react'
import styles from './Button.module.css'

function Button(props) {
  return (
    <div className={`${styles.buttonComponent} ${styles[props.customClass]}`}>
      {props.children}
      </div>
  )
}

export default Button