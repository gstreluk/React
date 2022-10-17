import React from 'react';


const Item = ({lista}) => {
  return (

    <>
       
        {
              lista.map((producto) => {
                  return <h2 key={producto.id} >{producto.nombre}</h2>
              })
          } 
</>
  );
    };
export default Item
