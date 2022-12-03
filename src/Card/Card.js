import React from 'react'
import styles from './Card.css'

export const Card=(props)=>{

    return(
        <div className={styles.cardwrapper} style={{width:props.width}}>
            <div className={styles.cardcontent}>
            {props.children}
            </div>
            
        </div>
    )
}