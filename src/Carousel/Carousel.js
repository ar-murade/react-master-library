import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { Fragment, useRef,useEffect,useState } from "react";
import styles from './Carousel.css'
export const Carousel = (props)=>{

    const ref =useRef()
    const [cSlide,setcSlide]=useState(0)
   
    
    useEffect(()=>{
        activeDot(cSlide);
        changeSlide(cSlide);
        
      
        
    },[])
    var intervalId
    if(props.autoPlay===undefined || props.autoPlay!==false){
        intervalId = setInterval(() => {
            console.log('dfs')
            nextBtn()
        }, 5000);
    }
    
    
    // const intervalId = setInterval(nextBtn, 5000)

   
   
    const prevBtn=()=>{
        
        var slidechange =cSlide-1
        if (0 > slidechange) {
            slidechange = props.items.length-1;
        }; 
        if(0==slidechange){
            slidechange=0
        }
        changeSlide(slidechange);
        activeDot(slidechange);
        setcSlide(slidechange)
        clearInterval(intervalId)
    }

    const nextBtn=()=>{
       
        const carouselSlides = ref.current.querySelectorAll('.'+styles.slide)
       
        var slidechange = cSlide+1
        if (carouselSlides.length - 1 < slidechange) {
            slidechange = 0;
        };
        changeSlide(slidechange);
        activeDot(slidechange);
        setcSlide(slidechange)
        clearInterval(intervalId)
       
    }
    const changeSlide=(slides)=>{
        const carouselSlides = ref.current.querySelectorAll('.'+styles.slide);
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    }

    const activeDot = (slide)=> {
        const dotsSlide = ref.current.querySelector('.'+styles.dotscontainer);
        if(dotsSlide!==null){
            ref.current.querySelectorAll('.'+styles.dot).forEach(dot => dot.classList.remove(styles.active));
            ref.current.querySelector('.'+styles.dot+'[data-slide="'+slide+'"]').classList.add(styles.active);
        }
      
    };
    const dotSlideClick = (e)=> {
        
        if (e.target.classList.contains(styles.dot)) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    };

 
    
  
        
     

    return (
  <div ref={ref}>
    <div className={styles.sliderwrapper}>
     
        {props.items.map((el,i)=>{
          
            return (
            <div className={cSlide===i ? styles.slide+' '+styles.activeimg : styles.slide} key={i}>
                <div className={styles.imgcontainer}>
                <img src={el} alt={"Photo"+i}/>
                </div>
              
            </div>)
        })}
      
        <button className={styles.btnslide+' '+styles.prev} onClick={prevBtn}><KeyboardArrowLeft></KeyboardArrowLeft></button>
        <button className={styles.btnslide+' '+styles.next} onClick={nextBtn}><KeyboardArrowRight></KeyboardArrowRight></button>
      
    </div>
   {(props.dotNavigation===undefined || props.dotNavigation===true) && <div className={styles.dotscontainer}>
    {props.items.map((el,i)=>{
        return (<span key={i} className={i===0 ? styles.dot+' '+styles.active : styles.dot} data-slide={i.toString()} onClick={dotSlideClick}></span>
       )
         })}
            
    </div> } 
    </div>
    )
}