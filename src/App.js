import { useState } from 'react';
import './App.css';
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const initialItems = [
  { id: "Samuel", name: "Gary", thumb: '/Images/one.webp' },
  { id: "stark", name: "Stark", thumb: '/Images/two.webp' },
  { id: "lucifer", name: "Lucifer", thumb: '/Images/four.avif' },
  { id: "Anand", name: "Anand", thumb: '/Images/four.avif' }
];

const initialDropZones = [
  { id: "FirstTable1", items: [] ,number:"1" },
  { id: "FirstTable2", items: [],number:"2" },
  { id: "FirstTable3", items: [] ,number:"3"},
  { id: "FirstTable4", items: [] ,number:"4"}
 



  // Add more drop zones as needed
];


const initialDropZones2=[


  { id: "SecondTable1", items: [],number:"5" },
  { id: "SecondTable2", items: [],number:"6" },
  { id: "SecondTable3", items: [] ,number:"7"},
  { id: "SecondTable4", items: [],number:"8" }
 

]


const initialDropZones3=[


  { id: "ThirdTable1", items: [],number:"9" },
  { id: "ThirdTable2", items: [],number:"10" },
  { id: "ThirdTable3", items: [] ,number:"11"},
  { id: "ThirdTable4", items: [],number:"12" }
 

]
const initialDropZones4=[


  { id: "FourthTable1", items: [],number:"13" },
  { id: "FourthTable2", items: [],number:"14" },
  { id: "FourthTable3", items: [] ,number:"15"},
  { id: "FourthTable4", items: [],number:"16" }
 

]
const initialDropZones5=[


  { id: "FiveTable1", items: [],number:"17" },
  { id: "FiveTable2", items: [],number:"18" },
  { id: "FiveTable3", items: [] ,number:"19"},
  { id: "FiveTable4", items: [],number:"20" }
 

]

function App() {
  const [dragItems, setDragItems] = useState(initialItems);
  const [dropZones, setDropZones] = useState(initialDropZones);
  const [dropZones2, setDropZones2] = useState(initialDropZones2);
  const [dropZones3, setDropZones3] = useState(initialDropZones3);
  const [dropZones4, setDropZones4] = useState(initialDropZones4);
  const [dropZones5, setDropZones5] = useState(initialDropZones5);


  function onDragEnd(result) {
    const { source, destination } = result;

    console.log(result);

    if (!destination) return;

    let item;
    let sourceItems = dragItems;
    let newDropZones = dropZones.map(zone => ({ ...zone }));
    let newDropZones2 = dropZones2.map(zone => ({ ...zone }));
    let newDropZones3 = initialDropZones3.map(zone => ({ ...zone }));
    let newDropZones4 = initialDropZones4.map(zone => ({ ...zone }));
    let newDropZones5 = initialDropZones5.map(zone => ({ ...zone }));

    // Moving items from the Employee Area
    if (source.droppableId === "EmployeeArea") {
        [item] = sourceItems.splice(source.index, 1);

        if (destination.droppableId.startsWith("FirstTable")) {
            const destZoneIndex = newDropZones.findIndex(zone => zone.id === destination.droppableId);
            newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
        } else if (destination.droppableId.startsWith("SecondTable")) {
            const destZoneIndex = newDropZones2.findIndex(zone => zone.id === destination.droppableId);
            newDropZones2[destZoneIndex].items.splice(destination.index, 0, item);
        } else if (destination.droppableId.startsWith("ThirdTable")) {
            const destZoneIndex = newDropZones3.findIndex(zone => zone.id === destination.droppableId);
            newDropZones3[destZoneIndex].items.splice(destination.index, 0, item);
        } else if (destination.droppableId.startsWith("FourthTable")) {
            const destZoneIndex = newDropZones4.findIndex(zone => zone.id === destination.droppableId);
            newDropZones4[destZoneIndex].items.splice(destination.index, 0, item);
        } else if (destination.droppableId.startsWith("FiveTable")) {
            const destZoneIndex = newDropZones5.findIndex(zone => zone.id === destination.droppableId);
            newDropZones5[destZoneIndex].items.splice(destination.index, 0, item);
        }

        
    } 
    // Moving items from FirstTable zones
    // else if (source.droppableId.startsWith("FirstTable")) {
    //     const sourceZoneIndex = newDropZones.findIndex(zone => zone.id === source.droppableId);
    //     [item] = newDropZones[sourceZoneIndex].items.splice(source.index, 1);

    //     if (destination.droppableId.startsWith("FirstTable")) {
    //         const destZoneIndex = newDropZones.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("SecondTable")) {
    //         const destZoneIndex = newDropZones2.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones2[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("ThirdTable")) {
    //         const destZoneIndex = newDropZones3.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones3[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("FourthTable")) {
    //         const destZoneIndex = newDropZones4.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones4[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("FiveTable")) {
    //         const destZoneIndex = newDropZones5.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones5[destZoneIndex].items.splice(destination.index, 0, item);
    //     }
    // }
    // Moving items from SecondTable zones
    // else if (source.droppableId.startsWith("SecondTable")) {
    //     const sourceZoneIndex = newDropZones2.findIndex(zone => zone.id === source.droppableId);
    //     [item] = newDropZones2[sourceZoneIndex].items.splice(source.index, 1);

    //     if (destination.droppableId.startsWith("FirstTable")) {
    //         const destZoneIndex = newDropZones.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("SecondTable")) {
    //         const destZoneIndex = newDropZones2.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones2[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("ThirdTable")) {
    //         const destZoneIndex = newDropZones3.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones3[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("FourthTable")) {
    //         const destZoneIndex = newDropZones4.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones4[destZoneIndex].items.splice(destination.index, 0, item);
    //     } else if (destination.droppableId.startsWith("FiveTable")) {
    //         const destZoneIndex = newDropZones5.findIndex(zone => zone.id === destination.droppableId);
    //         newDropZones5[destZoneIndex].items.splice(destination.index, 0, item);
    //     }
    // }
    
    // Repeat similar logic for ThirdTable, FourthTable, and FiveTable...

    // Update state with the modified arrays
    setDragItems(sourceItems);
    setDropZones(newDropZones);
    setDropZones2(newDropZones2);
    setDropZones3(newDropZones3);
    setDropZones4(newDropZones4);
    setDropZones5(newDropZones5);
}

  

  return (
<div className="App">
  <DragDropContext onDragEnd={onDragEnd}>
    <div className="AppContainer">
      
      <div className="EmployeeSidebar">
        <Droppable droppableId='EmployeeArea'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="EmployeeList">
              <h2>Guests</h2>
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


 
 <TransformWrapper 
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >

{
 ({ zoomIn, zoomOut, resetTransform})=>(<>


  <TransformComponent>

<div className="zoomable-content">
<div className="Screen">


</div>
<div className="HallOfChairs">


<div className="FirstRow">
<div className="RoundTable one">
         
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
                                   <h6 className='TableGuestName' >{item.name}</h6>
                             
                         
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
                                   <h6 className='TableGuestName' >{item.name}</h6>
                            
                         
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


<div className="SecondRow">

<div className="RoundTable three">
      
      <svg width="693" height="635" viewBox="0 0 693 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="346.5" cy="317.5" rx="346.5" ry="317.5" fill="#492916"/>
</svg>

      <div className="ChairsAroundTable">

      
        {dropZones3.map((zone) => (
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
                                <h6 className='TableGuestName' >{item.name}</h6>
                         
                      
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


<div className="ThirdRow">

<div className="RoundTable four">
      
      <svg width="693" height="635" viewBox="0 0 693 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="346.5" cy="317.5" rx="346.5" ry="317.5" fill="#492916"/>
</svg>

      <div className="ChairsAroundTable">

      
        {dropZones4.map((zone) => (
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
                                <h6 className='TableGuestName' >{item.name}</h6>
                         
                      
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


    <div className="RoundTable five">
      
      <svg width="693" height="635" viewBox="0 0 693 635" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="346.5" cy="317.5" rx="346.5" ry="317.5" fill="#492916"/>
</svg>

      <div className="ChairsAroundTable">

      
        {dropZones5.map((zone) => (
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
                                <h6 className='TableGuestName' >{item.name}</h6>
                         
                      
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

  </TransformComponent>

  </>

 )
}



      </TransformWrapper>



       


      </div>
    </div>
  </DragDropContext>
</div>

  );
}


export default App;
