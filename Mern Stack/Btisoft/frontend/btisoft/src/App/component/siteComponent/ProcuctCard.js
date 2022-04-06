import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function ProcuctCard({ product, index }) {
  return (
    <div style={{margin:'1vmax',}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product[index].images[0].url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product[index].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product[index].description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
