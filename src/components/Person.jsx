import { Card, CardContent, Typography } from "@mui/material";

export function Person({ person }) {
  return (
    <article style={{ marginTop: "1rem" }}>
      <Card sx={{ minWidth: 100, height: 100 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
            <h1>{person.name}</h1>
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
}
