import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";

function App() {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Jhon",
    },
    {
      id: 2,
      name: "Sebastian",
    },
    {
      id: 3,
      name: "Juan",
    },
  ]);
  
  const handleDragEnd = () => {};
  
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h1>Users List</h1>
    </DndContext>
  );
}

export default App;
