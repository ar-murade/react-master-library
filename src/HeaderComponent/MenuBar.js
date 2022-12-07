import React from "react";
import styles from './HeaderComponent.css'

export const MenuBar=(props)=>{
  
   return( <div className={styles.dark}>
    <nav role="navigation">
      {/* <a  className={styles.ic+' '+styles.menu} tabIndex="1">
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
       */}
      {/* <a  className={styles.ic+' '+styles.close}> */}
      <ul className={styles.mainnav}>
        {props.items.map((el,i)=>{
        
            return (<li className={styles.toplevellink} key={i} onClick={(props.onClick && !el.subMenu)? ()=>props.onClick(el) :undefined}>
                <div className={el.subMenu?.length>0 ? styles.megamenu+' ' + styles.singlemenu: styles.singlemenu} >{el.title}{el.icon &&<div className={styles.headerdflex}>{el.icon}</div>}<span className={el.icon===undefined ? styles.alignicon : ''}></span></div>
            {el.subMenu?.length>0 && <div className={styles.submenublock}>
            <div className={styles.row}>
              {el.subMenu.map((tl,j)=>{
                return (
                <div key={j}>
               {tl.header && <h2 className={styles.submenuhead}>{tl.header} {tl.icon && <div className={styles.headicon}>{tl.icon}</div>}</h2>} 
                <ul className={styles.submenulists}>
                  {tl.child.map((cl,k)=>{
                     return (<li onClick={props.onClick ? ()=>props.onClick(cl) :undefined} key={k} className={styles.singlemenu}><span>{cl.title}</span> {cl.icon && <div className={styles.iconlist}>{cl.icon}</div>}</li> )
                  }) }
                </ul>           
              </div>
                )
              }) }
              
            </div>
            </div> }
               </li> )
        })}
        
        

      </ul> 
    </nav>
   
  </div> 
   )
}