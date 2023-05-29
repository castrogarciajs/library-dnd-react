import { useSortable } from "@dnd-kit/sortable";
import { Card, CardContent, Typography } from "@mui/material";

export function Person({ person }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: person.id,
  });

  return (
    <article
      style={{ marginTop: "1rem" }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
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
