import React from 'react'
import styles from './Button.css'

export const Button = (props) => {

  var classes=styles.defaultwrapper
  if(props.buttonType==="text"){
  classes+=' '+styles.textbtnwrapper
  }
  if(props.buttonType === 'emphasized'){
    classes+=' '+styles.emphasizedwrapp
  }
  if(props.buttonType === 'solid'){
    classes+=' '+styles.buttonwrapper
  }
  if(props.buttonType === 'stroked'){
    classes+=' '+styles.strokedwrapper
  }
  if(props.className){
  classes+=' '+props.className
  }
  
  return (
    <div className={classes}>
 <button onClick={props.onClick ? ()=>props.onClick(): undefined} type={props.type} disabled={props.disabled} style={{width:props.width}} id={props.id}>{ props.children || 'Button' }</button>
 </div>
  )
}
