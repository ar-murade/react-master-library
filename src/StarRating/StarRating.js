import { Star, StarHalf } from "@material-ui/icons";
import React, { Fragment } from "react";
import styles from './StarRating.css'

export const StarRating = (props) => {
    
    const startLength = props.starCount ? props.starCount :5

    var starCreate = []
    for (let index = 0; index < startLength; index++) {
        starCreate.push(index)
    }

    var starCreateHalf = []
    for (let index = 0.5; index < startLength+0.5; index+=.5) {
        starCreateHalf.push(index)
    }

    return (
    <div>

   {props.halfStarRating===true ?  <div className={styles.halfstars}>
         <div className={styles.ratinggroup}>

             <input className={styles.rating__input+' '+styles.rating__inputnone}  name="rating2" id="rating2-0" value="0" type="radio" onChange={props.onClick ? ()=>props.onClick(0) : undefined} checked={props.value===0 ?true :false}/>
             <label aria-label="0 stars" className={styles.rating__label} htmlFor="rating2-0">&nbsp;</label>

            {starCreateHalf.map((el,i)=>{
             
            return (
            <Fragment key={i}>
             <label aria-label={el+" stars"} className={(i)%2!==0 ? styles.rating__label : styles.rating__label+' '+styles.rating__labelhalf} htmlFor={"rating2-"+el}>
              {(i)%2!==0 ? 
              <Star className={styles.rating__icon+' '+styles.ratingiconstar}></Star> :
              <StarHalf className={styles.rating__icon+' '+styles.ratingiconstar}></StarHalf>}  
                </label>
             <input className={styles.rating__input} name="rating2" id={"rating2-"+el} value={el.toString()} type="radio" onChange={props.onClick ? ()=>props.onClick(el) : undefined} checked={props.value===el ?true :false}/>
             </Fragment>)
            })}

         </div>
     
     </div>  :
     <div className={styles.fullstars}>
     <div className={styles.ratinggroup}>
         <input className={styles.rating__input+' '+styles.rating__inputnone} name="rating" id="rating-none" value="0" type="radio" onChange={props.onClick ? ()=>props.onClick(0) : undefined} checked={props.value===0 ?true :false}/>
         <label aria-label="No rating" className={styles.rating__label} htmlFor="rating-none">
          
         &nbsp;
             </label>
         {starCreate.map((el,i)=>{
             return (
                 <Fragment key={i}>
          <label aria-label={(i+1)+" star"} className={styles.rating__label} htmlFor={"rating-"+(i+1)}>
             
             <Star className={styles.rating__icon+' '+styles.ratingiconstar}></Star>
             </label>
         <input className={styles.rating__input} name="rating" id={"rating-"+(i+1)} value={(i+1).toString()} type="radio" onChange={props.onClick ? ()=>props.onClick(i+1) : undefined}  checked={props.value===(i+1) ?true :false}/>
                 </Fragment>
             )
         })}
     </div>
   
 </div>
     }
        



    


     
    </div>
    
    
  
          
    )
}