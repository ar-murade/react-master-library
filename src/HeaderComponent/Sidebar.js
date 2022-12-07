import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from './Sidebar.css'
import { KeyboardArrowDown } from "@material-ui/icons";


export const Sidebar=(props)=>{
  const ref = useRef([])
 


const onClickMenu=(i)=>{
  for (let index = 0; index < ref.current.length; index++) {
    const element = ref.current[index];
    if(element!==undefined){
      if(index!==i){
       element.classList.remove(styles.open)
       element.previousSibling.classList.remove(styles.activemenu)
      }
    }
  }
  ref.current[i].classList.toggle(styles.open);
  ref.current[i].previousSibling.classList.toggle(styles.activemenu)
}
  
useEffect(()=>{
  var mainwrapper =  document.getElementsByTagName('body')[0].getElementsByClassName(styles.sidebarwrapper)
  if(mainwrapper?.length>0){
    var find = mainwrapper[0].nextElementSibling
    if(find){
    if(props.expand){
      
        find.classList.add(styles.bodypadding)
        find.classList.remove(styles.bodynormalpadding)
      
    }
    else{
      find.classList.remove(styles.bodypadding)
      find.classList.add(styles.bodynormalpadding)
    }
  }
  }
  

},[props.expand])
    return (
      <div className={props.expand ? styles.sidebarexpand+' '+styles.sidebarwrapper :styles.sidebarwrapper} id="navbar">
      <nav className={styles.nav__container}>
          <div>
           

              <div className={styles.nav__list}>
                  <div className={styles.nav__items}>
                 
                    {props.items.map((el,i)=>{
                      return (
                        <Fragment key={i}>
                          {el.subMenu ? 
                         <Fragment >
                          <div className={styles.nav__link}   onClick={()=>onClickMenu(i)}>
                            
                          <span className={styles.nav__name} >{el.title}  <KeyboardArrowDown></KeyboardArrowDown></span>
                           </div>
                           <div className={styles.nav__dropdown} ref={el => ref.current[i] = el}>
                          

                           <div className={styles.nav__dropdowncollapse}>
                               <div className={styles.nav__dropdowncontent}>
                                 {el.subMenu.map((sb,j)=>{
                                   return ( <div key={j} className={styles.nav__dropdownitem}>{sb.title}</div>)
                                 })}
                                  
                               </div>
                           </div>
                       </div>  </Fragment>
                           : <div className={styles.nav__link} >
                     
                     <span className={styles.nav__name}>{el.title}</span>
                 </div>}
                        </Fragment>
                      )
                    })}
                      
                      
                     

                      
                  </div>

              
              </div>
          </div>

          {/* <div className={styles.nav__link+' '+ styles.nav__logout}>
          
              <span className={styles.nav__name}>Log Out</span>
          </div> */}
      </nav>
  </div>

    )
}