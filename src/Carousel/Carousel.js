import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { Fragment, useRef,useEffect,useState } from "react";
import styles from './Carousel.css'
export const Carousel = (props)=>{

    const ref =useRef()
    const [cSlide,setcSlide]=useState(0)
    
    useEffect(()=>{
        Slider()
    },[])
   

    function Slider() {
       
        const carouselSlides = ref.current.querySelectorAll('.'+styles.slide);
        const btnPrev = ref.current.querySelector('.'+styles.prev);
        const btnNext = ref.current.querySelector('.'+styles.next);
    
        const dotsSlide = ref.current.querySelector('.'+styles.dotscontainer);
     
        let currentSlide = 0;
      
        const activeDot = function (slide) {
          
            ref.current.querySelectorAll('.'+styles.dot).forEach(dot => dot.classList.remove(styles.active));
            ref.current.querySelector('.'+styles.dot+'[data-slide="'+slide+'"]').classList.add(styles.active);
        };
        activeDot(currentSlide);
    
        const changeSlide = function (slides) {
            carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
        };
        changeSlide(currentSlide);
        setcSlide(currentSlide)
    
        btnNext.addEventListener('click', function () {
            currentSlide++; 
            if (carouselSlides.length - 1 < currentSlide) {
                currentSlide = 0;
            };
            changeSlide(currentSlide);
            activeDot(currentSlide);
            setcSlide(currentSlide)
    });
        btnPrev.addEventListener('click', function () {
            currentSlide--;
            if (0 > currentSlide) {
                currentSlide = props.items.length-1;
            }; 
            if(0==currentSlide){
                currentSlide=0
            }
            changeSlide(currentSlide);
            activeDot(currentSlide);
            setcSlide(currentSlide)
        });
    
        dotsSlide.addEventListener('click', function (e) {
            if (e.target.classList.contains(styles.dot)) {
                const slide = e.target.dataset.slide;
                changeSlide(slide);
                activeDot(slide);
            }
        });
      };
     
  
        
     

    return (
  <div ref={ref}>
    <div className={styles.sliderwrapper}>
      
        {props.items.map((el,i)=>{
          
            return (
            <div className={cSlide===i ? styles.slide+' '+styles.activeimg : styles.slide} key={i}>
                <img src={el} alt={"Photo"+i}/>
            </div>)
        })}
      
        <button className={styles.btnslide+' '+styles.prev}><KeyboardArrowLeft></KeyboardArrowLeft></button>
        <button className={styles.btnslide+' '+styles.next}><KeyboardArrowRight></KeyboardArrowRight></button>
      
    </div>
    <div className={styles.dotscontainer}>
    {props.items.map((el,i)=>{
        return (<span key={i} className={i===0 ? styles.dot+' '+styles.active : styles.dot} data-slide={i.toString()}></span>
       )
         })}
            
    </div>
    </div>
    )
}