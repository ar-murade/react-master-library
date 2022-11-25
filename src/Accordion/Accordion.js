import React ,{useRef} from 'react'
import styles from './Accordion.css'
import { AccordionGroup } from './AccordionGroup'

export const Accordion =(props)=>{
    const ref= useRef()

    return (
        <div className={styles.tabswrapper} ref={ref}>
            {props.children.map((el,i)=>{
                return  <AccordionGroup key={i} heading={el.props.heading} singleExpand={props.singleExpand} refparant={ref}>{el.props.children} </AccordionGroup>
            })}
            </div>
    )
}