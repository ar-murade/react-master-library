import React from 'react'
import styles from './Accordion.css'
import common from './../styles.module.css'


export const AccordionGroup=(props)=>{

  const singleAcc=(e)=>{

   

    if(props.singleExpand===true){
     
      var findradio = props.refparant.current.getElementsByClassName(styles.tab)
      for (let index = 0; index < findradio.length; index++) {
        const element = findradio[index].firstElementChild;
        if(element.id!==e.target.id){
          element.checked=false
        }

      }
    
    }
  }
   
 var matrandom = Math.floor(Math.random() * 100000)
 
    return (
        <div className={styles.tab+' '+common.ripple} >
        <input type="checkbox" id={"Tablib"+matrandom} name="Tablib" onClick={singleAcc}/>
        <label className={styles.tablabel} htmlFor={"Tablib"+matrandom}>{props.heading}</label>
        <div className={styles.tabcontent}>
          {props.children}
        </div>
      </div>
    )
}
