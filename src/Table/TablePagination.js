import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import styles from './../Pagination/Pagination.css'

export const TablePagination = (props) => {

  const [page, setPage] =useState(props.activePage? props.activePage : 1)
const tpage =props.itemPerPage? props.itemPerPage : 10
const totalPages =props.Totalpages ?props.Totalpages: chunks(props.records, tpage).length

  useEffect(()=>{
      createPagination(totalPages,page)
  },[])
  useEffect(()=>{
 
    if(props.getOriginalRecord==null || props.getOriginalRecord==='search'){
   
      createPagination(totalPages,1)

    }
  },[props.getOriginalRecord])
  
  function chunks (a, size){
   return Array.from(
      new Array(Math.ceil(a.length / size)),
      (_, i) => a.slice(i * size, i * size + size)
  );
  }
  
  
  function createPagination(totalPages, page){
    

  if(totalPages<page || page<=0){
    return
  }
  
    const records=[...props.records]
   
      setPage(page)

  
      if(props.onPageChange){
        props.onPageChange(page)
      }
      if(props.Totalpages===undefined){
      
        if(props.getPaginatedData){
          props.getPaginatedData(chunks(records, tpage)[page-1])
        }
      }
      

  }
  
  
  
    return (
      <div className={styles.pagination}>
        
        <div className={styles.title}>Page {page} of {totalPages}</div>
        {props.showFirstLast && <div className={page===1? styles.btn+' '+styles.disablearrow: styles.btn} onClick={()=>createPagination(totalPages, 1)}><FirstPage></FirstPage></div>}
        <div className={page===1? styles.btn+' '+styles.disablearrow: styles.btn} onClick={()=>createPagination(totalPages, page - 1)}><KeyboardArrowLeft></KeyboardArrowLeft></div>
        <div className={page===totalPages? styles.btn+' '+styles.disablearrow: styles.btn} onClick={()=>createPagination(totalPages, page + 1)}><KeyboardArrowRight></KeyboardArrowRight></div>
        {props.showFirstLast &&  <div className={page===totalPages? styles.btn+' '+styles.disablearrow: styles.btn} onClick={()=>createPagination(totalPages, totalPages)}><LastPage></LastPage></div>}
   
  </div>
      
    )
  }