import React from 'react'
import styles from './Input.module.css'

function Input({id,label},ref){
    return(
        <div className={styles.control}>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} id={id}></input>
        </div>
    )    
}

export default React.forwardRef(Input)