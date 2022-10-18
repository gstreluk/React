import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = ({producto}) => {


  return (
    
    <>  
       <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <img src={producto.imagen} alt="" />
        <Typography variant="h5" component="div">
         {producto.nombre}  
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {producto.descripcion}
        </Typography>
        <Typography variant="body1">
          {"$ "+ producto.precio}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar a carrito</Button>
        
      </CardActions>
    </Card>
    </>
  );
    };
export default Item
