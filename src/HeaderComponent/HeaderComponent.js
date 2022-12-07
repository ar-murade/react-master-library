import { Menu } from '@material-ui/icons'
import React, { Fragment, useState } from 'react'
import styles from './HeaderComponent.css'
import { logo } from '../Images/Images'
import { MenuBar } from './MenuBar'
import { Sidebar } from './Sidebar'

export const HeaderComponent=(props)=>{
    const [expand,setExpand] = useState(false)

    return(
       
        <Fragment>

       
        <header className={styles.headerwrapper}>
            <div className={styles.headercontent}>
           {props.menuIcon && <div className={styles.menuicon} onClick={()=>setExpand(!expand)}><Menu></Menu></div>} 
     
           <img src={props.logo? props.logo: logo} alt="logo" width={props.logoWidth? props.logoWidth: "135px"} height={props.logoHeight? props.logoHeight:"60px"}/>
            </div>
            { props.children?.length===undefined ?
           <Fragment>
            {props.children?.type.name==='MenuBar' && <MenuBar  items={props.children?.props.items} onClick={props.children?.props.onClick}></MenuBar>}
          
           </Fragment>
            :
            <Fragment>
                {props.children.map((e,i)=>{
                    return (
                        <Fragment key={i}>
                            {e.type.name=== 'MenuBar' && <MenuBar  items={e.props.items} onClick={e.props.onClick}></MenuBar>}
                         
                        </Fragment>
                    )
                })}
            </Fragment>
            }
         
        
        </header>
        { props.children?.length===undefined ?
           <Fragment>
         
            {props.children?.type.name==='Sidebar' && <Sidebar expand={expand} items={props.children?.props.items}></Sidebar>}
           </Fragment>
            :
            <Fragment>
                {props.children.map((e,i)=>{
                    return (
                        <Fragment key={i}>
                        
                            {e.type.name=== 'Sidebar' && <Sidebar expand={expand} items={e.props.items}></Sidebar>}
                        </Fragment>
                    )
                })}
            </Fragment>
            }
        </Fragment>
    )
}