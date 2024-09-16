import { useState } from 'react';
import './App.css';


import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const initialItems = [
  { id: "Samuel", name: "Gary GoodSpeed", thumb: '/Images/one.webp' },
  { id: "stark", name: "Stark GoodSpeed", thumb: '/Images/two.webp' },
  { id: "lucifer", name: "Lucifer", thumb: '/Images/four.avif' },
  { id: "Anand", name: "Anand", thumb: '/Images/four.avif' }
];

const initialDropZones = [
  { id: "dropZone1", items: [] },
  { id: "dropZone2", items: [] },
  { id: "dropZone3", items: [] },
  { id: "dropZone4", items: [] }



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
    <div className="AppContainer">
      
      <div className="EmployeeSidebar">
        <Droppable droppableId='EmployeeArea'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="EmployeeList">
              <h2>Employees</h2>
              {dragItems.map((employee, index) => (
                <Draggable key={employee.id} draggableId={employee.id} index={index}>
                  {(provided) => (
                    <div className="employees" ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      {employee.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>

      <div className="TableArea">
        <div className="RoundTable">
          {/* <Image src='./img/round_table.png' alt="Table" fluid style={{ maxWidth: '200px' }} /> */}
          <svg width="693" height="635" viewBox="0 0 693 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="346.5" cy="317.5" rx="346.5" ry="317.5" fill="#492916"/>
</svg>

          <div className="ChairsAroundTable">
            {dropZones.map((zone) => (
              <Droppable key={zone.id} droppableId={zone.id}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}
                    className={`chair ${snapshot.isDraggingOver ? "draggingOver" : ""}`}>
                    <Image src='./img/armchair.png' alt="Chair" fluid style={{ maxWidth: '70px' }} />
                    <ul className="drop">
                      {zone.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div className={`flex ${snapshot.isDragging ? "isDragging" : ""}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <img src={item.thumb} alt="" />
                              <h6>{item.name}</h6>
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
        </div>
      </div>
    </div>
  </DragDropContext>
</div>

  );
}


export default App;
