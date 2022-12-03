import React, { Fragment, useEffect, useState } from 'react'
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'


export const TableHeadRow=(props)=>{

    const [header,setHeader] =useState([])
     
    useEffect(()=>{
        
        props.headerRow.forEach(element => {
            element['sort']='default'
        });
        setHeader(props.headerRow)

    },[])

    const sortKey=(e,i)=>{
   
    if(e.sort==='default'){
    var sort = props.rowData.sort((a, b) => (a[e.field] > b[e.field]) ? 1 : -1)
    props.getSortedData(sort)
        header[i].sort='up'
        setHeader(header)
    }
    else if(e.sort==='up'){
    var sort = props.rowData.sort((a, b) => (a[e.field] < b[e.field]) ? 1 : -1)
    props.getSortedData(sort)
        header[i].sort='down'
        setHeader(header)
    }
    else if(e.sort==='down'){
    props.getSortedData(null)
    header[i].sort='default'
    setHeader(header)
    }

    }


    return (
        <Fragment>
        <thead>
        <tr>
            {header.map((el,i)=>{
                return (<th key={i} onClick={()=>sortKey(el,i)}>{el.title} {el.sort==='down' ? <ArrowDownward></ArrowDownward> : <ArrowUpward></ArrowUpward>}</th>)
            })}
            
        </tr>
      </thead>
      </Fragment>
    )
}