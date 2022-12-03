import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from './Tab.css'

export const Tab=(props)=>{

    const ref =useRef()
    const [activeTab,setActiveTab] = useState(0)
    const [scroller, setScroller] =useState(null)
    const [lscroll,setLscroll] =useState(0)
    const [rscroll,setRscroll]=useState(0)
    const [showNavigation,setShowNavigation] =useState(false)

  
  
    useEffect(()=>{
      if(ref.current!==null){
        setScroller(ref.current.getElementsByClassName(styles.titlescroller)[0])
      }
    },[])
    useEffect(()=>{
     if(scroller!==null){
    
      if(scroller.scrollWidth!==scroller.clientWidth){
        setShowNavigation(true)
      }
     
     }
     
    },[scroller])
    const navigation =(type)=>{
  
      if(type=='right'){
        
        scrollTo(scroller,  scroller.scrollLeft+130)
      }
      else{
        scrollTo(scroller,scroller.scrollLeft-130)
      }
    
  }

    const onTabClick=(e)=>{
     
    let [pages] = ref.current.getElementsByClassName(styles.pagewrapper);    
  
     
      let pageIndex = e.target.dataset.page;
    
      if(activeTab<Number(pageIndex)){
        scrollTo(scroller,  scroller.scrollLeft+30)
      }
      else{
        scrollTo(scroller,scroller.scrollLeft-30)

      }
      
      setActiveTab(Number(pageIndex))
    
      if (pageIndex) {

        pages.style.setProperty('--page-index', pageIndex);
      }
    }
   

    const scrollTo = (elemnet, scrollLeft) => {
      let initilaScrollLeft = scroller.scrollLeft;
      let distance = scrollLeft - initilaScrollLeft;
      setLscroll(scrollLeft)
     
      setRscroll(Math.round(scrollLeft  + scroller.clientWidth))
    
      animate({
        timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            elemnet.scrollLeft = initilaScrollLeft + distance * progress
          },
          duration: 300
      });
     

    }

  
    let animationId = null;
    const animate=({
      timing,
      draw,
      duration
    }) =>{
      cancelAnimationFrame(animationId);
      let start;
    
      animationId = requestAnimationFrame(function animate(time) {
        if (!start) start = time;
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
    
        // calculate the current animation state
        let progress = timing(timeFraction)
    
        draw(progress); // draw it
    
        if (timeFraction < 1) {
          animationId = requestAnimationFrame(animate);
        }
      });
    
    }
    return (
        <div className={styles.screenwrapper} ref={ref} style={{width:props.width}}>
        {showNavigation===true && <div className={styles.navArrow}>

<KeyboardArrowLeft className={lscroll>0 ? styles.leftNav:styles.disablearrow+' '+styles.leftNav} onClick={()=>navigation('left')}></KeyboardArrowLeft>
<KeyboardArrowRight className={scroller?.scrollWidth > rscroll ? styles.rightNav:styles.disablearrow+' '+styles.rightNav} onClick={()=>navigation('right')}></KeyboardArrowRight>  

</div>}    
           
        <div className={styles.titlescroller}>
          <div className={showNavigation===true?styles.titlewrapper : styles.titlewrapper+' '+styles.definewidth}>
          
            {props.children.length!==undefined ? <Fragment>{props.children.map((el,i)=>{
                return (
            <div  onClick={onTabClick} className={activeTab===i?styles.title+' '+styles.activeTitle+' '+styles.ripple :styles.title+' '+styles.ripple} data-page={i.toString()} key={i}>{el.props.title}</div>
                )
            })}</Fragment> : 

            <div   className={styles.title+' '+styles.activeTitle} data-page="0">{props.children.props.title}</div>
            
            }
            
          
          </div>
        </div>
       

        <div className={styles.pagewrapper}>

          
        {props.children.length!==undefined ? <Fragment>{props.children.map((el,i)=>{
                return (
                  <div className={activeTab===i?styles.page+' '+styles.activePage :styles.page} key={i} >
                  <div className={styles.pagecontent}>
                   {el.props.children}
                  </div>
                </div>
                )
            })}</Fragment> : 

            <div className={styles.page+' '+styles.activePage}  >
            <div className={styles.pagecontent}>
             {props.children.props.children}
            </div>
          </div>
            
            }

        </div>
      </div>
      
    )
}