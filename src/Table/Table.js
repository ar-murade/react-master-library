import React,{useState,useEffect} from 'react'
import styles from './Table.css'
import { TableHeadRow } from './TableHeadRow'
import { TablePagination } from './TablePagination'
import { TableRowData } from './TableRowData'
import { TableSearch } from './TableSearch'

export const Table=(props)=>{
  
  const [fieldarray,setFieldarray]=useState([])
  const [header, setHeader] =useState()
 const [search, setSearch] =useState()
  const [rowdata, setRowData] =useState()
  const [refresh,setRefresh]=useState()
  const [pagination, setPagination] =useState()
 
  useEffect(()=>{
    if(props.children.length>0){
    if(props.children.find(el=>el.type.name==='TableRowData')){
      setRowData(props.children.find(el=>el.type.name==='TableRowData').props.rowData)
    }
    if(props.children.find(el=>el.type.name==='TableHeadRow')){
      setHeader(props.children.find(el=>el.type.name==='TableHeadRow').props.headerRow)
    }
    if(props.children.find(el=>el.type.name==='TablePagination')){
      setPagination(props.children.find(el=>el.type.name==='TablePagination'))
    }
    if(props.children.find(el=>el.type.name==='TableSearch')){
      setSearch(props.children.find(el=>el.type.name==='TableSearch'))
    }
    }

  },[])
  useEffect(()=>{
    if(pagination){
      if(pagination.props.totalPages){
        setRowData([...props.children.find(el=>el.type.name==='TableRowData').props.rowData])
      }
    }
  
  },[props.children.find(el=>el.type.name==='TableRowData').props.rowData])
  
 

  useEffect(()=>{
    if(header!==undefined){
     var at=[]
     
      header.forEach(element => {
        at.push(element.field)
      });
       setFieldarray(at)
    }
   

  
  },[header])


  const getSearchedData=(e,type)=>{
    
    if(type==='search'){
      setRefresh(type)
    }

    if(e!==null){
      var newar =[...e]
      setRowData(newar)
     
    }
    else{
      setRefresh(e)
      setRowData([...props.children.find(el=>el.type.name==='TableRowData').props.rowData])
     
    }
  }
  
  
  
    return (
      <div style={{width:props.width}} className={styles.mainwrapper}>
        { search && <TableSearch getSearchedData={(e)=>getSearchedData(e,'search')} allData={rowdata} fieldArray={fieldarray}></TableSearch> }

     <div style={{maxHeight:props.maxHeight}} className={styles.tablecontainer}>
     {(header && rowdata ) && <table className={styles.tablewrapper} >
      
     <TableHeadRow headerRow={header} rowData={rowdata} fieldarray={fieldarray} getSortedData={(e)=>getSearchedData(e,null)}></TableHeadRow> 
      <TableRowData rowData={rowdata} headerRow={header} fieldarray={fieldarray}></TableRowData>
       
      </table>}
    
     </div>
     {pagination && <TablePagination Totalpages={pagination.props.totalPages} showFirstLast={pagination.props.showFirstLast} getOriginalRecord={refresh} getSearchData={rowdata} records={props.children.find(el=>el.type.name==='TableRowData').props.rowData} getPaginatedData={getSearchedData} onPageChange={pagination.props.onPageChange? (e)=>pagination.props.onPageChange(e):undefined} itemPerPage={pagination.props.itemPerPage}></TablePagination>}
     </div>
      
   
    )
}