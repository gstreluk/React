import React from 'react';
import Item from './Item';

const ItemList = ({lista}) => {
  return (
    <>
        {
              lista.map((producto) => {
                  return <Item key={producto.id} producto= {producto}/>
              })
          } 
    </>
  );
};

export default ItemList
