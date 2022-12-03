import React, { Fragment, useState } from 'react'

import { Accordion, AccordionGroup, Alert, Button, Collapse,Carousel,Card,StarRating, Tab,TabContent, Tooltip, Table, TableRowData, TableHeadRow, TableSearch, TablePagination, HeaderComponent } from 'react-master-library'
import 'react-master-library/dist/index.css'
import logo from './ReactJS.png'



const App = () => {
  var [valStar, setValStar] =useState(3.5)
  var [dataset,setData]=useState([
    {position: 1,  name: "Hydrogen", weight: 1.0079, symbol: "H"},
    {position: 2,  name: "Helium", weight: 4.0026, symbol: "He"},
    {position: 3,  name: "Lithium", weight: 6.941, symbol: "Li"},
    {position: 4,  name: "Beryllium", weight: 9.0122, symbol: "Be"},
    {position: 5,  name: "Boron", weight: 10.811, symbol: "B"},
  
  ])

  const getstarlength=(e)=>{
  setValStar(e)
  }
  const onPageChange=(e)=>{
   //console.log(e)
  //  if(e===2){
  //   setData([
     
  //     {position: 3,  name: "Lithium", weight: 6.941, symbol: "Li"},
  //     {position: 4,  name: "Beryllium", weight: 9.0122, symbol: "Be"},
  //     {position: 5,  name: "Boron", weight: 10.811, symbol: "B"},
    
  //   ])
  //  }else{
  //   setData([
     
  //     {position: 1,  name: "Hydrogen", weight: 1.0079, symbol: "H"},
  //     {position: 2,  name: "Helium", weight: 4.0026, symbol: "He"},
  //     {position: 3,  name: "Lithium", weight: 6.941, symbol: "Li"},
  //     {position: 4,  name: "Beryllium", weight: 9.0122, symbol: "Be"},
  //     {position: 5,  name: "Boron", weight: 10.811, symbol: "B"},
    
  //   ])
  //  }
   
  }
  
  const images =[
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    'https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    'https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  const headerCell=[
    {
    title:"Position",
    field:"position",
    type:"Number"
    },
    {
    title:"Name",
    field:"name",
    type:"String"
    },
    {
    title:"Weight",
    field:"weight",
    type:"String"
    },
    {
    title:"Symbol",
    field:"symbol",
    type:"String"
    },

];

  
  return (
    <Fragment>
     
     <HeaderComponent logo={logo} menuIcon={true}></HeaderComponent>
      <Card width="500px">
        This is card
      </Card>

      <Table width="500px">
        {/* <TableSearch></TableSearch> */}
        <TableHeadRow headerRow={headerCell}></TableHeadRow>
        <TableRowData rowData={dataset}></TableRowData>
        <TablePagination itemPerPage={2} onPageChange={onPageChange} ></TablePagination>
      </Table>
      {/* <Pagination records={data} itemPerPage={5} onPageChange={onPageChange} getPaginatedData={getPaginatedData} activePage={1}></Pagination> */}

      <Tooltip tooltipData="this is tooltip" tooltipPosition="right">Right</Tooltip>
      <Tooltip tooltipData="this is tooltip" tooltipPosition="top">Top</Tooltip>
      <Tooltip tooltipData="this is tooltip" tooltipPosition="left">Left</Tooltip>
      <Tooltip tooltipData="this is tooltip" tooltipPosition="bottom">Bottom</Tooltip>
<Tab width="500px">
  <TabContent title="Title 1">
   Content 1
  </TabContent>
  <TabContent title="Title 2">
   <div>
   Content 2
   </div>
  </TabContent> 
  <TabContent title="Title 2">
   <div>
   Content 2
   </div>
  </TabContent> 
  <TabContent title="Title 2">
   <div>
   Content 2
   </div>
  </TabContent> 
  <TabContent title="Title 2">
   <div>
   Content 2
   </div>
  </TabContent> 
  <TabContent title="Title 2">
   <div>
   Content 2
   </div>
  </TabContent> 
</Tab>
    
      <StarRating starCount={7} halfStarRating={true} onClick={getstarlength} value={valStar}/>
      <StarRating  onClick={getstarlength} value={3}/>
 
{/* <Carousel items={images} dotNavigation={false} /> */}
<Carousel items={images}  autoPlay={false} />

      <Collapse width="500px" title="Title">Content</Collapse>

<Alert type="info" status="Test info message" heading="Info" showCloseButton={false}/>
<Alert type="error" showCloseButton={true} />
<Alert type="success"/>
<Alert type="warning"/>

  <div style={{width:'500px'}}>

     
<Accordion singleExpand={true}>
      <AccordionGroup heading="Item 1">
      Item 1 content
      </AccordionGroup>
      <AccordionGroup heading="Item 2">
      Item 2 content
      </AccordionGroup>
    </Accordion>
    </div>
    <br />
    <Button buttonType="solid"/>
    </Fragment>
    
  )
}

export default App
