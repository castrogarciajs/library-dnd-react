import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, Typography } from "@mui/material";

export function Person({ person }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: person.id,
    });

  const css = {
    marginTop: "1rem",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article style={css} ref={setNodeRef} {...attributes} {...listeners}>
      <Card sx={{ minWidth: 275, height: 100 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
            <h1>{person.name}</h1>
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
}
