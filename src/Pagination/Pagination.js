import React, { useEffect, useState } from 'react'
import styles from './Pagination.css'

export const Pagination = (props) => {

  // selecting required element

const [row,setRow] =useState([])
const [page, setPage] =useState(props.activePage)

const totalPages =chunks(props.records, props.itemPerPage).length



useEffect(()=>{
    createPagination(totalPages,page)
},[])

function chunks (a, size){
 return Array.from(
    new Array(Math.ceil(a.length / size)),
    (_, i) => a.slice(i * size, i * size + size)
);
}


function createPagination(totalPages, page){

  const records=[...props.records]
 
    setPage(page)

    if(props.onPageChange){
      props.onPageChange(page)
    }
    if(props.getPaginatedData){
      props.getPaginatedData(chunks(records, props.itemPerPage)[page-1])
    }
   
    let active;
    let beforePagep = page - 1;
    let afterPagep = page + 1;

    if (page == totalPages) {
        beforePagep = beforePagep - 2;
      } else if (page == totalPages - 1) {
        beforePagep = beforePagep - 1;
      }
     
      // how many pages or li show after the current li
      if (page == 1) {
        afterPagep = afterPagep + 2;
      } else if (page == 2) {
        afterPagep  = afterPagep + 1;
      }
    
  const rt=[]
   for (var plength = beforePagep; plength <= afterPagep; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    rt.push({active,plength})

  }
  
  setRow(rt)
}



  return (
    <div className={styles.pagination}>
  <ul>
    {page > 1 && <li className={styles.btn+' '+styles.prev} onClick={()=>createPagination(totalPages, page - 1)}><span> Prev</span></li>}

    {page > 2 && <li className={styles.first+' '+styles.numb} onClick={()=>createPagination(totalPages, 1)}><span>1</span></li>}

    {(page > 3 && totalPages>5) && <li className={styles.dots}><span>...</span></li>}

    {row.map((el,i)=>{
       
        return <li key={i} className={el.active==='active' ? styles.active+' '+styles.numb : styles.numb} onClick={()=>createPagination(totalPages, el.plength)}><span>{el.plength}</span></li>
    }) }

{(page < totalPages - 2 && totalPages>5) && <li className={styles.dots}><span>...</span></li>}

    {page < totalPages - 1 ? <li className={styles.last+' '+styles.numb} onClick={()=>createPagination(totalPages, totalPages)}><span>{totalPages}</span></li> :''}

   

    {page < totalPages && <li className={styles.btn+' '+styles.next} onClick={()=>createPagination(totalPages, page + 1)}><span>Next</span></li>}

</ul>
</div>
    
  )
}
