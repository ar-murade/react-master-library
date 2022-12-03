import React from 'react'
import styles from './Table.css'

export const TableSearch=(props)=>{

    

const getInp=(e)=>{
   
    if(e.target.value!==''){

     var find = props.allData.filter((el)=> Object.values(el).join().toLowerCase().includes(e.target.value.toLowerCase()))
    props.getSearchedData(find)
    }
    else{
        props.getSearchedData(null)
    }
}

    return (
     <div className={styles.searchcontainer}>
        <input type="text" onChange={getInp} placeholder="Search"/> 

     </div>
    )
}