import React, { useEffect, useState } from 'react'


export const TableRowData=(props)=>{
  



    return (
      <tbody>
        {props.rowData.map((el,i)=>{
         return (
         <tr key={i}>
          {props.fieldarray.map((tl,j)=>{
         return <td data-column={tl} key={j}>{el[tl]}</td>
          })}
        </tr>)
        })}
      
    
    </tbody>
    )
}