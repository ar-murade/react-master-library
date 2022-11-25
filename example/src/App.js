import React, { Fragment } from 'react'

import { Accordion, AccordionGroup, Alert, Button, Collapse,Carousel, StarRating } from 'react-master-library'
import 'react-master-library/dist/index.css'


const App = () => {
  
  const images =[
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    'https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    'https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  
  return (
    <Fragment>
      <StarRating />
 
<Carousel items={images}/>

      <Collapse width="500px" title="Title">Content</Collapse>

<Alert type="info" status="Test info message" heading="Info" showCloseButton={false}/>
<Alert type="error" showCloseButton={true} />
<Alert type="success"/>
<Alert type="warning"/>

      <div style={{width:'500px'}}>

     
<Accordion >
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
