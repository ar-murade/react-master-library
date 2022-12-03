import React from "react";
import styles from './Tooltip.css'

export const Tooltip=(props)=>{

    var classes =styles.tooltipwrappertop
    if(props.tooltipPosition==='left'){
        classes=styles.tooltipwrapperleft
    }
    if(props.tooltipPosition==='right'){
        classes=styles.tooltipwrapperright
    }
    if(props.tooltipPosition==='bottom'){
        classes=styles.tooltipwrapperbottom
    }
    return (
        <div className={styles.tooltipwrapper}>

      <div className={classes+' '+styles.expand} data-tooltip={props.tooltipData}>
     {props.children}
      </div>
        </div>
        
      
    )
}