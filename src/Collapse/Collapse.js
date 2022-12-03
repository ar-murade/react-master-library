import React from "react";
import styles from './Collapse.css'
import common from './../styles.module.css'

export const Collapse=(props)=>{
    var matrandom = Math.floor(Math.random() * 100000)

    return (
        <div className={styles.collapsewrapper+' '+common.ripple} style={{width:props.width}}>
  <div className={styles.drawer}>
    <input className={styles.drawer__trigger} id={"drawer"+matrandom} type="checkbox" />
    <label className={styles.drawer__title} htmlFor={"drawer"+matrandom}>{props.title ? props.title : 'Title'}</label>
    <div className={styles.drawer__contentwrapper}>
      <div className={styles.drawer__content}>
      
         {props.children}
       
      </div>
    </div>
  </div>

</div>
    )
}