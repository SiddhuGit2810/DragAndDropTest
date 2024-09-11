import { useState } from 'react';
import './App.css';


import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const initialItems = [
  { id: "Samuel", name: "Gary GoodSpeed", thumb: '/Images/one.webp' },
  { id: "starks", name: "Stark GoodSpeed", thumb: '/Images/two.webp' },
  { id: "lucifers", name: "Lucifer", thumb: '/Images/four.avif' },
];

const initialDropZones = [
  { id: "dropZone1", items: [] },
  { id: "dropZone2", items: [] },
  { id: "dropZone3", items: [] }



  // Add more drop zones as needed
];


function App() {
  const [dragItems, setDragItems] = useState(initialItems);
  const [dropZones, setDropZones] = useState(initialDropZones);

  function onDragEnd(result) {
    const { source, destination } = result;
  

    console.log(source)

    console.log(destination)
  
    // If there's no destination, exit the function
    if (!destination) return;
  
    // Handle source and destination indexes
    const sourceIsDrag = source.droppableId === "EmployeeArea";
    const destinationIsDrag = destination.droppableId === "EmployeeArea";
  
    let item;
    let newDragItems = dragItems
    let newDropZones = dropZones.map(zone => ({ ...zone }));

    console.log(newDropZones)

   
  
    if (sourceIsDrag) {
    

      [item] = newDragItems.splice(source.index, 1);

    
  
      if (destinationIsDrag) {
        // Moving within the drag list
        newDragItems.splice(destination.index, 0, item);
      } else {
        // Moving to a drop zone
        const destZoneIndex = dropZones.findIndex(zone => zone.id === destination.droppableId);
        newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
      }
    } else {
      // Moving from a drop zone
      const sourceZoneIndex = dropZones.findIndex(zone => zone.id === source.droppableId);
      [item] = newDropZones[sourceZoneIndex].items.splice(source.index, 1);
  
      if (destinationIsDrag) {
        // Moving to the drag list
        newDragItems.splice(destination.index, 0, item);
      } else {
        // Moving to another drop zone
        const destZoneIndex = dropZones.findIndex(zone => zone.id === destination.droppableId);
        newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
      }
    }
  
    // Update the states
    setDragItems(newDragItems);
    setDropZones(newDropZones);
  }
  
  

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="Home">
    

    <div className="EmplyoeeDivArea">
    <Droppable droppableId='EmployeeArea' >

{

  (provided)=>(


  

    <Col xs={12} md={3} lg={2} className="bg-dark text-white p-3"  ref={provided.innerRef} {...provided.droppableProps}   >
    <h2 className="text-center">Employees</h2>
    
    {dragItems.map((employee, index)=>(
      <div className=''>


<Draggable key={employee.id} draggableId={employee.id} index={index} >

  {
    (provided)=>(
      <div className="employees"  ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps} >

{employee.name}
      </div>
     

    )
  
  }  
</Draggable>

       
      </div>
      
    ))}

{provided.placeholder}
    </Col>
  
  )
}

</Droppable>
    </div>



    <div className="EmplyoeeDropArea">

    <Droppable droppableId='MainDropZone'>

{


(provided )=>(


<div className="MainDropAreaZone"  ref={provided.innerRef} {...provided.droppableProps}  >

  <h1> Choose Chair</h1>

{dropZones.map((zone, index) => (


          
<Droppable   key={zone.id} droppableId={zone.id} >
{(provided, snapshot) => (
  <div
    ref={provided.innerRef}
    {...provided.droppableProps}
    className={`dropzone ${snapshot.isDraggingOver ? "dragDrop" : ""}`}
  >
    
    <Container>


    <Image src='./img/armchair.png' alt="Chair" fluid style={{ maxWidth: '85px', height: 'auto'}} id='image1'/>

    </Container>
    <ul className="drop">
      {zone.items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
              className={`flex ${snapshot.isDragging ? "isDragging" : ""}`}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <img src={item.thumb} alt="" />
              <h1>{item.name}</h1>
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </ul>
  </div>
)}
</Droppable>
))}
</div>



)
}

</Droppable>

    </div>




       
        </div>
      </DragDropContext>
    </div>
  );
}


export default App;
