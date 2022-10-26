import React from 'react';
import Card from "@mui/material/Card";
import {  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';
import { Link } from "react-router-dom";


const Item = ({producto}) => {

  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.image}
          alt={producto.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/producto/" + producto.id}>
          <Button size="small" color="primary">
            Ver
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item


