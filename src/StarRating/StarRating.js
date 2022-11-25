import { Star, StarHalf } from "@material-ui/icons";
import React, { Fragment } from "react";
import styles from './StarRating.css'

export const StarRating = () => {
    
    const startLength = 5
   
    var starCreate = []
    for (let index = 0; index < startLength; index++) {
        starCreate.push(index)
    }
    var starCreateHalf = []
    for (let index = 0.5; index < startLength+0.5; index+=.5) {
        starCreateHalf.push(index)
    }
    console.log(starCreateHalf)
  

    return (
    <div >

   
        <div className={styles.fullstars}>
        <div className={styles.ratinggroup}>
            {/* <input className={styles.rating__input rating__inputnone" name="rating" id="rating-none" value="0" type="radio" />
            <label aria-label="No rating" className={styles.rating__label" for="rating-none"><i className={styles.rating__icon rating__iconnone fa fa-ban"></i></label> */}
            {starCreate.map((el,i)=>{
                return (
                    <Fragment key={i}>
             <label aria-label={(i+1)+" star"} className={styles.rating__label} htmlFor={"rating-"+(i+1)}>
                
                <Star className={styles.rating__icon+' '+styles.ratingiconstar}></Star>
                </label>
            <input className={styles.rating__input} name="rating" id={"rating-"+(i+1)} value={(i+1).toString()} type="radio" />
                    </Fragment>
                )
            })}
        </div>
      
    </div>



     <div className={styles.halfstars}>
         <div className={styles.ratinggroup}>

             <input className={styles.rating__input+' '+styles.rating__inputnone}  name="rating2" id="rating2-0" value="0" type="radio" />
             <label aria-label="0 stars" className={styles.rating__label} htmlFor="rating2-0">&nbsp;</label>

            {starCreateHalf.map((el,i)=>{
                console.log((i)%2)
            return (
            <Fragment key={i}>
             <label aria-label={el+" stars"} className={(i)%2!==0 ? styles.rating__label : styles.rating__label+' '+styles.rating__labelhalf} htmlFor={"rating2-"+el}>
              {(i)%2!==0 ? 
              <Star className={styles.rating__icon+' '+styles.ratingiconstar}></Star> :
              <StarHalf className={styles.rating__icon+' '+styles.ratingiconstar}></StarHalf>}  
                </label>
             <input className={styles.rating__input} name="rating2" id={"rating2-"+el} value={el.toString()} type="radio" />
             </Fragment>)
            })}

         </div>
     
     </div>
    </div>
    
    
    //  <div id="fullstarstwo">
    //      <div className="ratinggroup">
    //          <input disabled checked className="rating__input rating__inputnone" name="rating3" id="rating3-none" value="0" type="radio">
    //          <label aria-label="1 star" className="rating__label" for="rating3-1"><i className="rating__icon ratingiconstar fa fa-star"></i></label>
    //          <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio">
    //          <label aria-label="2 stars" className="rating__label" for="rating3-2"><i className="rating__icon ratingiconstar fa fa-star"></i></label>
    //          <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio">
    //          <label aria-label="3 stars" className="rating__label" for="rating3-3"><i className="rating__icon ratingiconstar fa fa-star"></i></label>
    //          <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio">
    //          <label aria-label="4 stars" className="rating__label" for="rating3-4"><i className="rating__icon ratingiconstar fa fa-star"></i></label>
    //          <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio">
    //          <label aria-label="5 stars" className="rating__label" for="rating3-5"><i className="rating__icon ratingiconstar fa fa-star"></i></label>
    //          <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio">
    //      </div>
    //    <p className="desc" style="font-family: sans-serif; font-size:0.9rem">Full stars<br/>
    //      Must select a star value</p>
    //  </div>
          
    )
}