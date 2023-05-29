import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Person } from "./components/Person";

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

      <SortableContext items={person} strategy={verticalListSortingStrategy}>
        {/* vertical components */}

        {person.map((prs) => (
          <Person person={prs} key={prs.id} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

export default App;
