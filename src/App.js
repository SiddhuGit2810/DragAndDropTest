import { useState } from 'react';
import './App.css';


import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const initialItems = [
  { id: "Samuel", name: "Gary", thumb: '/Images/one.webp' },
  { id: "stark", name: "Stark", thumb: '/Images/two.webp' },
  { id: "lucifer", name: "Lucifer", thumb: '/Images/four.avif' },
  { id: "Anand", name: "Anand", thumb: '/Images/four.avif' }
];

const initialDropZones = [
  { id: "dropZone1", items: [] ,number:"1" },
  { id: "dropZone2", items: [],number:"2" },
  { id: "dropZone3", items: [] ,number:"3"},
  { id: "dropZone4", items: [] ,number:"4"}
 



  // Add more drop zones as needed
];


const initialDropZones2=[


  { id: "QdropZone5", items: [],number:"5" },
  { id: "QdropZone6", items: [],number:"6" },
  { id: "QdropZone7", items: [] ,number:"7"},
  { id: "QdropZone8", items: [],number:"8" }
 

]


function App() {
  const [dragItems, setDragItems] = useState(initialItems);
  const [dropZones, setDropZones] = useState(initialDropZones);
  const [dropZones2, setDropZones2] = useState(initialDropZones2);


  function onDragEnd(result) {
    const { source, destination } = result;

    console.log(result)

    if (!destination) return;

    let item;
    let sourceItems = dragItems;
    let newDropZones = dropZones.map(zone => ({ ...zone }));
    let newDropZones2 = dropZones2.map(zone => ({ ...zone }));

    if (source.droppableId === "EmployeeArea") {
      [item] = sourceItems.splice(source.index, 1);

      if (destination.droppableId.startsWith("dropZone")) {
        const destZoneIndex = dropZones.findIndex(zone => zone.id === destination.droppableId);
        console.log(destZoneIndex)
        newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
      } else {
        const destZoneIndex = dropZones2.findIndex(zone => zone.id === destination.droppableId);
        newDropZones2[destZoneIndex].items.splice(destination.index, 0, item);
      }
    } else if (source.droppableId.startsWith("dropZone")) {
      const sourceZoneIndex = dropZones.findIndex(zone => zone.id === source.droppableId);
      [item] = newDropZones[sourceZoneIndex].items.splice(source.index, 1);

      if (destination.droppableId.startsWith("dropZone")) {
        const destZoneIndex = dropZones.findIndex(zone => zone.id === destination.droppableId);
        newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
      } else {
        const destZoneIndex = dropZones2.findIndex(zone => zone.id === destination.droppableId);
        newDropZones2[destZoneIndex].items.splice(destination.index, 0, item);
      }
    } else if (source.droppableId.startsWith("dropZone2")) {
      const sourceZoneIndex = dropZones2.findIndex(zone => zone.id === source.droppableId);
      [item] = newDropZones2[sourceZoneIndex].items.splice(source.index, 1);

      if (destination.droppableId.startsWith("dropZone")) {
        const destZoneIndex = dropZones.findIndex(zone => zone.id === destination.droppableId);
        newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
      } else {
        const destZoneIndex = dropZones2.findIndex(zone => zone.id === destination.droppableId);
        newDropZones2[destZoneIndex].items.splice(destination.index, 0, item);
      }
    }

    setDragItems(sourceItems);
    setDropZones(newDropZones);
    setDropZones2(newDropZones2);
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

 <div className="Screen">


 </div>


 <div className="HallOfChairs">

 <div className="RoundTable one">
          
          <svg width="693" height="635" viewBox="0 0 693 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="346.5" cy="317.5" rx="346.5" ry="317.5" fill="#492916"/>
</svg>

          <div className="ChairsAroundTable">
            {dropZones2.map((zone) => (
              <Droppable key={zone.id} droppableId={zone.id}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}
                    className={`chair ${snapshot.isDraggingOver ? "draggingOver" : ""}`}>
                    <Image   src='./img/armchair.png' alt="Chair" fluid style={{ maxWidth: '70px' }}  className='bsImg' />
                    <h6>{zone.number}</h6>
                    <ul className="drop">
                      {zone.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div className={`flex ${snapshot.isDragging ? "isDragging" : ""}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                                    <h6>{item.name}</h6>
                              <img src={item.thumb} alt="" />
                          
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

 <div className="RoundTable two">
       
          <svg width="693" height="635" viewBox="0 0 693 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="346.5" cy="317.5" rx="346.5" ry="317.5" fill="#492916"/>
</svg>

          <div className="ChairsAroundTable">

          
            {dropZones.map((zone) => (
              <Droppable key={zone.id} droppableId={zone.id}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}
                    className={`chair ${snapshot.isDraggingOver ? "draggingOver" : ""}`}>
                    <Image   src='./img/armchair.png' alt="Chair" fluid style={{ maxWidth: '70px' }}  className='bsImg' />
                    <h6>{zone.number}</h6>
                    <ul className="drop">
                      {zone.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div className={`flex ${snapshot.isDragging ? "isDragging" : ""}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                                    <h6>{item.name}</h6>
                              <img src={item.thumb} alt="" />
                          
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
    </div>
  </DragDropContext>
</div>

  );
}


export default App;
