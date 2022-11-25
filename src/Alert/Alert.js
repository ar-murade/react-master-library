import React from "react";
import styles from './Alert.css';
import { Check, Close, Info, Warning } from '@material-ui/icons'


export const Alert =(props)=>{
     var classes = styles.alert
    
     if(props.type==='success'){
       classes += ' '+styles.alertsuccess
     }
    else if(props.type==='info'){
       classes += ' '+styles.alertinfo
      
     }
    else if(props.type==='warning'){
       classes += ' '+styles.alertwarning
    

     }
    else if(props.type==='error'){
       classes += ' '+styles.alertdanger
     

     }
     else{
       classes += ' '+styles.alertsuccess
     }
    
    
    return (
        <div className={classes}>
        {props.showCloseButton && <button type="button" className={styles.close} data-dismiss="alert" aria-hidden="true" onClick={props.onCloseClick ? ()=>props.onCloseClick() :undefined}>×</button> }
        <div className={styles.icon}>{props.type==='error'? <Close></Close>: props.type==='warning'? <Warning></Warning> : props.type==='info'? <Info></Info> :<Check></Check>}</div>
        <div className={styles.displaycontent}>
        {props.heading && <strong>{props.heading}</strong>} <span>{props.status ? props.status : 'Please add status message.'}</span>
        </div>
        </div>
    )
}